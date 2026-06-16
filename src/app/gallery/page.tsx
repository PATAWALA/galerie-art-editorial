import { createClient } from "@/lib/supabase/server";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata = {
  title: "Galerie",
  description: "Parcourez la collection photographique de Mylène Sauvegrain.",
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: works, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  // Fallback statique pour démonstration (quand la base est vide)
  const fallbackWorks = [
    { id: "1", title: "Étalons en Normandie", image_url: "/images/galerie-1.jpg", slug: "etalons-normandie", description: "Tirage argentique 30×40 cm." },
    { id: "2", title: "Regard félin", image_url: "/images/galerie-2.jpg", slug: "regard-felin", description: "Portrait d’un chat de ferme." },
    { id: "3", title: "Ombre et lumière", image_url: "/images/galerie-3.jpg", slug: "ombre-et-lumiere", description: "Contre-jour au Parc de Vincennes." },
    { id: "4", title: "Tendresse équine", image_url: "/images/galerie-4.jpg", slug: "tendresse-equine", description: "Deux chevaux au pré." },
    { id: "5", title: "Médiation animale", image_url: "/images/galerie-5.jpg", slug: "mediation-animale", description: "Séance de zoothérapie." },
    { id: "6", title: "L’attente", image_url: "/images/galerie-6.jpg", slug: "lattente", description: "Un chien derrière une porte." },
  ];

  const displayWorks = works?.length ? works : fallbackWorks;

  return (
    <main className="min-h-screen bg-[#FBFBFA] pt-28 pb-24 px-6">
      <div className="mx-auto max-w-screen-2xl">
        {/* En-tête */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="h-px w-12 bg-[#A3907F]" />
          <h1 className="mt-6 font-serif text-4xl font-light italic text-[#1A1A1A] md:text-6xl">
            Galerie
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1A1A1A]/60">
            Une sélection de photographies en noir et blanc, du Parc Zoologique de Vincennes aux campagnes normandes.
          </p>
        </div>

        {/* Grille avec lightbox et lien vers détails */}
        <GalleryClient images={displayWorks.map((w: any) => ({ src: w.image_url, alt: w.title, slug: w.slug }))} />
      </div>
    </main>
  );
}