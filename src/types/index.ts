// src/types/index.ts

export type ProductType = "tirage" | "ressource";

export interface Product {
  id: string;
  type: ProductType;
  title: string;
  description: string;
  price: number; // en euros
  image_url: string;
  slug: string;
  details?: string; // résumé technique
  created_at: string;
  // Champs spécifiques optionnels
  tirage_details?: {
    dimensions: string;
    paper: string;
    edition: string;
    signed: boolean;
  };
  ressource_details?: {
    format: "PDF" | "EPUB";
    pages: number;
    download_link?: string;
  };
}

// Type utilisé dans toute la boutique
export type CatalogueProduct = Product;