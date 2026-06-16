"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/gallery", label: "Galerie" },
  { href: "/boutique", label: "Boutique" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Détecte si on est sur la page d'accueil (fond sombre du hero)
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Style selon la position et la page
  // Sur la home : transparent en haut, opaque au scroll
  // Sur les autres pages : toujours opaque (fond clair)
  const isTransparent = isHome && !scrolled;

  const bgHeader = isTransparent
    ? "bg-transparent"
    : "bg-[#FBFBFA]/95 backdrop-blur-md shadow-sm";
  const borderColor = isTransparent ? "border-transparent" : "border-[#A3907F]/10";
  const textColor = isTransparent ? "text-[#FBFBFA]" : "text-[#1A1A1A]";
  const textHover = isTransparent ? "hover:text-[#FBFBFA]" : "hover:text-[#A3907F]";
  const logoLineColor = isTransparent ? "bg-[#FBFBFA]/60" : "bg-[#A3907F]";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${bgHeader} ${borderColor} border-b`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
        {/* Logo / Signature */}
        <div className="flex-1">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <span className={`h-5 w-px transition-colors duration-500 ${logoLineColor}`} />
            <span
              className={`font-serif text-2xl font-light italic tracking-wide transition-colors duration-500 ${textColor} group-hover:text-[#A3907F]`}
            >
              Mylène Sauvegrain
            </span>
          </Link>
        </div>

        {/* Navigation desktop centrée */}
        <nav className="hidden md:flex md:items-center md:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.2em] transition-colors duration-500 ${
                isTransparent
                  ? "text-[#FBFBFA]/80 hover:text-[#FBFBFA]"
                  : "text-[#1A1A1A]/80 hover:text-[#A3907F]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton Boutique à droite */}
        <div className="flex-1 hidden md:flex justify-end">
          <Link
            href="/boutique"
            className="px-5 py-2 text-xs uppercase tracking-[0.2em] bg-[#A3907F] text-[#FBFBFA] border border-[#A3907F] transition-all duration-300 hover:bg-[#8B7A6E] hover:border-[#8B7A6E]"
          >
            Boutique
          </Link>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 relative z-50"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-7 transition-all ${
                isTransparent ? "bg-[#FBFBFA]" : "bg-[#1A1A1A]"
              } ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-7 transition-all ${
                isTransparent ? "bg-[#FBFBFA]" : "bg-[#1A1A1A]"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-7 transition-all ${
                isTransparent ? "bg-[#FBFBFA]" : "bg-[#1A1A1A]"
              } ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </button>

          {/* Menu mobile */}
          <div
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#FBFBFA] transition-all duration-500 ${
              mobileOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-light uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#A3907F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}