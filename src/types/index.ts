// src/types/index.ts
export interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  image_url: string;
  slug: string;
  created_at: string;
  aspect?: string; // ex: "aspect-[4/5]"
}