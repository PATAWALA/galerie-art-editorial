import Link from "next/link";
import ImageComponent from "@/components/shared/image-component";

interface EditorialCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
}

export default function EditorialCard({
  title,
  excerpt,
  imageSrc,
  slug,
}: EditorialCardProps) {
  return (
    <Link href={slug} className="group block">
      <article className="flex flex-col gap-5">
        <div className="relative overflow-hidden aspect-[4/5]">
          <ImageComponent
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay subtil au survol */}
          <div className="absolute inset-0 bg-[#1A1A1A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-light text-[#1A1A1A] group-hover:text-[#A3907F] transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/60">
            {excerpt}
          </p>
          <span className="mt-4 inline-block border-b border-[#A3907F]/60 pb-1 text-xs uppercase tracking-[0.2em] text-[#A3907F] transition-colors group-hover:border-[#A3907F] group-hover:text-[#1A1A1A]">
            Lire la suite
          </span>
        </div>
      </article>
    </Link>
  );
}