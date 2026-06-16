// src/app/(admin)/login/page.tsx
import { login } from "./actions";

export const metadata = {
  title: "Curateur — Connexion",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal">
      <form className="w-full max-w-md space-y-8 px-6">
        <h1 className="text-center font-serif text-3xl font-light italic text-ivory">
          Entrée curateur
        </h1>
        <div className="space-y-4">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border-b border-gold-300/30 bg-transparent px-2 py-3 text-sm uppercase tracking-[0.15em] text-ivory placeholder:text-ivory/30 focus:border-gold-500 focus:outline-none"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Mot de passe"
            className="w-full border-b border-gold-300/30 bg-transparent px-2 py-3 text-sm uppercase tracking-[0.15em] text-ivory placeholder:text-ivory/30 focus:border-gold-500 focus:outline-none"
          />
        </div>
        <button
          formAction={login}
          className="w-full border border-gold-500 py-3 text-sm uppercase tracking-[0.3em] text-gold-300 transition hover:bg-gold-500 hover:text-charcoal"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}