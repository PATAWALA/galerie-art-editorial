// src/app/(site)/gallery/[slug]/page.tsx
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `Œuvre : ${params.slug}`,
  };
}

export default async function GalleryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createClient();
  const { data: work } = await supabase
    .from("gallery")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!work) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="max-w-4xl">
        <figure className="relative mb-12">
          <img
            src={work.image_url}
            alt={work.title}
            className="max-h-[70vh] w-full object-contain"
          />
          <figcaption className="mt-6 text-center">
            <h1 className="font-serif text-3xl font-light italic text-charcoal md:text-4xl">
              {work.title}
            </h1>
            <p className="mt-4 text-sm text-charcoal/60">{work.description}</p>
          </figcaption>
        </figure>
        <div className="flex justify-center">
          <a
            href="/gallery"
            className="border-b border-gold-500 pb-1 text-xs uppercase tracking-[0.2em] text-gold-700 transition hover:text-gold-900"
          >
            Retour à la galerie
          </a>
        </div>
      </div>
    </main>
  );
}