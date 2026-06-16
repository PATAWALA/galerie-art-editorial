"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageProps } from "next/image";

export default function ImageComponent(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      onLoad={() => setLoaded(true)}
      className={`transition-all duration-1000 ${
        loaded ? "blur-0 scale-100" : "blur-xl scale-105"
      } ${props.className || ""}`}
      alt={props.alt}
    />
  );
}