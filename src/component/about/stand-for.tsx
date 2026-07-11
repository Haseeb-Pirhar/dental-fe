"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, BadgeCheck, Eye, HeartHandshake } from "lucide-react";

/**
 * WhatWeStandFor — core values grid
 * Same "Eyecatchy Mesh" theme as AboutSection (warm canvas, navy headings,
 * teal-mint icon chips) but intentionally compact — shorter vertical rhythm
 * than AboutSection since this block carries less content per card.
 *
 * Usage:
 *   import WhatWeStandFor from "@/src/components/ui/WhatWeStandFor";
 *   <WhatWeStandFor />
 */

const values = [
  {
    icon: Target,
    title: "Patient-Centered Care",
    description:
      "Every treatment begins with listening to your needs and goals",
  },
  {
    icon: BadgeCheck,
    title: "Excellence",
    description:
      "We uphold the highest clinical standards and pursue continuous learning",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We communicate clearly, honestly, and openly — no surprises",
  },
  {
    icon: HeartHandshake,
    title: "Comfort",
    description:
      "We prioritize gentle care and calming spaces for anxiety-free visits",
  },
];

export default function StandFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#FBF7F0] px-6 py-14 sm:px-10 lg:px-20">
      {/* subtle ambient blob — kept faint, this section is a quiet beat between bigger ones */}
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-200/25 blur-[110px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0F2A3D] sm:text-4xl">
            What We Stand For
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#0F2A3D]/60 sm:text-base">
            Our core values guide every smile we restore and every relationship
            we build
          </p>
        </motion.div>

        <div ref={ref} className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="flex items-start gap-4 rounded-2xl border border-[#0F2A3D]/5 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(15,42,61,0.25)] transition-shadow hover:shadow-[0_14px_36px_-18px_rgba(15,42,61,0.3)]"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100/80">
                <value.icon
                  className="h-5 w-5 text-teal-700"
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F2A3D]">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#0F2A3D]/60">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
