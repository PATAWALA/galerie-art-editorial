// src/app/(site)/contact/page.tsx
import ContactForm from "@/components/sections/contact-form";

export const metadata = {
  title: "Contact",
  description: "Entrez en résonance avec l’Atelier.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  );
}