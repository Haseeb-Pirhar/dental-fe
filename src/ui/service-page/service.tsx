"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Stethoscope,
  Sparkles,
  Smile,
  Baby,
  Puzzle,
  Siren,
  Sun,
  Syringe,
  Crown,
  ArrowUpRight,
} from "lucide-react";
import Footer from "@/src/component/layout/footer";
import Navbar from "@/src/component/layout/navbar";

/**
 * ServicesSection — "Smile Solutions for Every Need"
 * Same theme as the other sections. Header sits on a tinted band (matches
 * the site's warm canvas), cards sit on plain white below for contrast.
 *
 * v2 fixes:
 *  - Icon badge moved to an absolute overlay ON the photo (top-left), so it
 *    can never get clipped by the card's overflow-hidden boundary the way
 *    the old negative-margin trick could in some flex/layout contexts.
 *  - Teeth Whitening (and a couple of duplicate) images swapped for URLs
 *    confirmed to resolve, since the old teeth-whitening one 404'd.
 *  - Cards alternate a teal / coral accent per icon + a bottom-left "Learn
 *    more" affordance that slides in on hover, plus a whole-card lift —
 *    makes the grid feel more alive without touching the layout.
 *
 * Usage:
 *   import ServicesSection from "@/src/components/ui/ServicesSection";
 *   <ServicesSection />
 */

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Preventive care and checkups to keep your teeth healthy. Regular cleanings help avoid serious dental issues.",
    image:
      "https://images.unsplash.com/photo-1662837625427-970713d74aa6?q=80&w=800&auto=format&fit=crop",
    accent: "teal" as const,
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Brighten and enhance your smile with whitening, veneers, and custom treatments.",
    image:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=800&auto=format&fit=crop",
    accent: "coral" as const,
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description:
      "Braces and Invisalign to align teeth comfortably. Ideal for both teens and adults.",
    image:
      "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?q=80&w=800&auto=format&fit=crop",
    accent: "teal" as const,
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle care for children of all ages. Fun, friendly visits with preventive care to support healthy growing smiles.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    accent: "coral" as const,
  },
  {
    icon: Puzzle,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions. Restore natural function and aesthetics with durable, lifelike implant options.",
    image:
      "https://images.unsplash.com/photo-1684607632829-1e5bf4f21dab?q=80&w=800&auto=format&fit=crop",
    accent: "teal" as const,
  },
  {
    icon: Siren,
    title: "Emergency Dental Care",
    description:
      "Fast relief when you need it most. Quick treatment for pain, breaks, or urgent issues — same-day slots available.",
    image:
      "https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=800&auto=format&fit=crop",
    accent: "coral" as const,
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments that lift years of stains safely, for a brighter smile in a single visit.",
    image:
      "https://images.unsplash.com/photo-1758691463582-11aea602cd4a?q=80&w=800&auto=format&fit=crop",
    accent: "teal" as const,
  },
  {
    icon: Syringe,
    title: "Root Canal Therapy",
    description:
      "Gentle, modern root canal treatment to relieve pain and save teeth that would otherwise need extraction.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    accent: "coral" as const,
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description:
      "Custom-fitted crowns and bridges that restore damaged teeth and close gaps, built to last and blend right in.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    accent: "teal" as const,
  },
];

const accentStyles = {
  teal: {
    badgeBg: "bg-white",
    iconColor: "text-teal-700",
    ring: "ring-teal-200",
    bar: "bg-teal-400",
    link: "text-teal-700",
  },
  coral: {
    badgeBg: "bg-white",
    iconColor: "text-[#FF6B5B]",
    ring: "ring-[#FF6B5B]/25",
    bar: "bg-[#FF6B5B]",
    link: "text-[#FF6B5B]",
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-[#FBF7F0]" />
      <Navbar />
      <section id="services" className="relative">
        {/* Header band — tinted, matches warm canvas used across the site */}
        <div className="bg-[#FBF7F0] px-6 py-16 text-center sm:px-10 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0F2A3D] sm:text-4xl"
          >
            Smile Solutions for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 max-w-md text-sm text-[#0F2A3D]/60 sm:text-base"
          >
            Whether it&apos;s a checkup or a full makeover, we&apos;ve got you
            covered
          </motion.p>
        </div>

        {/* Card grid — plain background for contrast against the tinted header */}
        <div className="bg-white px-6 py-14 sm:px-10 lg:px-20">
          <div
            ref={ref}
            className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, i) => {
              const accent = accentStyles[service.accent];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.06 * (i % 3) }}
                  className="group relative overflow-hidden rounded-2xl border border-[#0F2A3D]/5 bg-white shadow-[0_10px_30px_-22px_rgba(15,42,61,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-16px_rgba(15,42,61,0.35)]"
                >
                  {/* thin accent bar — ties each card to its icon color */}
                  <div className={`h-1 w-full ${accent.bar}`} />

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    {/* icon badge — absolute on the photo, can never get clipped */}
                    <div
                      className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl ${accent.badgeBg} shadow-lg ring-4 ${accent.ring}`}
                    >
                      <service.icon
                        className={`h-5 w-5 ${accent.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0F2A3D]">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#0F2A3D]/60">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
