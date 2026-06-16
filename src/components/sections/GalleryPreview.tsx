"use client";

import { useState } from "react";
import Link from "next/link";
import GalleryLightbox from "@/components/sections/GalleryLightbox";

const placeholderImages = [
  { src: "/images/galerie-1.jpg", alt: "Œuvre 1" },
  { src: "/images/galerie-2.jpg", alt: "Œuvre 2" },
  { src: "/images/galerie-3.jpg", alt: "Œuvre 3" },
  { src: "/images/galerie-4.jpg", alt: "Œuvre 4" },
  { src: "/images/galerie-5.jpg", alt: "Œuvre 5" },
  { src: "/images/galerie-6.jpg", alt: "Œuvre 6" },
];

export default function GalleryPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FBFBFA] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl">
        {/* En-tête de section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="h-px w-12 bg-[#A3907F]" />
          <h2 className="mt-6 font-serif text-4xl font-light italic text-[#1A1A1A] md:text-5xl">
            Œuvres récentes
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1A1A1A]/60">
            Une sélection de photographies en noir et blanc issues des dernières séries.
          </p>
        </div>

        {/* Grille masonry */}
        <div className="columns-2 md:columns-3 gap-1 space-y-1">
          {placeholderImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden group relative cursor-pointer"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Légende */}
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#FBFBFA] drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton discret vers la galerie complète */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-block border border-[#A3907F]/40 px-10 py-4 text-sm uppercase tracking-[0.25em] text-[#A3907F] transition hover:border-[#A3907F] hover:text-[#1A1A1A]"
          >
            Voir l’ensemble des œuvres
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        images={placeholderImages}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </section>
  );
}