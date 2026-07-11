import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appointmentEmailTemplate } from "@/src/lib/appointmentEmailTemplate";

/**
 * POST /api/book-appointment
 * Body: { name, email, date, time }
 *
 * Sends the clinic an email notification for every new appointment
 * request submitted from the hero booking form.
 *
 * REQUIRED ENV VARS (add to .env.local):
 *   SMTP_HOST=smtp.gmail.com          // or your provider's SMTP host
 *   SMTP_PORT=465
 *   SMTP_USER=your-sending-address@gmail.com
 *   SMTP_PASS=your-app-password       // Gmail: use an App Password, not your normal password
 *   CLINIC_EMAIL=contact@dentristclinic.com   // where the notification is delivered
 *
 * If you're not using Gmail, swap the transporter config for your
 * provider's SMTP details (Mailgun, SendGrid SMTP, Zoho, etc all work the
 * same way with nodemailer).
 */

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, time } = await req.json();

    if (!name || !email || !date) {
      return NextResponse.json(
        { error: "Name, email, and date are required." },
        { status: 400 },
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CLINIC_EMAIL
    ) {
      console.error(
        "Missing SMTP env vars — set SMTP_HOST, SMTP_USER, SMTP_PASS, CLINIC_EMAIL in .env.local",
      );
      return NextResponse.json(
        {
          error:
            "Email isn't configured yet — add SMTP_HOST, SMTP_USER, SMTP_PASS and CLINIC_EMAIL to .env.local and restart the dev server.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dentrist Website" <${process.env.SMTP_USER}>`,
      to: process.env.CLINIC_EMAIL,
      replyTo: email,
      subject: `New Appointment Request — ${name}`,
      html: appointmentEmailTemplate({
        name,
        email,
        date,
        time: time || "Not specified",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.error("Failed to send appointment email:", detail);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "production"
            ? "Something went wrong. Please try again."
            : `Email send failed: ${detail}`,
      },
      { status: 500 },
    );
  }
}
