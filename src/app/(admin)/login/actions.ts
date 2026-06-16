// src/app/(admin)/login/actions.ts
"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    // Gérer l'erreur (vous pouvez renvoyer un message)
    redirect("/admin/login?error=Identifiants invalides");
  }

  revalidatePath("/", "layout");
  redirect("/admin/dashboard");
}