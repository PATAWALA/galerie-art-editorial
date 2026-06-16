import { notFound } from "next/navigation";
import ImageComponent from "@/components/shared/image-component";
import Link from "next/link";

// Données éditoriales statiques (seront remplacées par Supabase)
const articles: Record<string, { title: string; date: string; image: string; content: string[] }> = {
  "lumiere-silencieuse": {
    title: "Lumière silencieuse",
    date: "Janvier 2025",
    image: "/images/editorial-1.jpg",
    content: [
      "La photographie argentique impose une lenteur que le numérique a presque effacée. Dans le silence de la chambre noire, chaque détail devient signe, chaque grain une mémoire. Cette série, réalisée en Normandie, interroge la frontière entre présence et absence.",
      "Les paysages intérieurs sont traités comme des états d’âme. On y lit une tension douce entre la matière organique et la rigueur du cadrage. C’est un hommage au temps long, à l’observation patiente que l’animal seul semble encore pratiquer.",
      "Les chevaux, les bovins, les chats croisés au hasard des fermes : tous portent cette même dignité silencieuse. La photographe ne cherche pas le spectacle, mais l’infime mouvement, l’oreille qui pivote, le muscle qui frémit.",
    ],
  },
  "matieres-premieres": {
    title: "Matières premières",
    date: "Février 2025",
    image: "/images/editorial-2.jpg",
    content: [
      "Le papier washi, fabriqué à la main, possède une texture qui dialogue avec l’encre. Chaque tirage devient une pièce unique. Cette série explore les possibilités de ce support ancestral appliqué à la photographie contemporaine.",
      "En mariant le noir profond des émulsions au blanc crème du papier, l’artiste crée un objet tangible, presque sculptural. La matière première n’est plus seulement l’image, mais le support lui‑même.",
    ],
  },
  "le-geste-animal": {
    title: "Le geste animal",
    date: "Mars 2025",
    image: "/images/editorial-3.jpg",
    content: [
      "Depuis Darwin, nous savons que l’animal éprouve des émotions. La zoothérapie s’appuie sur cette continuité pour réparer l’humain. Ce texte propose une lecture croisée entre éthologie et pratique photographique : quand l’image capture le geste tendre, elle devient outil de médiation.",
      "Le cheval, en particulier, réagit aux micro‑expressions. La photographe doit alors se faire invisible, adopter une posture d’écoute visuelle. Les clichés obtenus sont autant de preuves de cette sensibilité partagée.",
    ],
  },
};

// Correction Next.js 15 : params est une Promise
export default async function EditorialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#FBFBFA] pt-28 pb-24 px-6">
      <article className="mx-auto max-w-3xl">
        {/* Filet taupe */}
        <div className="mb-8 h-px w-16 bg-[#A3907F]" />

        {/* Date discrète */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#A3907F] mb-4">
          {article.date}
        </p>

        {/* Titre */}
        <h1 className="font-serif text-4xl md:text-5xl font-light italic text-[#1A1A1A] leading-tight">
          {article.title}
        </h1>

        {/* Image pleine largeur */}
        <div className="relative aspect-[16/9] mt-10 mb-12 overflow-hidden">
          <ImageComponent
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Contenu éditorial */}
        <div className="space-y-6 text-lg leading-relaxed text-[#1A1A1A]/80 font-sans">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Retour aux articles */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block border-b border-[#A3907F]/60 pb-1 text-sm uppercase tracking-[0.2em] text-[#A3907F] transition-colors hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
          >
            Retour aux articles
          </Link>
        </div>
      </article>
    </main>
  );
}