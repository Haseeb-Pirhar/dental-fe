"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import Navbar from "@/src/component/layout/navbar";
import StandFor from "@/src/component/about/stand-for";

/**
 * AboutSection — "About Dentrist"
 * Matches the site's "Eyecatchy Mesh" theme:
 *  - warm canvas background
 *  - blurred teal-mint gradient blobs
 *  - coral CTA accent
 *  - dark navy display headings
 *  - glassmorphism card surfaces
 *
 * Drop-in usage:
 *   import AboutSection from "@/src/components/ui/AboutSection";
 *   <AboutSection />
 */

const missionItems = [
  "Deliver high-quality, personalized dental care with integrity and compassion",
  "Foster a stress-free, welcoming clinic environment for all ages",
  "Embrace modern technology and best practices to ensure optimal outcomes",
  "Educate and empower patients to take charge of their oral health",
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-[#FBF7F0]" />
      <Navbar />
      <section
        id="about"
        className="relative overflow-hidden bg-[#FBF7F0] px-6 py-24 sm:px-10 lg:px-20"
      >
        {/* ambient mesh blobs — signature background, consistent with rest of site */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-teal-300/30 blur-[110px]" />
        <div className="pointer-events-none absolute top-1/3 -right-32 h-[22rem] w-[22rem] rounded-full bg-[#FF6B5B]/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-200/30 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading row */}
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <FadeIn>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0F2A3D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2A3D]/70">
                <Sparkles className="h-3.5 w-3.5 text-[#FF6B5B]" />
                About Us
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-[#0F2A3D] sm:text-5xl">
                About Dentrist
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-xs text-right text-sm leading-relaxed text-[#0F2A3D]/60 sm:text-base">
                A modern dental clinic built on care, trust, and patient-first
                principles.
              </p>
            </FadeIn>
          </div>

          {/* Clinical Director card */}
          <FadeIn delay={0.15} className="mt-12">
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-teal-50 via-emerald-50/70 to-teal-100/60 shadow-[0_20px_60px_-25px_rgba(15,42,61,0.25)] backdrop-blur-sm">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                {/* Message */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <Quote className="mb-4 h-8 w-8 text-teal-500/70" />
                  <h3 className="text-2xl font-bold leading-snug text-[#0F2A3D] sm:text-[1.75rem]">
                    A Message from Our Clinical Director
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#0F2A3D]/70 sm:text-[15px]">
                    We believe a healthy smile is more than just a sign of good
                    oral hygiene — it&apos;s a reflection of confidence and
                    well-being. Since day one, our mission has been to offer
                    accessible, personalized dental care that blends clinical
                    expertise with a human touch.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#0F2A3D]/70 sm:text-[15px]">
                    We aim to make every visit comfortable, every treatment
                    effective, and every patient feel like family.
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#0F2A3D]/70 sm:text-[15px]">
                    Thank you for trusting us with your smile.
                  </p>

                  <div className="mt-6 border-t border-[#0F2A3D]/10 pt-5">
                    <p className="font-bold text-[#0F2A3D]">
                      Dr. Ethan Marquez, DDS
                    </p>
                    <p className="text-sm text-[#0F2A3D]/50">
                      Clinical Director &amp; Restorative Dentistry Expert
                    </p>
                  </div>
                </div>

                {/* Photo — bleeds flush to the card's own edges, no separate box */}
                <div className="relative min-h-[280px] lg:min-h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop"
                    alt="Dr. Ethan Marquez, Clinical Director at Dentrist"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/15 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Vision & Mission */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold leading-tight text-[#0F2A3D] sm:text-4xl">
                Our Vision &amp; Mission
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#0F2A3D]/60 sm:text-base">
                Guided by purpose, driven by care — our goals go beyond just
                great dental results.
              </p>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B5B]">
                  Vision
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#0F2A3D]/70">
                  To become a leading dental care provider known for innovation,
                  empathy, and exceptional patient experiences.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B5B]">
                  Mission
                </h4>
                <ul className="mt-3 space-y-3">
                  {missionItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                      <span className="text-[15px] leading-relaxed text-[#0F2A3D]/75">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <StandFor />
    </>
  );
}
