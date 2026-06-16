import { createClient } from "@/lib/supabase/server";
import ImageComponent from "@/components/shared/image-component";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Galerie`,
  };
}

export default async function GalleryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: work } = await supabase
    .from("gallery")
    .select("*")
    .eq("slug", slug)
    .single();

  // Fallback de démonstration si aucune œuvre n'est trouvée
  const fallbackWork = {
    title: slug.replace(/-/g, " "),
    image_url: "/images/galerie-1.jpg",
    description: "Photographie originale en noir et blanc, tirage limité à 150 exemplaires, numéroté et signé.",
    technique: "Argentique, papier baryté",
    dimensions: "30 × 40 cm",
    year: "2025",
  };

  const displayWork = work || fallbackWork;

  return (
    <main className="min-h-screen bg-[#FBFBFA] pt-28 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Filet taupe */}
        <div className="mb-8 h-px w-16 bg-[#A3907F]" />

        {/* Image en grand */}
        <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden">
          <ImageComponent
            src={displayWork.image_url}
            alt={displayWork.title}
            fill
            className="object-contain bg-[#1A1A1A]/5"
            sizes="100vw"
            priority
          />
        </div>

        {/* Informations */}
        <div className="mt-10 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-light italic text-[#1A1A1A]">
            {displayWork.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 max-w-2xl mx-auto">
            {displayWork.description}
          </p>

          {/* Métadonnées */}
          <div className="mt-8 flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-[#A3907F]">
            {displayWork.technique && <span>{displayWork.technique}</span>}
            {displayWork.dimensions && <span>{displayWork.dimensions}</span>}
            {displayWork.year && <span>{displayWork.year}</span>}
          </div>
        </div>

        {/* Retour */}
        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-block border-b border-[#A3907F]/60 pb-1 text-sm uppercase tracking-[0.2em] text-[#A3907F] transition-colors hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
          >
            Retour à la galerie
          </Link>
        </div>
      </div>
    </main>
  );
}