import ImageComponent from "@/components/shared/image-component";

const placeholderImages = [
  { src: "/images/galerie-1.jpg", alt: "Œuvre 1" },
  { src: "/images/galerie-2.jpg", alt: "Œuvre 2" },
  { src: "/images/galerie-3.jpg", alt: "Œuvre 3" },
  { src: "/images/galerie-4.jpg", alt: "Œuvre 4" },
  { src: "/images/galerie-5.jpg", alt: "Œuvre 5" },
  { src: "/images/galerie-6.jpg", alt: "Œuvre 6" },
];

export default function GalleryGrid() {
  return (
    <div className="columns-2 md:columns-3 gap-1 space-y-1">
      {placeholderImages.map((img, idx) => (
        <div
          key={idx}
          className="break-inside-avoid overflow-hidden group relative"
        >
          {/* Image sans coins arrondis */}
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
  );
}