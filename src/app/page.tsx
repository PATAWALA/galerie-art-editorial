// src/app/page.tsx
import Hero from "@/components/sections/hero";
import GalleryGrid from "@/components/sections/gallery-grid";
import EditorialCard from "@/components/sections/editorial-card";

const editorialItems = [
  {
    title: "Lumière silencieuse",
    excerpt: "Une exploration des paysages intérieurs à travers le prisme de la photographie argentique.",
    imageSrc: "/images/editorial-1.jpg",
    slug: "/editorial/lumiere-silencieuse",
  },
  {
    title: "Matières premières",
    excerpt: "Quand la texture devient langage – une série d’impressions sur papier washi.",
    imageSrc: "/images/editorial-2.jpg",
    slug: "/editorial/matieres-premieres",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <GalleryGrid />
      <section className="bg-[#1A1A1A] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mb-16 text-center font-serif text-4xl font-light italic text-[#FBFBFA] md:text-5xl">
            Articles & Réflexions
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {editorialItems.map((item) => (
              <EditorialCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}