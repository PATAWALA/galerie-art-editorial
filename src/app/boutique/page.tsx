import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/sections/product-card";
import type { CatalogueProduct } from "@/types";

export const metadata = {
  title: "Boutique & Éditions",
  description:
    "Tirages d’art limités et ressources pédagogiques numériques par Mylène Sauvegrain.",
};

export default async function BoutiquePage() {
  const supabase = await createClient();
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  // Fallback aligné sur l'univers de Mylène Sauvegrain
  const fallbackProducts: CatalogueProduct[] = [
    {
      id: "1",
      type: "tirage",
      title: "Étalons en Normandie",
      description:
        "Photographie originale en noir et blanc. Tirage argentique limité, numéroté et signé.",
      price: 150,
      image_url: "/images/etalons-normandie.jpg",
      slug: "etalons-normandie",
      details: "30×40 cm sur papier baryté, édition de 150 exemplaires.",
      created_at: "2025-01-01",
    },
    {
      id: "2",
      type: "ressource",
      title: "Le Kit Léonard de Vinci",
      description:
        "Livret de médiation culturelle et d’histoire de l’art pour les écoles. Format PDF, téléchargement immédiat.",
      price: 19,
      image_url: "/images/kit-vinci.jpg",
      slug: "kit-leonard-de-vinci",
      details: "48 pages, exercices inclus, licence établissement.",
      created_at: "2025-02-15",
    },
  ];

  const catalogue = products?.length ? products : fallbackProducts;

  const tirages = catalogue.filter((p) => p.type === "tirage");
  const ressources = catalogue.filter((p) => p.type === "ressource");

  return (
    <main className="min-h-screen bg-[#FBFBFA] pt-28 pb-24 px-6">
      <div className="mx-auto max-w-screen-xl">
        {/* Introduction éditoriale */}
        <div className="mb-20 text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-[#A3907F]" />
          <h1 className="font-serif text-4xl font-light italic text-[#1A1A1A] md:text-5xl">
            Boutique & Éditions
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70">
            Chaque pièce proposée prolonge la démarche de Mylène Sauvegrain :
            des tirages d’art qui capturent la délicatesse du vivant, et des
            outils pédagogiques qui transmettent la culture autrement.
          </p>
        </div>

        {/* Section Tirages d’Art */}
        {tirages.length > 0 && (
          <section className="mb-24">
            <h2 className="font-serif text-2xl font-light italic text-[#1A1A1A] mb-10 border-b border-[#A3907F]/20 pb-4">
              Tirages d’Art — Édition limitée
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tirages.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Section Ressources Pédagogiques */}
        {ressources.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-light italic text-[#1A1A1A] mb-10 border-b border-[#A3907F]/20 pb-4">
              Ressources Numériques — Pédagogie
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ressources.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}