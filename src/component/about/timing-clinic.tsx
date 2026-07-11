"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/**
 * ClinicHoursSection — "Clinic Hours"
 * Same theme as the other sections: warm canvas background, navy display
 * heading, muted supporting copy. Right column is a quiet, scannable list
 * — each row a soft pill, day on the left, hours bold on the right.
 *
 * Usage:
 *   import ClinicHoursSection from "@/src/components/ui/ClinicHoursSection";
 *   <ClinicHoursSection />
 */

const hours = [
  { day: "Monday", time: "09:00 AM – 06:00 PM" },
  { day: "Tuesday", time: "09:00 AM – 06:00 PM" },
  { day: "Wednesday", time: "09:00 AM – 06:00 PM" },
  { day: "Thursday", time: "09:00 AM – 06:00 PM" },
  { day: "Friday", time: "09:00 AM – 06:00 PM" },
  { day: "Saturday", time: "09:00 AM – 03:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ClinicHoursSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#FBF7F0] px-6 py-16 sm:px-10 lg:px-20">
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — heading + photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0F2A3D] sm:text-4xl">
            Clinic Hours
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#0F2A3D]/60 sm:text-base">
            Find a time that works for you — our doors are open throughout the
            week
          </p>

          <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
              alt="Dentrist treatment room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-teal-400/10" />
          </div>
        </motion.div>

        {/* Right — hours list */}
        <div ref={ref} className="flex flex-col gap-3">
          {hours.map((row, i) => {
            const isClosed = row.time === "Closed";
            return (
              <motion.div
                key={row.day}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-[0_6px_20px_-16px_rgba(15,42,61,0.3)]"
              >
                <span className="text-sm font-medium text-[#0F2A3D]/60">
                  {row.day}
                </span>
                <span
                  className={
                    isClosed
                      ? "text-sm font-bold text-[#FF6B5B]"
                      : "text-sm font-bold text-[#0F2A3D]"
                  }
                >
                  {row.time}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
