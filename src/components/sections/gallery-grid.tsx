import ImageComponent from "@/components/shared/image-component";

const placeholderImages = [
  { src: "/images/galerie-1.jpg", alt: "Œuvre 1", aspect: "aspect-[4/5]" },
  { src: "/images/galerie-2.jpg", alt: "Œuvre 2", aspect: "aspect-square" },
  { src: "/images/galerie-3.jpg", alt: "Œuvre 3", aspect: "aspect-[3/4]" },
  { src: "/images/galerie-4.jpg", alt: "Œuvre 4", aspect: "aspect-[16/9]" },
  { src: "/images/galerie-5.jpg", alt: "Œuvre 5", aspect: "aspect-[4/5]" },
  { src: "/images/galerie-6.jpg", alt: "Œuvre 6", aspect: "aspect-[3/4]" },
];

export default function GalleryGrid() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mb-16 text-center font-serif text-4xl font-light italic text-charcoal md:text-5xl">
          Œuvres récentes
        </h2>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-1 md:grid-cols-3">
          {placeholderImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative ${img.aspect} overflow-hidden ${
                idx === 0 ? "md:row-span-2" : ""
              }`}
            >
              <ImageComponent
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-[30%]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay éditorial */}
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-ivory">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}