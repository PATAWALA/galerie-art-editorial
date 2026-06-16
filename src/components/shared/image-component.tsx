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
  width = 800,
  height = 600,
}: ImageComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false);

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

  const baseClasses = `transition-all duration-1000 ${
    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
  } ${className}`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={baseClasses}
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
      width={width}
      height={height}
      className={`w-full h-auto ${baseClasses}`}
      sizes={sizes}
      priority={priority}
      onLoad={() => setIsLoaded(true)}
    />
  );
}