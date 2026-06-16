// src/components/sections/product-card.tsx
import Link from "next/link";
import ImageComponent from "@/components/shared/image-component";
import type { CatalogueProduct } from "@/types";

export default function ProductCard({ product }: { product: CatalogueProduct }) {
  const isTirage = product.type === "tirage";

  return (
    <Link
      href={`/boutique/${product.slug}`}
      className="group block bg-[#FBFBFA] border border-[#A3907F]/10 hover:border-[#A3907F]/30 transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <ImageComponent
          src={product.image_url}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-[#FBFBFA]/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider text-[#A3907F]">
          {isTirage ? "Tirage d’art" : "Livret numérique"}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-serif text-xl font-light text-[#1A1A1A] group-hover:text-[#A3907F] transition-colors">
          {product.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#1A1A1A]/60 line-clamp-2">
          {product.description}
        </p>
        {product.details && (
          <p className="text-xs text-[#A3907F]/70 italic mt-1">
            {product.details}
          </p>
        )}
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-light text-[#A3907F]">
            {product.price} €
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-transparent group-hover:text-[#A3907F]/70 transition-colors">
            Détails →
          </span>
        </div>
      </div>
    </Link>
  );
}