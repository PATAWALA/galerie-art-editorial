import type { Metadata } from "next";

type SEOHeadProps = {
  title: string;
  description: string;
};

export default function SEOHead({ title, description }: SEOHeadProps) {
  // Ce composant ne rend rien directement ; utilisez-le dans layout.tsx pour générer les métadonnées.
  // Vous pouvez aussi l'utiliser comme suit :
  // export const metadata: Metadata = { ... }
  return null;
}