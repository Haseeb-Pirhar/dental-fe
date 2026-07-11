/**
 * appointmentEmailTemplate.ts
 * Plain function that returns an HTML string — no framework dependency,
 * so it can be imported by the API route and rendered with any mailer
 * (nodemailer, Resend, SendGrid, etc).
 */

interface AppointmentEmailData {
  name: string;
  email: string;
  date: string;
  time: string;
}

export function appointmentEmailTemplate({
  name,
  email,
  date,
  time,
}: AppointmentEmailData): string {
  return `
  <div style="background:#FDFBF7; padding:32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
    <table role="presentation" width="100%" style="max-width:520px; margin:0 auto; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(20,33,61,0.08);">
      <tr>
        <td style="background:linear-gradient(135deg,#FF6B4A,#1FBF9C); padding:28px 32px;">
          <span style="color:#ffffff; font-size:20px; font-weight:800; letter-spacing:-0.02em;">Dentrist</span>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;">
          <h1 style="margin:0 0 8px; font-size:20px; color:#14213D;">New Appointment Request</h1>
          <p style="margin:0 0 24px; font-size:14px; color:#5B6B85; line-height:1.6;">
            A patient just requested an appointment through the Dentrist website. Details below.
          </p>

          <table role="presentation" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#9FAAC0; width:120px;">Name</td>
              <td style="padding:10px 0; font-size:14px; font-weight:600; color:#14213D;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#9FAAC0;">Email</td>
              <td style="padding:10px 0; font-size:14px; font-weight:600; color:#14213D;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#9FAAC0;">Date</td>
              <td style="padding:10px 0; font-size:14px; font-weight:600; color:#14213D;">${date}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#9FAAC0;">Time</td>
              <td style="padding:10px 0; font-size:14px; font-weight:600; color:#14213D;">${time}</td>
            </tr>
          </table>

          <div style="margin-top:24px; padding-top:20px; border-top:1px solid rgba(20,33,61,0.08);">
            <p style="margin:0; font-size:12px; color:#9FAAC0;">
              Reply directly to this email or call the patient to confirm the slot.
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
  `;
}
