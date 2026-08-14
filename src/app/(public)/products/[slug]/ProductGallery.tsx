"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 border border-gray-100">
        <Image
          src={images[active]}
          alt={name}
          fill
          style={{ objectFit: "contain", padding: "24px" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails — only show when more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              style={{
                border: i === active ? "2px solid #C9A227" : "2px solid #e5e5e5",
                padding: 0,
                background: "none",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <div className="relative w-16 h-16 bg-gray-50">
                <Image
                  src={src}
                  alt={`${name} view ${i + 1}`}
                  fill
                  style={{ objectFit: "contain", padding: "6px" }}
                  sizes="64px"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
