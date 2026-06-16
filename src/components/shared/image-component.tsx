"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function ImageComponent({
  src,
  alt,
  fill = false,
  className = "",
  sizes = "100vw",
  priority = false,
  width,
  height,
}: ImageComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const baseClasses = `transition-all duration-1000 ${
    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
  }`;

  // Si une image manque, un fond taupe discret s’affiche.
  if (!src || src.trim() === "") {
    return (
      <div
        className={`bg-[#A3907F]/10 flex items-center justify-center ${
          fill ? "absolute inset-0" : "w-full h-64"
        } ${className}`}
      >
        <span className="font-serif text-xs text-[#A3907F]/40 italic">
          Image à venir
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${baseClasses} ${className}`}
        sizes={sizes}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`object-cover ${baseClasses} ${className}`}
      sizes={sizes}
      priority={priority}
      onLoad={() => setIsLoaded(true)}
    />
  );
}