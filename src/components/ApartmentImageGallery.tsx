"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  onViewImages?: () => void;
}

const ApartmentImageGallery: React.FC<Props> = ({ images, onViewImages }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const prevImg = () => setImgIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  const nextImg = () => setImgIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={images[imgIdx]}
        alt={`Apartment image ${imgIdx + 1}`}
        fill
        style={{ objectFit: "cover" }}
        className="md:rounded-l-2xl"
        priority={imgIdx === 0}
      />
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
            onClick={prevImg}
            aria-label="Previous image"
            type="button"
          >
            &#8592;
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
            onClick={nextImg}
            aria-label="Next image"
            type="button"
          >
            &#8594;
          </button>
        </>
      )}
      {onViewImages && (
        <button
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/30 px-4 py-2 rounded-full text-white/80 text-base md:text-lg font-semibold backdrop-blur-sm hover:bg-black/60 transition"
          style={{letterSpacing: '0.08em'}}
          onClick={onViewImages}
          type="button"
        >
          View Images
        </button>
      )}
    </div>
  );
};

export default ApartmentImageGallery;
