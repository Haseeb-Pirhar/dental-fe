"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * GetStartedSection — "How to Get Started"
 * Same theme as the other sections: warm canvas, navy display heading,
 * teal-mint step badges. Columns are separated by hairline dividers (only
 * appropriate here since these steps really are a sequence — book, visit,
 * treat) with a subtle connecting line ghosted behind the numbers.
 *
 * Usage:
 *   import GetStartedSection from "@/src/components/ui/GetStartedSection";
 *   <GetStartedSection />
 */

const steps = [
  {
    number: "01",
    title: "Schedule an Appointment",
    description:
      "Choose a date and time that works best for you. We offer flexible hours throughout the week.",
  },
  {
    number: "02",
    title: "Come Visit Our Clinic",
    description:
      "Arrive at your scheduled time and check in at the front desk. We'll handle the rest.",
  },
  {
    number: "03",
    title: "Receive Expert Care",
    description:
      "Enjoy calm, personalized dental care thoughtfully designed for your comfort.",
  },
];

export default function GetStartedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#FBF7F0] px-6 py-16 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-200/25 blur-[110px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0F2A3D] sm:text-4xl">
            How to Get Started
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#0F2A3D]/60 sm:text-base">
            Getting started with Dentrist is simple — just follow these easy
            steps
          </p>
        </motion.div>

        <div
          ref={ref}
          className="relative mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6"
        >
          {/* connecting line — ghosted behind the step badges, ties the sequence together */}
          <div className="pointer-events-none absolute left-0 right-0 top-[15px] hidden h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent sm:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.12 * i }}
              className={`relative ${
                i > 0 ? "sm:border-l sm:border-[#0F2A3D]/10 sm:pl-6" : ""
              }`}
            >
              <span className="relative z-10 inline-flex h-8 w-14 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0F2A3D]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#0F2A3D]/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
