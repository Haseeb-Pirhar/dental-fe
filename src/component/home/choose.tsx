"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

interface Feature {
  text: string;
}

interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

const features: Feature[] = [
  { text: "Patient-first approach with tailored treatments" },
  { text: "Certified professionals and specialists" },
  { text: "Comfortable, modern facilities" },
  { text: "Transparent pricing and flexible plans" },
];

const stats: Stat[] = [
  { value: "4.9", suffix: "/5", label: "Average Rating" },
  { value: "6", label: "In-House Specialists" },
  { value: "10K+", label: "Happy Patients" },
  { value: "20+", label: "Years of Experience" },
];

/** A single checklist row: circular check mark + supporting copy. */
function FeatureItem({ text, index }: { text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-start gap-3"
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F3EC]">
        <Check className="h-3 w-3 text-[#1F8A76]" strokeWidth={3} />
      </span>
      <p className="text-sm leading-relaxed text-[#37505A]">{text}</p>
    </motion.div>
  );
}

/** A single stat row: big number, optional suffix, and its label. */
function StatItem({ value, suffix, label, index }: Stat & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-baseline gap-2.5"
    >
      <span className="font-display text-3xl font-bold leading-none text-[#123240] sm:text-4xl">
        {value}
        {suffix && (
          <span className="ml-0.5 text-base font-semibold text-[#7C9399]">
            {suffix}
          </span>
        )}
      </span>
      <span className="text-sm text-[#4B6570]">{label}</span>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FDFBF7] py-10 sm:py-18">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr_0.85fr] lg:gap-30">
        {/* Left: heading + checklist */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#123240] sm:text-3xl">
              Why Choose Dentrist
            </h2>
            <p className="mt-2 text-[#4B6570]">
              Trusted by families, backed by technology
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.text}
                text={feature.text}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Center: portrait with a soft decorative shape behind it */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2.5rem] bg-[#7FC4B6]/40 blur-[2px]"
          />
          <div className="relative mx-auto aspect-square w-72 overflow-hidden rounded-[2rem] shadow-[0_20px_45px_-20px_rgba(18,50,64,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1758691463582-11aea602cd4a?q=80&w=800&auto=format&fit=crop"
              alt="Smiling dentist in a white coat standing with arms crossed"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div> 
        </motion.div>

        {/* Right: trust stats */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-10 lg:flex-col lg:justify-start lg:gap-7">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
