import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#FBFBFA] px-6 py-24 md:py-32 border-t border-[#A3907F]/10">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Image à gauche (2 colonnes sur 5) */}
          <div className="md:col-span-2 relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/mylene-sauvegrain.jpg"
              alt="Mylène Sauvegrain, photographe et médiatrice culturelle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Texte à droite (3 colonnes sur 5) */}
          <div className="md:col-span-3">
            <div className="mb-6 h-px w-12 bg-[#A3907F]" />
            <h2 className="font-serif text-4xl font-light italic text-[#1A1A1A] md:text-5xl">
              Mylène Sauvegrain
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70">
              Professeure, médiatrice culturelle et artiste photographe.
              Diplômée de la Sorbonne, elle conjugue la rigueur académique, la
              pédagogie du français langue étrangère et une sensibilité profonde
              pour le vivant. Son travail tisse des liens entre art, science et
              transmission.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/70">
              De la médiation animale à l&apos;histoire de l&apos;art, en
              passant par la photographie argentique et la création de livrets
              pédagogiques, elle invente des passerelles entre les savoirs pour
              toucher tous les publics, avec exigence et humanité.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block border border-[#A3907F]/40 px-10 py-4 text-sm uppercase tracking-[0.25em] text-[#A3907F] transition hover:border-[#A3907F] hover:text-[#1A1A1A]"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}