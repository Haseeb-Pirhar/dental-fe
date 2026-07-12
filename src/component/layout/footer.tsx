"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Shared tokens — sync these with your Navbar token file if you already
// export named tokens there, so the whole site stays on one palette.
const TOKENS = {
  ink: "#12313A", // headline / button navy
  slate: "#5C6B70", // body copy
  muted: "#8A9498", // footer link gray
  teal: "#2FBFA6", // icon accent
  newsletterBg: "#F2F5F4", // soft seafoam gray band
  border: "#E4E8E7",
};

const NAV_LINKS = [
  { label: "Home", href: "/dashboard" },
  { label: "About", href: "/dashboard/about" },
  { label: "Services", href: "/dashboard/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/dashboard/contact" },
];

const SOCIALS = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com" },
  { label: "Twitter", icon: FaXTwitter, href: "https://www.twitter.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // hook this up to your newsletter API
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer>
      {/* Newsletter band */}
      <div style={{ backgroundColor: TOKENS.newsletterBg }}>
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight max-w-md"
              style={{ color: TOKENS.ink }}
            >
              Keep Smiling Bright — Stay Connected with Us
            </h2>

            <div className="flex flex-col items-start gap-3 lg:items-end lg:max-w-sm">
              <p
                className="text-sm sm:text-base text-left lg:text-right"
                style={{ color: TOKENS.slate }}
              >
                Get dental care tips, clinic updates, and exclusive offers
                straight to your inbox
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full flex-1 rounded-full border-0 bg-white px-5 py-3 text-sm outline-none ring-1 ring-black/5 placeholder:text-gray-400 focus:ring-2 sm:min-w-[240px]"
                  style={{ color: TOKENS.ink }}
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: TOKENS.ink }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Logo + nav links */}
            <div className="flex flex-col gap-6">
              <a href="#home" className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C9 2 6.5 4 6.5 7.5c0 2-.5 3-1 5-.5 2-.8 4 .5 7 .8 1.7 2 2.5 2.8 2.5.9 0 1-2.5 1.3-4 .2-1 .5-1.5.9-1.5s.7.5.9 1.5c.3 1.5.4 4 1.3 4 .8 0 2-.8 2.8-2.5 1.3-3 1-5 .5-7-.5-2-1-3-1-5C17.5 4 15 2 12 2Z"
                    fill={TOKENS.ink}
                  />
                </svg>
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{ color: TOKENS.ink }}
                >
                  Dentrist
                </span>
              </a>

              <nav className="flex flex-wrap gap-x-6 gap-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm transition hover:opacity-70"
                    style={{ color: TOKENS.muted }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex items-center gap-2.5">
                <MapPin size={16} style={{ color: TOKENS.teal }} />
                <span className="text-sm" style={{ color: TOKENS.slate }}>
                  Shop #12-C, Model Town, Lahore, 54700, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} style={{ color: TOKENS.teal }} />
                <span className="text-sm" style={{ color: TOKENS.slate }}>
                  contact@dentristclinic.com
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} style={{ color: TOKENS.teal }} />
                <span className="text-sm" style={{ color: TOKENS.slate }}>
                  +92 300 0933343
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-8 h-px w-full"
            style={{ backgroundColor: TOKENS.border }}
          />

          {/* Bottom bar */}
          <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
              style={{ color: TOKENS.muted }}
            >
              <span>Copyright © {new Date().getFullYear()} Peterdraw</span>
              <a href="#privacy" className="hover:opacity-70">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:opacity-70">
                Term and conditions
              </a>
            </div>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:opacity-80"
                  style={{ backgroundColor: TOKENS.newsletterBg }}
                >
                  <Icon size={15} style={{ color: TOKENS.ink }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
