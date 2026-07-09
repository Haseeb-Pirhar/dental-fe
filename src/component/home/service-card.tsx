"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt?: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

/**
 * A single tile in the ServicesSection grid. Every tile is a photo tile:
 * background photo -> navy gradient (for legibility) -> white text on top.
 *
 * NOTE on color: this file intentionally uses Tailwind's arbitrary-value
 * syntax (e.g. text-[#F4FAF7]) instead of custom theme names like
 * `text-navy-900`. Arbitrary values are generated automatically and render
 * immediately — no tailwind.config.ts changes required. If you've already
 * added the color tokens from SETUP.md, feel free to swap these for the
 * named classes instead.
 */
export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { title, description, icon: Icon, imageSrc, imageAlt } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl p-6 shadow-[0_1px_2px_rgba(15,42,53,0.15)] transition-shadow duration-300 hover:shadow-[0_20px_36px_-14px_rgba(15,42,53,0.45)] sm:min-h-[260px] sm:p-7"
    >
      {/* Photo layer */}
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 -z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Legibility gradient — darker at the bottom where the text sits, so
          the photo stays readable regardless of how bright the source image is */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B1F27] via-[#0B1F27]/55 to-[#0B1F27]/10" />

      {/* Icon badge */}
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FBFEFC] shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Icon className="h-5 w-5 text-[#1F8A76]" strokeWidth={2} />
      </span>

      <h3 className="font-display text-lg font-semibold leading-snug text-[#FBFEFC] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:text-xl">
        {title}
      </h3>
      <p className="mt-1.5 max-w-[30ch] text-sm leading-relaxed text-[#E4EEE9] [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
        {description}
      </p>
    </motion.div>
  );
}
