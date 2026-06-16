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
  details?: string; // dimensions, papier, format, etc.
  created_at: string;
  // Champs optionnels pour les spécificités
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

export interface Tirage extends Product {
  type: "tirage";
  tirage_details: {
    dimensions: string;
    paper: string;
    edition: string; // ex: "Série limitée à 150 exemplaires"
    signed: boolean;
  };
}

export interface RessourceNumerique extends Product {
  type: "ressource";
  ressource_details: {
    format: "PDF" | "EPUB";
    pages: number;
    download_link?: string;
  };
}

// Utile pour l'affichage catalogue
export type CatalogueProduct = Tirage | RessourceNumerique;