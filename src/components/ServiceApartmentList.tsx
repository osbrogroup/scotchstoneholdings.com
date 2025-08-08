"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { serviceApartments } from "../data/serviceApartments";
import ApartmentImageGallery from "./ApartmentImageGallery";
import { useState as useLocalState } from "react";

const ApartmentBookingForm = dynamic(() => import("./ApartmentBookingForm"), { ssr: false });

function ModalImageGallery({ images, name, onClose }: { images: string[]; name: string; onClose: () => void }) {
  const [idx, setIdx] = useLocalState(0);
  const prev = () => setIdx(idx === 0 ? images.length - 1 : idx - 1);
  const next = () => setIdx(idx === images.length - 1 ? 0 : idx + 1);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-zinc-900 rounded-xl p-4 max-w-4xl w-full relative flex flex-col items-center">
        <button
          className="absolute top-2 right-2 text-orange-600 text-2xl font-bold hover:text-white transition z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="relative w-full flex items-center justify-center" style={{ minHeight: 400 }}>
          {images.length > 1 && (
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 z-10"
              onClick={prev}
              aria-label="Previous image"
              type="button"
            >
              &#8592;
            </button>
          )}
          <img
            src={images[idx]}
            alt={name + ' image ' + (idx + 1)}
            className="rounded-xl object-contain border border-orange-300 bg-black max-h-[70vh] w-auto mx-auto"
            style={{ maxWidth: '90%' }}
          />
          {images.length > 1 && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 z-10"
              onClick={next}
              aria-label="Next image"
              type="button"
            >
              &#8594;
            </button>
          )}
        </div>
        <span className="text-white mt-4 text-lg font-semibold">{name}</span>
      </div>
    </div>
  );
}

const ServiceApartmentList = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [openImageModal, setOpenImageModal] = useState<string | null>(null);

  return (
    <section className="pt-16 pb-10 px-2 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-12 text-center drop-shadow-lg tracking-tight">Our Short-let Apartments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceApartments.map((apt) => (
            <div key={apt.id} className="flex flex-col md:flex-row bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-orange-200">
              <div className="relative w-full md:w-2/5 min-h-[320px] max-h-[380px] group flex items-center justify-center">
                <ApartmentImageGallery images={apt.images} onViewImages={() => setOpenImageModal(apt.id)} />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6 gap-4">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-xl md:text-2xl font-bold text-orange-400 mb-1">{apt.name}</h2>
                  <p className="text-white/90 text-base mb-1">{apt.description}</p>
                  <span className="text-orange-300 text-sm font-semibold">{apt.location}</span>
                </div>
                <div className="flex gap-3 mt-2 justify-center">
                  <button
                    className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-base hover:bg-black hover:text-orange-500 transition"
                    onClick={() => setOpenModal(apt.id)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
              {openModal === apt.id && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) setOpenModal(null); }}>
                  <div className="bg-black rounded-xl p-0 max-w-xl w-full relative" style={{ boxShadow: 'none' }}>
                    <button
                      className="absolute top-2 right-2 text-orange-600 text-xl font-bold hover:text-black transition z-10"
                      onClick={() => setOpenModal(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <ApartmentBookingForm />
                  </div>
                </div>
              )}
              {openImageModal === apt.id && (
                <ModalImageGallery images={apt.images} name={apt.name} onClose={() => setOpenImageModal(null)} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceApartmentList;
