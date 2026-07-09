"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Smile,
  Baby,
  Anchor,
  Siren,
} from "lucide-react";
import ServiceCard, { type Service } from "./service-card";

const services: Service[] = [
  {
    title: "General Dentistry",
    description: "Preventive care and routine checkups",
    icon: ShieldCheck,
    imageSrc:
      "https://images.unsplash.com/photo-1662837625427-970713d74aa6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dentist examining a patient during a routine checkup",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile makeovers with whitening, veneers & more",
    icon: Sparkles,
    imageSrc:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Close-up of a bright, confident smile",
  },
  {
    title: "Orthodontics",
    description: "Braces and Invisalign for a perfect alignment",
    icon: Smile,
    imageSrc:
      "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Person with dental braces smiling",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle, friendly care for children of all ages",
    icon: Baby,
    imageSrc:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dentist treating a smiling young patient",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions",
    icon: Anchor,
    imageSrc:
      "https://images.unsplash.com/photo-1684607632829-1e5bf4f21dab?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Close-up of a dental implant model",
  },
  {
    title: "Emergency Dental Care",
    description: "Fast, dependable relief when you need it most",
    icon: Siren,
    imageSrc:
      "https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dentist examining a patient with a dental scanner",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#123240] sm:text-4xl">
              Smile Solutions for Every Need
            </h2>
            <p className="mt-2 max-w-md text-[#4B6570]">
              Whether it&apos;s a checkup or a full makeover, we&apos;ve got you
              covered
            </p>
          </motion.div>

          <motion.a
            href="#services-all"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#123240]/15 px-5 py-2.5 text-sm font-medium text-[#123240] transition-colors duration-300 hover:border-[#123240] hover:bg-[#123240] hover:text-white"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
