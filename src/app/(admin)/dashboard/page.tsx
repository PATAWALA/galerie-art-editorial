// src/app/(admin)/dashboard/page.tsx
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-2xl font-light italic">
        Bienvenue, {user?.email}
      </h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="border border-gold-300/20 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
            Œuvres
          </p>
          <p className="mt-2 text-3xl font-light">--</p>
        </div>
        <div className="border border-gold-300/20 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
            Messages
          </p>
          <p className="mt-2 text-3xl font-light">--</p>
        </div>
        <div className="border border-gold-300/20 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
            Vues
          </p>
          <p className="mt-2 text-3xl font-light">--</p>
        </div>
      </div>
    </div>
  );
}