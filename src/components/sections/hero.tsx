import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 scale-105 animate-[zoom_20s_ease-in-out_infinite]">
        <Image
          src="/images/hero-exposition.jpg"
          alt="Photographie en noir et blanc d'un cheval, Mylène Sauvegrain"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-grayscale-[20%]" />
      </div>

      {/* Contenu éditorial */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-[#FBFBFA] animate-fade-up">
        <h1 className="font-serif text-5xl font-light italic leading-tight md:text-7xl">
          La tendresse <br />à l’état sauvage
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base font-light tracking-wide text-[#FBFBFA]/80 md:text-lg">
          Mylène Sauvegrain capte le geste animal avec la rigueur de
          l’éthologue et la sensibilité de l’artiste. Photographies d’art,
          médiation culturelle et ressources pédagogiques.
        </p>

        {/* Deux boutons superposés, largeurs différentes */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <Link
            href="/gallery"
            className="inline-block border border-[#A3907F]/60 px-10 py-4 text-sm uppercase tracking-[0.3em] text-[#FBFBFA] transition-all duration-500 hover:border-[#A3907F] hover:bg-[#A3907F]/10 hover:backdrop-blur-md"
          >
            Voir la galerie
          </Link>
          <Link
            href="/boutique"
            className="inline-block bg-[#A3907F] text-[#FBFBFA] px-12 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[#8B7A6E] hover:shadow-lg"
          >
            Boutique & Éditions
          </Link>
        </div>
      </div>
    </section>
  );
}