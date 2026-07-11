"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/**
 * TeamSection — "Meet the Team Behind the Smiles"
 * Same theme as AboutSection / WhatWeStandFor: warm canvas background,
 * navy display heading, muted supporting copy. Cards are photo-led with
 * a soft rounded frame and a subtle lift on hover.
 *
 * Usage:
 *   import TeamSection from "@/src/components/ui/TeamSection";
 *   <TeamSection />
 */

const team = [
  {
    name: "Dr. Ethan Marquez",
    specialty: "Restorative Dentistry",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Liana Kim",
    specialty: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Marco Diaz",
    specialty: "Orthodontics",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Naya Ellis",
    specialty: "Pediatric Dentistry",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Elise Tanaka",
    specialty: "Oral Surgery",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Jamal Noor",
    specialty: "Periodontics",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Vivian Arce",
    specialty: "General Dentistry",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Owen Blake",
    specialty: "Endodontics",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#FBF7F0] px-6 py-16 sm:px-10 lg:px-20">
      <div className="relative mx-auto max-w-6xl">
        {/* Heading row */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold leading-tight tracking-tight text-[#0F2A3D] sm:text-4xl"
          >
            Meet the Team
            <br />
            Behind the Smiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xs text-right text-sm text-[#0F2A3D]/60"
          >
            Passionate professionals dedicated to exceptional dental care
          </motion.p>
        </div>

        {/* Team grid */}
        <div
          ref={ref}
          className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * (i % 4) }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0F2A3D]/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                />
              </div>
              <h3 className="mt-3 text-[15px] font-bold text-[#0F2A3D]">
                {member.name}
              </h3>
              <p className="text-sm text-[#0F2A3D]/50">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
