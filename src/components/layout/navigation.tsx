"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#FBFBFA] border-b border-[#A3907F]/10 shadow-sm"
          : "bg-[#FBFBFA]/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
        {/* Logo / Signature à gauche */}
        <div className="flex-1">
          <Link href="/" className="inline-flex items-center gap-3 group">
            {/* Liseré vertical taupe */}
            <span className="h-5 w-px bg-[#A3907F]" />
            <span className="font-serif text-2xl font-light italic tracking-wide text-[#1A1A1A] group-hover:text-[#A3907F] transition-colors">
              Mylène Sauvegrain
            </span>
          </Link>
        </div>

        {/* Navigation centrée */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navigation />
        </div>

        {/* Bouton droite pour équilibre */}
        <div className="flex-1 hidden md:flex justify-end">
          <Link
            href="/boutique"
            className="border border-[#A3907F]/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#A3907F] transition hover:border-[#A3907F] hover:text-[#1A1A1A]"
          >
            Boutique
          </Link>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/gallery", label: "Galerie" },
    { href: "/boutique", label: "Boutique" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 relative z-50"
        aria-label="Menu"
      >
        <span className={`block h-0.5 w-7 bg-[#1A1A1A] transition-all ${open ? "translate-y-[5px] rotate-45" : ""}`} />
        <span className={`block h-0.5 w-7 bg-[#1A1A1A] transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-7 bg-[#1A1A1A] transition-all ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#FBFBFA] transition-all duration-500 ${
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