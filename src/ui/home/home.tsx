"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Navbar, { Button } from "@/src/component/layout/navbar";
import { FaWhatsapp } from "react-icons/fa";

/* ============================================================================
   Doctor's WhatsApp number — replace with the real number, country code
   first, no spaces, no "+" (e.g. Pakistan number 03001234567 -> 923001234567)
   ============================================================================ */
const DOCTOR_WHATSAPP_NUMBER = "923001234567"; // TODO: replace with the real number
const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I'd like to book an appointment at Dentrist.";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
}

function FormField({ icon: Icon, className = "", ...props }: FormFieldProps) {
  return (
    <div className="relative">
      <input
        className={`w-full rounded-xl border border-transparent bg-white px-4 py-3.5 text-sm text-[#14213D] placeholder:text-[#9FAAC0] shadow-sm outline-none transition-all duration-200 focus:border-[#1FBF9C]/50 focus:ring-4 focus:ring-[#1FBF9C]/15 ${className}`}
        {...props}
      />
      {Icon && (
        <Icon
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9FAAC0]"
        />
      )}
    </div>
  );
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  options: string[];
}

function SelectField({ placeholder, options, ...props }: SelectFieldProps) {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-transparent bg-white px-4 py-3.5 text-sm text-[#14213D] shadow-sm outline-none transition-all duration-200 focus:border-[#1FBF9C]/50 focus:ring-4 focus:ring-[#1FBF9C]/15"
        {...props}
      >
        <option value="" disabled className="text-[#9FAAC0]">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9FAAC0]"
      />
    </div>
  );
}

interface BookingFormValues {
  name: string;
  email: string;
  date: string;
  time: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

function BookingForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values: BookingFormValues = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      let payload: { error?: string } = {};
      try {
        payload = await res.json();
      } catch {
        // response wasn't JSON (e.g. route returned an HTML 404 page) — payload stays empty
      }

      if (!res.ok) {
        throw new Error(
          payload.error || `Request failed with status ${res.status}`,
        );
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      console.error("Booking submission failed:", message);
      setErrorMessage(message);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const buttonLabel =
    status === "loading"
      ? "Sending..."
      : status === "success"
        ? "Request Sent ✓"
        : status === "error"
          ? "Couldn't send — try again"
          : "Submit";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-3xl border border-white/60 bg-white/50 p-6 shadow-xl shadow-[#14213D]/5 backdrop-blur-md sm:p-7"
    >
      <h3 className="mb-5 text-lg font-bold text-[#14213D]">
        Book Appointment Today
      </h3>

      <div className="space-y-3.5">
        <FormField name="name" placeholder="Full Name" required />
        <FormField
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <FormField
          type="date"
          name="date"
          placeholder="Choose Date"
          icon={Calendar}
          required
        />
        <SelectField
          name="time"
          placeholder="Choose Time"
          options={["9:00 AM", "11:00 AM", "2:00 PM", "4:30 PM"]}
        />
      </div>

      <Button
        type="submit"
        variant="solid"
        disabled={status === "loading"}
        className="mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {buttonLabel}
      </Button>

      {status === "error" && (
        <p className="mt-2 text-center text-xs text-red-500">
          {errorMessage ||
            "Something went wrong — please try again or call us directly."}
        </p>
      )}
    </form>
  );
}

function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-104 w-104 rounded-full bg-[#FFD9C0] opacity-70 blur-[90px]" />
      <div className="absolute right-0 top-10 h-88 w-88 rounded-full bg-[#BFF2DE] opacity-70 blur-[90px]" />
      <div className="absolute -bottom-24 left-1/3 h-96 w-[24rem] rounded-full bg-[#D9CCFF] opacity-60 blur-[100px]" />
    </div>
  );
}

function RatingBadge() {
  return (
    <div className="absolute -left-5 bottom-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-lg shadow-[#14213D]/10 backdrop-blur-md sm:-left-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#FF6B4A] to-[#1FBF9C]">
        <Star size={18} className="fill-white text-white" />
      </div>
      <div>
        <p className="text-sm font-bold leading-tight text-[#14213D]">
          4.9 / 5.0
        </p>
        <p className="text-xs text-[#5B6B85]">2,000+ happy smiles</p>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl">
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
          alt="Dentist treating a smiling young patient"
          fill
          className="object-cover"
        />
      </div>
      <RatingBadge />
    </div>
  );
}

export default function HomeHero() {
  function handleWhatsAppClick() {
    const url = `https://wa.me/${DOCTOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_DEFAULT_MESSAGE,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#FDFBF7]">
      <MeshBackground />
      <Navbar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 pt-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pt-14">
        <div className="flex flex-col justify-center">
          <h1 className="font-(family-name:--font-display,inherit) text-4xl font-extrabold leading-[1.1] text-[#14213D] sm:text-5xl lg:text-[3.4rem]">
            Brighten Your{" "}
            <span className="bg-linear-to-r from-[#FF6B4A] to-[#1FBF9C] bg-clip-text text-transparent">
              Smile
            </span>
            <br />
            with Dentrist
          </h1>

          <div className="mt-8">
            <BookingForm />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
            <p className="max-w-sm text-[#5B6B85]">
              Discover a dental experience that&apos;s friendly, stress-free,
              and focused entirely on you
            </p>
            <Button
              variant="solid"
              onClick={handleWhatsAppClick}
              className="mt-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1eb95b]"
            >
              <FaWhatsapp
                size={18}
                className="mr-2 rounded-full bg-white p-1 text-[#25D366]"
              />
              Book via WhatsApp
            </Button>
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
}
