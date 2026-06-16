// src/app/(site)/gallery/page.tsx
import { createClient } from "@/lib/supabase/server";
import ImageComponent from "@/components/shared/image-component";


export const metadata = {
  title: "Galerie",
  description: "Parcourez notre collection d’œuvres photographiques.",
};

export default async function GalleryPage() {
  const supabase = await createClient();
  // Exemple de requête Supabase – adaptez la table et les colonnes
  const { data: works, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error || !works?.length) {
    // Fallback si la table est vide ou inexistante
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-serif text-2xl italic text-charcoal">
          Aucune œuvre pour le moment.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <h1 className="mb-16 text-center font-serif text-5xl font-light italic text-charcoal md:text-6xl">
        Galerie
      </h1>
      {/* On réutilise une grille similaire mais en passant les données */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-1 md:grid-cols-3">
            {works.map((work: any) => (
  <div key={work.id} className="group relative aspect-square overflow-hidden">
    <ImageComponent
      src={work.image_url}
      alt={work.title}
      fill
      className="object-cover transition-all duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-[#1A1A1A]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#FBFBFA] drop-shadow-lg">
        {work.title}
      </span>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
    </div>
  );
}