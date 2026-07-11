"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/* ============================================================================
   THEME TOKENS (Eyecatchy Mesh theme)
   canvas      #FDFBF7   base background
   ink         #14213D   headings / primary text
   ink-soft    #5B6B85   secondary text
   coral       #FF6B4A   primary CTA / warm accent
   teal-mint   #1FBF9C   secondary accent / active states
   ============================================================================ */

interface NavItem {
  label: string;
  href: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

interface NavbarProps {
  links?: NavItem[];
  onBookNowClick?: () => void;
}

/* ------------------------------- Logo ------------------------------- */

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B4A] to-[#1FBF9C] shadow-md shadow-[#FF6B4A]/20">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C9.5 2 8 3.5 6.5 3.5 4.5 3.5 3 5.5 3 8c0 2 .8 3 1 5 .3 2.5 1 8.5 3 8.5 1.6 0 1.6-3 2.4-5.5.3-1 .8-1.5 2.1-1.5s1.8.5 2.1 1.5c.8 2.5.8 5.5 2.4 5.5 2 0 2.7-6 3-8.5.2-2 1-3 1-5 0-2.5-1.5-4.5-3.5-4.5C16 3.5 14.5 2 12 2Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="font-(family-name:--font-display,inherit) text-lg font-bold tracking-tight text-[#14213D]">
        Dentrist
      </span>
    </div>
  );
}

/* ------------------------------ NavLink ------------------------------ */

function NavLink({ href, children, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative pb-1 text-sm transition-colors duration-200 ${
        active
          ? "font-bold text-[#14213D]"
          : "font-medium text-[#5B6B85] hover:text-[#14213D]"
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-0.5 left-0 h-[2.5px] w-full rounded-full bg-linear-to-r from-[#FF6B4A] to-[#1FBF9C]" />
      )}
    </a>
  );
}

/* ------------------------------- Button ------------------------------- */

function Button({
  children,
  variant = "solid",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] active:scale-[0.97]";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    solid:
      "bg-gradient-to-r from-[#FF6B4A] to-[#FF8A65] text-white shadow-md shadow-[#FF6B4A]/30 hover:shadow-lg hover:shadow-[#FF6B4A]/40 hover:brightness-105",
    outline:
      "border-2 border-[#14213D]/10 bg-white/60 text-[#14213D] backdrop-blur-sm hover:border-[#1FBF9C]/40 hover:bg-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

/* ------------------------------- Navbar ------------------------------- */

const DEFAULT_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/dashboard/about" },
  { label: "Services", href: "/dashboard/service-page" },
  { label: "Contact", href: "/dashboard/contact" },
];

export default function Navbar({
  links = DEFAULT_LINKS,
  onBookNowClick,
}: NavbarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // A link is active when the current route matches it exactly, or sits
  // inside it (e.g. "/dashboard/about" also covers "/dashboard/about/team"),
  // while "/" only matches the exact home route so every page doesn't light
  // it up.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-30">
      {/* glass strip */}
      <div className="border-b border-white/40 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                active={isActive(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="solid" onClick={onBookNowClick}>
              Book Now
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-[#14213D] md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex w-full flex-col items-center gap-5 border-b border-white/40 bg-white/80 py-6 shadow-lg backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              active={isActive(link.href)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button variant="solid" onClick={onBookNowClick}>
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}

export { Logo, NavLink, Button };
