"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/gallery", label: "Galerie" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex md:items-center md:gap-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/80 transition-colors hover:text-[#A3907F]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 md:hidden relative z-50"
        aria-label="Menu"
      >
        <span className={`block h-0.5 w-7 bg-[#1A1A1A] transition-all ${open ? "translate-y-[5px] rotate-45" : ""}`} />
        <span className={`block h-0.5 w-7 bg-[#1A1A1A] transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-7 bg-[#1A1A1A] transition-all ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#FBFBFA] transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-light uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#A3907F] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}