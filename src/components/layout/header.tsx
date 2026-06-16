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
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
        {/* Signature à gauche */}
        <Link
          href="/"
          className="font-serif text-2xl font-light italic tracking-wide text-[#1A1A1A] hover:text-[#A3907F] transition-colors"
        >
          Mylène Sauvegrain
        </Link>

        {/* Navigation centrale (desktop) */}
        <Navigation />

        {/* Rien à droite, l'espace respire */}
        <div className="hidden md:block w-20" />
      </div>
    </header>
  );
}