import {
  Calendar,
  Stethoscope,
  ClipboardCheck,
  HeartPulse,
  Smile,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Book a Visit",
    description: "Pick a slot that fits your schedule in under a minute.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Meet Your Dentist",
    description: "Consult with our expert team.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Get Diagnosed",
    description: "A full checkup and clear findings, explained simply.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Receive Treatment",
    description: "Personalized care delivered with modern, gentle techniques.",
    icon: HeartPulse,
  },
  {
    number: "05",
    title: "Follow-Up & Smile",
    description: "We check in after your visit to make sure you're glowing.",
    icon: Smile,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FB] py-2 md:py-4 px-2 md:px-6">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2A9D8F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#0B2E4F]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-36 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-[#2A9D8F]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2A9D8F]">
            OUR PROCESS
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0B2E4F] md:text-[38px]">
            How It Works
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Simple steps to a healthier, brighter smile.
          </p>

          <ol className="mt-5 space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === 1;

              return (
                <li
                  key={step.number}
                  className={`group flex items-center gap-4 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    isActive
                      ? "border-[#2A9D8F]/30 bg-white shadow-md shadow-[#2A9D8F]/10"
                      : "border-transparent hover:border-slate-200 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-7 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#2A9D8F] text-white"
                        : "bg-[#0B2E4F]/5 text-[#0B2E4F] group-hover:bg-[#2A9D8F] group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-300">
                        {step.number}
                      </span>

                      <h3 className="font-semibold text-[#16324F]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-0.5 text-sm text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Right Image */}
        <div className="relative ml-auto w-full max-w-lg lg:max-w-xl">
          <div className="relative h-80 md:h-112.5 overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
              alt="Dentist reviewing a dental X-ray with a patient"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E4F]/30 via-transparent to-transparent" />
          </div>

          {/* Rating Card */}
          <div className="absolute bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg shadow-slate-200/70">
            <div className="text-lg font-bold text-[#0B2E4F]">4.9 / 5.0</div>

            <div className="h-6 w-px bg-slate-200" />

            <div className="text-sm text-slate-500">2,000+ Happy Smiles</div>
          </div>
        </div>
      </div>
    </section>
  );
}
