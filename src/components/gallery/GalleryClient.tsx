"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

interface GalleryImage {
  src: string;
  alt: string;
  slug: string;
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <>
      <div className="columns-2 md:columns-3 gap-1 space-y-1">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="break-inside-avoid overflow-hidden group relative cursor-pointer"
            onClick={() => setLightboxIndex(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay au survol */}
            <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {/* Légende + lien vers la page détail */}
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#FBFBFA] drop-shadow-md">
                {img.alt}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/gallery/${img.slug}`);
                }}
                className="text-xs uppercase tracking-[0.2em] text-[#FBFBFA]/80 hover:text-[#A3907F] transition-colors border-b border-transparent hover:border-[#A3907F] pb-0.5"
              >
                Détails
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox pour agrandir et naviguer */}
      <GalleryLightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}