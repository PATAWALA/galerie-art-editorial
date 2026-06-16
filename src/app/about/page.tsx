// src/app/(site)/about/page.tsx
export const metadata = {
  title: "À propos",
  description: "Notre philosophie, notre regard.",
};

export default function AboutPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <div className="max-w-3xl animate-fade-up">
        <h1 className="font-serif text-5xl font-light italic text-charcoal md:text-6xl">
          Un regard,<br />une empreinte
        </h1>
        <p className="mt-12 text-lg leading-relaxed text-charcoal/70">
          Fondé en 2010, l’Atelier Éditorial défend une photographie de
          l’intime, où chaque tirage devient un objet unique. Entre tradition
          argentique et impressions contemporaines, nous exposons des artistes
          qui interrogent la mémoire, la matière et la lumière.
        </p>
        <div className="mt-16 h-px w-16 bg-gold-300 mx-auto" />
        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-gold-700">
          Paris — Tokyo
        </p>
      </div>
    </section>
  );
}