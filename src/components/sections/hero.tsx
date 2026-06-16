import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 scale-105 animate-[zoom_20s_ease-in-out_infinite]">
        <Image
          src="/images/hero-exposition.jpg" // Placez votre image dans public/images
          alt="Exposition artistique"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40 backdrop-grayscale-[20%]" />
      </div>

      {/* Contenu éditorial */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-ivory animate-fade-up">
        <h1 className="font-serif text-6xl font-light italic leading-tight md:text-8xl">
          L&apos;essence <br /> de l&apos;éphémère
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light tracking-wider text-gold-100/80 md:text-xl">
          Une immersion photographique entre ombre et lumière, capturée par
          l&apos;œil de la matière.
        </p>
        <div className="mt-12">
          <a
            href="/gallery"
            className="inline-block border border-gold-300/60 px-10 py-4 text-sm uppercase tracking-[0.3em] text-ivory transition-all duration-500 hover:border-gold-300 hover:bg-gold-300/10 hover:backdrop-blur-md"
          >
            Découvrir
          </a>
        </div>
      </div>
    </section>
  );
}

/* Animation zoom keyframe (à placer dans globals.css si vous préférez) */