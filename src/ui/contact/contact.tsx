"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Mail, Phone, Star, Navigation } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "@/src/component/layout/navbar";
import GetStartedSection from "@/src/component/contact/select-appointment";
import Footer from "@/src/component/layout/footer";

/**
 * ContactSection — "Get in Touch with Dentrist"
 * v3: back to the site's own light warm-canvas theme (no navy panel) —
 * map and contact info live inside ONE outer card, with a visible gap
 * between the two halves rather than a bleeding/flush layout.
 *
 * Usage:
 *   import ContactSection from "@/src/components/ui/ContactSection";
 *   <ContactSection />
 */

const CLINIC = {
  name: "Dentrist Clinic",
  address: "Shop #12-C, Model Town, Lahore, 54700, Pakistan",
  email: "contact@dentristclinic.com",
  phone: "+92 300 0933343",
  lat: 31.489078,
  lng: 74.3257141,
  rating: 4.9,
};

const socials = [
  {
    platform: "instagram",
    icon: FaInstagram,
    label: "@dentristclinic",
    accent: "bg-[#FF6B5B]/15 text-[#FF6B5B]",
  },
  {
    platform: "facebook",
    icon: FaFacebookF,
    label: "facebook.com/dentristclinic",
    accent: "bg-teal-100 text-teal-700",
  },
  {
    platform: "twitter",
    icon: FaXTwitter,
    label: "@dentristclinic",
    accent: "bg-teal-100 text-teal-700",
  },
];

const infoRows = [
  {
    icon: Building2,
    label: "Office",
    value: CLINIC.address,
    accent: "coral" as const,
  },
  {
    icon: Mail,
    label: "Email Address",
    value: CLINIC.email,
    accent: "teal" as const,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: CLINIC.phone,
    accent: "coral" as const,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const mapSrc = `https://www.google.com/maps?q=${CLINIC.lat},${CLINIC.lng}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC.lat},${CLINIC.lng}`;

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-[#FBF7F0]" />
      <Navbar />
      <section
        id="contact"
        className="relative overflow-hidden bg-[#FBF7F0] px-6 py-16 sm:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-teal-200/30 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#FF6B5B]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading row */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold leading-tight tracking-tight text-[#0F2A3D] sm:text-4xl"
            >
              Get in Touch
              <br />
              with Dentrist
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-xs text-sm text-[#0F2A3D]/60 sm:text-right"
            >
              Whether you need to book an appointment or ask a question,
              we&apos;re here to help
            </motion.p>
          </div>

          {/* One outer card — map + info live inside it together, with a gap between them */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="relative mt-8 rounded-[28px] border border-white/60 bg-white/70 p-4 shadow-[0_25px_60px_-28px_rgba(15,42,61,0.3)] backdrop-blur-sm sm:p-5"
          >
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              {/* Map */}
              <div className="relative min-h-[240px] overflow-hidden rounded-[20px] lg:min-h-[320px]">
                <iframe
                  title="Dentrist Clinic location"
                  src={mapSrc}
                  className="h-full w-full grayscale-[15%]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* floating rating chip */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <Star className="h-4 w-4 fill-teal-700 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none text-[#0F2A3D]">
                      {CLINIC.rating} / 5.0
                    </p>
                    <p className="mt-0.5 text-xs text-[#0F2A3D]/50">
                      Patient rating
                    </p>
                  </div>
                </div>

                {/* directions CTA */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#0F2A3D] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#0F2A3D]/90"
                >
                  <Navigation className="h-4 w-4 text-[#FF6B5B]" />
                  Get Directions
                </a>
              </div>

              {/* Contact info — same light theme as the rest of the card */}
              <div className="relative rounded-[20px] bg-gradient-to-br from-teal-50 via-white to-emerald-50/60 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-[#0F2A3D]">
                  Contact Information
                </h3>
                <p className="mt-1 text-sm text-[#0F2A3D]/55">
                  Reach us anytime — your comfort and care are our priority
                </p>

                <div className="mt-4 space-y-3.5">
                  {infoRows.map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                          row.accent === "coral"
                            ? "bg-[#FF6B5B]/15"
                            : "bg-teal-100"
                        }`}
                      >
                        <row.icon
                          className={`h-4 w-4 ${
                            row.accent === "coral"
                              ? "text-[#FF6B5B]"
                              : "text-teal-700"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-[#0F2A3D]/40">
                          {row.label}
                        </p>
                        <p className="text-sm font-semibold text-[#0F2A3D]">
                          {row.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[#0F2A3D]/10 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#0F2A3D]/40">
                    Social Media
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {socials.map((s) => (
                      <div
                        key={s.platform}
                        className="flex items-center gap-2.5"
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full ${s.accent}`}
                        >
                          <s.icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-[#0F2A3D]/70">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <GetStartedSection />
      <Footer />
    </>
  );
}
