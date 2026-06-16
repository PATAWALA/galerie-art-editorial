// src/app/boutique/[slug]/page.tsx
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import ImageComponent from "@/components/shared/image-component";
import Link from "next/link";
import type { CatalogueProduct } from "@/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Boutique`,
  };
}

export default async function BoutiqueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  // Fallback pour démonstration, aligné sur l’univers de Mylène Sauvegrain
  const fallbackProduct: CatalogueProduct = {
    id: slug,
    slug: slug, // ← propriété ajoutée
    type: slug.includes("kit") ? "ressource" : "tirage",
    title: slug.replace(/-/g, " "),
    description:
      slug.includes("kit")
        ? "Livret numérique de médiation culturelle, conçu pour les écoles et les passionnés d’histoire de l’art."
        : "Photographie originale en noir et blanc, tirage argentique limité, numéroté et signé.",
    price: slug.includes("kit") ? 19 : 150,
    image_url: slug.includes("kit") ? "/images/kit-vinci.jpg" : "/images/etalons-normandie.jpg",
    details: slug.includes("kit")
      ? "48 pages, PDF, licence établissement"
      : "30×40 cm, papier baryté, édition de 150 exemplaires",
    created_at: "2025-01-01",
  };

  const displayProduct = product || fallbackProduct;
  if (!displayProduct) notFound();

  const isTirage = displayProduct.type === "tirage";

  return (
    <main className="min-h-screen bg-[#FBFBFA] pt-28 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Filet taupe */}
        <div className="mb-8 h-px w-16 bg-[#A3907F]" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <ImageComponent
              src={displayProduct.image_url}
              alt={displayProduct.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Détails */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A3907F] mb-3">
              {isTirage ? "Tirage d’art" : "Ressource numérique"}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light italic text-[#1A1A1A] leading-tight">
              {displayProduct.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70">
              {displayProduct.description}
            </p>

            {/* Détails techniques */}
            {displayProduct.details && (
              <p className="mt-4 text-sm text-[#A3907F]/80 italic border-l border-[#A3907F]/30 pl-3">
                {displayProduct.details}
              </p>
            )}

            {/* Prix */}
            <div className="mt-8">
              <span className="text-2xl font-light text-[#A3907F]">
                {displayProduct.price} €
              </span>
              {isTirage && (
                <p className="text-xs text-[#1A1A1A]/50 mt-1">
                  Tirage limité à 150 exemplaires, numéroté et signé.
                </p>
              )}
              {!isTirage && (
                <p className="text-xs text-[#1A1A1A]/50 mt-1">
                  Téléchargement immédiat après achat.
                </p>
              )}
            </div>

            {/* Bouton d’acquisition */}
            <div className="mt-8">
              <a
                href={`mailto:contact@mylenesauvegrain.fr?subject=Acquisition : ${displayProduct.title}`}
                className="inline-block bg-[#A3907F] text-[#FBFBFA] px-8 py-3 text-sm uppercase tracking-[0.2em] transition-all hover:bg-[#8B7A6E]"
              >
                Acquérir
              </a>
              <p className="mt-3 text-xs text-[#1A1A1A]/40">
                Par email sécurisé. Nous vous répondrons sous 24h.
              </p>
            </div>
          </div>
        </div>

        {/* Retour */}
        <div className="mt-16 text-center">
          <Link
            href="/boutique"
            className="inline-block border-b border-[#A3907F]/60 pb-1 text-sm uppercase tracking-[0.2em] text-[#A3907F] transition-colors hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
          >
            Retour à la boutique
          </Link>
        </div>
      </div>
    </main>
  );
}