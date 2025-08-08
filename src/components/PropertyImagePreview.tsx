"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PropertyImagePreviewProps {
  images: string[];
  alt: string;
}

const PropertyImagePreview: React.FC<PropertyImagePreviewProps> = ({ images, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openPreview = (idx: number) => {
    setCurrent(idx);
    setIsOpen(true);
  };

  const closePreview = () => setIsOpen(false);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div>
      <div className="flex flex-col gap-4">
        {images.map((img, idx) => (
          <div
            key={img}
            className="relative w-32 h-24 rounded-lg overflow-hidden shadow cursor-pointer border-2 border-orange-400 hover:scale-105 transition"
            onClick={() => openPreview(idx)}
          >
            <Image src={img} alt={alt + " " + (idx + 1)} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-orange-600 transition"
            onClick={closePreview}
            aria-label="Close preview"
          >
            ×
          </button>
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/60 rounded-full px-3 py-2 hover:bg-orange-600 transition"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="relative w-[90vw] max-w-2xl h-[60vh] rounded-xl overflow-hidden shadow-2xl border-4 border-orange-600 flex items-center justify-center bg-black">
            <Image
              src={images[current]}
              alt={alt + " preview " + (current + 1)}
              fill
              style={{ objectFit: "contain", background: "#fff" }}
              className=""
              priority
            />
          </div>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/60 rounded-full px-3 py-2 hover:bg-orange-600 transition"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyImagePreview;
