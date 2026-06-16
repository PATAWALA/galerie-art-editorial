import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-charcoal/40 to-transparent px-6 py-5 transition-colors duration-500">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-light tracking-[0.3em] text-ivory drop-shadow-lg"
        >
          ATELIER
        </Link>

        {/* Navigation centrale (desktop) */}
        <Navigation />

        {/* Bouton admin discret */}
        <Link
          href="/admin/login"
          className="hidden text-xs uppercase tracking-[0.2em] text-ivory/70 transition hover:text-gold-300 md:block"
        >
          Curateur
        </Link>
      </div>
    </header>
  );
}