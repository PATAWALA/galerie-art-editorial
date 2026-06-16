export const metadata = {
  title: "À propos",
  description:
    "Le parcours de Mylène Sauvegrain, entre photographie d’art, médiation culturelle et recherche en éthologie.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFA] pt-28 pb-24 px-6 font-sans text-[#1A1A1A]">
      <div className="mx-auto max-w-3xl">
        {/* Filet taupe */}
        <div className="mb-12 h-px w-16 bg-[#A3907F]" />

        {/* Titre */}
        <h1 className="font-serif text-5xl font-light italic leading-tight md:text-6xl">
          Mylène Sauvegrain
        </h1>

        {/* Sous-titre — mantra professionnel */}
        <p className="mt-6 text-base uppercase tracking-[0.3em] text-[#A3907F]">
          Professeur de l’être, médiatrice de cœur, artiste dans l’âme
        </p>

        {/* Introduction */}
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-[#1A1A1A]/80">
          <p>
            Multidiplômée polyvalente, Mylène Sauvegrain consacre sa vie
            professionnelle à partager ses créations artistiques et
            pédagogiques, à transmettre des connaissances, à faire rire,
            réfléchir et aider. Elle répond personnellement aux messages et
            commentaires — une présence rare, entière.
          </p>
          <p>
            Diplômée de la Sorbonne à cinq reprises, elle a forgé un profil
            unique, à la croisée de l’enseignement, de la médiation culturelle
            et de la création visuelle. Elle intervient en français comme en
            anglais, auprès de publics variés, incluant les personnes en
            situation de handicap.
          </p>
        </div>

        {/* Diplômes universitaires */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl font-light italic border-b border-[#A3907F]/20 pb-3 mb-8">
            Diplômes universitaires
          </h2>
          <ul className="space-y-4 text-base text-[#1A1A1A]/70">
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Licence d’Anglais littéraire / LEA — Sorbonne
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Maîtrise de Français Langue Étrangère (professeur) — Sorbonne
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Maîtrise de Professeur des Écoles — ESPE
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Master professionnel « Métiers culturels du Texte et Image »
              (rédaction, communication, médiation) — Sorbonne
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Licence professionnelle valorisation du patrimoine historique et
              culturel — en cours
            </li>
          </ul>
        </section>

        {/* Études non universitaires */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light italic border-b border-[#A3907F]/20 pb-3 mb-8">
            Formations complémentaires
          </h2>
          <ul className="space-y-4 text-base text-[#1A1A1A]/70">
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Certificat en médiation scientifique — CNAM
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Certificat de comportementaliste animalier et zoothérapeute —
              CERFPA (en cours)
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Formation PAO / Web — Formaltic
            </li>
          </ul>
        </section>

        {/* Hors études */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light italic border-b border-[#A3907F]/20 pb-3 mb-8">
            Autres qualifications
          </h2>
          <ul className="space-y-4 text-base text-[#1A1A1A]/70">
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Premiers secours
            </li>
            <li className="flex gap-3">
              <span className="text-[#A3907F] select-none">—</span>
              Plongée niveau 1
            </li>
          </ul>
        </section>

        {/* Compétences principales */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light italic border-b border-[#A3907F]/20 pb-3 mb-8">
            Compétences principales
          </h2>
          <p className="text-base leading-relaxed text-[#1A1A1A]/70">
            Anglais · Médiation culturelle · Histoire de l’art · Histoire des
            sciences, techniques et sociétés · Enseignement du français ·
            Photographie argentique · Adobe · Réseaux sociaux · Journalisme ·
            Événementiel · Management culturel · Muséographie · FLE ·
            Pédagogie adaptée (enfant & handicap) · Zoothérapie
          </p>
        </section>

        {/* Rappel discret des offres */}
        <div className="mt-20 border-t border-[#A3907F]/20 pt-10 text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#A3907F]">
            Tirages d’art limités — 150 €
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-[#A3907F]">
            Kit Léonard de Vinci — livret numérique — 19 €
          </p>
        </div>
      </div>
    </main>
  );
}