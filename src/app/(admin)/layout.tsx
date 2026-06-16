// src/app/(admin)/layout.tsx
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <nav className="flex items-center justify-between border-b border-gold-300/20 px-6 py-4">
        <span className="text-xs uppercase tracking-[0.3em]">
          Dashboard — Atelier
        </span>
        <form action="/auth/signout" method="post">
          <button className="text-xs uppercase tracking-[0.2em] text-ivory/70 hover:text-gold-300">
            Déconnexion
          </button>
        </form>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}