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
      <article className="flex flex-col gap-6">
        <div className="relative overflow-hidden aspect-[4/5]">
          <ImageComponent
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-light text-charcoal">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            {excerpt}
          </p>
          <span className="mt-4 inline-block border-b border-gold-500 pb-1 text-xs uppercase tracking-[0.2em] text-gold-700 transition-all group-hover:border-gold-700 group-hover:text-gold-900">
            Lire plus
          </span>
        </div>
      </article>
    </Link>
  );
}