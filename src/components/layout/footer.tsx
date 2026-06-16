import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold-300/20 bg-charcoal px-6 py-12 text-ivory/70">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-xs uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Atelier Éditorial
        </p>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-gold-300">
            Mentions légales
          </Link>
          <Link href="/" className="hover:text-gold-300">
            Instagram
          </Link>
          <Link href="/" className="hover:text-gold-300">
            Newsletter
          </Link>
        </div>
      </div>
    </footer>
  );
}