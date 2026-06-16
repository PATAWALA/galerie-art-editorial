"use client";

import { useEffect, useCallback } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const total = images.length;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onNavigate(currentIndex === 0 ? total - 1 : currentIndex - 1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNavigate(currentIndex === total - 1 ? 0 : currentIndex + 1);
      }
    },
    [currentIndex, total, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Conteneur de l'image, clic stoppé pour ne pas fermer */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[85vh] max-w-full object-contain"
        />
        {/* Légende discrète */}
        <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-[#FBFBFA]/70 font-serif italic py-2">
          {currentImage.alt}
        </p>
      </div>

      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[#FBFBFA] hover:text-[#A3907F] transition-colors"
        aria-label="Fermer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Flèche gauche */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex === 0 ? total - 1 : currentIndex - 1);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FBFBFA] hover:text-[#A3907F] transition-colors"
          aria-label="Précédent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Flèche droite */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex === total - 1 ? 0 : currentIndex + 1);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FBFBFA] hover:text-[#A3907F] transition-colors"
          aria-label="Suivant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}