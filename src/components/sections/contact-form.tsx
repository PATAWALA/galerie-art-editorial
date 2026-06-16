"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Ici, votre logique d'envoi (API route, Supabase, etc.)
    setStatus("success");
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-md">
        <h2 className="mb-12 text-center font-serif text-4xl font-light italic text-charcoal">
          Entrer en résonance
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nom"
              required
              className="border-b border-gold-300/50 bg-transparent px-2 py-3 text-sm uppercase tracking-[0.15em] text-charcoal placeholder:text-charcoal/30 focus:border-gold-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border-b border-gold-300/50 bg-transparent px-2 py-3 text-sm uppercase tracking-[0.15em] text-charcoal placeholder:text-charcoal/30 focus:border-gold-500 focus:outline-none"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Votre message"
            required
            className="w-full border-b border-gold-300/50 bg-transparent px-2 py-3 text-sm uppercase tracking-[0.15em] text-charcoal placeholder:text-charcoal/30 focus:border-gold-500 focus:outline-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="inline-block border border-gold-500 px-12 py-4 text-sm uppercase tracking-[0.3em] text-gold-800 transition-all hover:bg-gold-500 hover:text-ivory"
            >
              Envoyer
            </button>
          </div>
          {status === "success" && (
            <p className="text-center text-sm text-gold-700">
              Message envoyé avec succès.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}