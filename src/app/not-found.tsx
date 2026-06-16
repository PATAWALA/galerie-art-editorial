import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FBFBFA] px-6 text-center font-sans text-[#1A1A1A]">
      {/* Motif discret : ligne verticale taupe */}
      <div className="mb-10 h-16 w-px bg-[#A3907F]" />

      <h1 className="font-serif text-5xl font-light italic tracking-wide md:text-6xl">
        Page absente
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-[#1A1A1A]/70">
        Cette adresse n’abrite aucun contenu. Peut-être l’image que vous
        cherchez n’a‑t‑elle pas encore été révélée, ou bien elle réside
        ailleurs, dans un tirage en attente de lumière.
      </p>

      <Link
        href="/"
        className="mt-10 inline-block border-b border-[#A3907F] pb-1 text-sm uppercase tracking-[0.2em] text-[#A3907F] transition-colors hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}