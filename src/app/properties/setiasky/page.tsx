"use client";

import MainLayout from "../../../components/MainLayout";
import React, { useState } from "react";
import PropertyImagePreview from "../../../components/PropertyImagePreview";
import BookInspectionForm from "../../../components/BookInspectionForm";

const property = {
  name: "Setia Sky Residences",
  location: "Ibereko Scheme, Eleko, Ibeju-Lekki, Lagos",
  city: "Ibeju-Lekki",
  state: "Lagos",
  landTitle: "Certificate of Occupancy (C of O) — Government-Allocated Land",
  video: "https://youtu.be/eRKwvBLyP6I",
  description: `Setia Sky Residence is a premium residential estate located within the highly sought-after Iberekodo Scheme, Eleko, in the heart of Ibeju-Lekki — Lagos’ fastest-growing smart city corridor.\nAs development surges across Ibeju-Lekki, land prices continue to rise quarterly. The opportunity to own a government-allocated plot in this prestigious neighborhood is becoming rare. Setia Sky Residence offers you a secure, high-value investment opportunity with full Government allocation and a Certificate of Occupancy (C of O).`,
  strategic: [
    "10 minutes from the Lekki-Epe Expressway",
    "Pan-Atlantic University",
    "Lekki International Airport (ongoing)",
    "Eleganza Industrial City",
    "Lekki Free Trade Zone",
    "Dangote Refinery",
    "And other key infrastructural developments"
  ],
  whyChoose: [
    "Excellent road network with easy access to Lagos’ commercial hubs",
    "Secure investment with high appreciation potential",
    "Perfect for residential living, land banking, or building your mini estate"
  ],
  offer: [
    "500 SQM — ₦27M (All-Inclusive) (Actual Price: ₦30M)",
    "Initial Deposit — ₦2M Only",
    "Flexible Payment Plan — Up to 12 Months",
    "3000 SQM — ₦162M (All-Inclusive)"
  ],
  features: [
    "Perimeter fencing and gated security",
    "Good road network",
    "Drainage system",
    "Electricity supply",
    "Water supply",
    "Green areas"
  ],
  tagline: "Setia  Residence — Own Land at the Center of Lagos' Smart City Revolution.",
  images: [
    "/images/properties/setia-sky-residences/adsetia.jpg",
    "/images/properties/setia-sky-residences/3.jpeg",
    "/images/properties/setia-sky-residences/4.jpeg",
    "/images/properties/setia-sky-residences/5.jpeg",
    "/images/properties/setia-sky-residences/6.jpeg",
    "/images/properties/setia-sky-residences/7.jpeg",
    "/images/properties/setia-sky-residences/8.jpeg"
  ]
};

const SectionLine = () => <hr className="my-6 border-t-2 border-orange-400 opacity-60" />;

export default function SetiaSkyPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <MainLayout>
      <div className="h-12 md:h-16" />
      <section className="relative bg-black text-white py-20 px-2 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 items-start">
          <div className="w-full">
            {/* Make headline/tagline at the top invisible */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-orange-500 drop-shadow-lg text-center hidden">
              {property.name}
            </h1>
            <p className="text-lg font-semibold mb-8 text-orange-200 text-center hidden">
              {property.tagline}
            </p>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="mb-2 text-center">
                  <span className="inline-block bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md cursor-pointer select-none">
                    Click to view images
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <PropertyImagePreview images={property.images} alt={property.name} imageClassName="w-4/5 max-w-xs md:max-w-sm max-h-44 cursor-pointer" />
                  <div className="w-full mt-4 flex justify-center">
                    <iframe
                      title="Setia Sky Residences Map"
                      src="https://www.google.com/maps?q=Ibereko+Scheme,+Eleko,+Ibeju-Lekki,+Lagos&output=embed"
                      width="100%"
                      height="220"
                      className="rounded-lg border-2 border-orange-400 shadow-lg max-w-xs md:max-w-sm"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                {/* Headline/tagline visible only here */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-orange-500 drop-shadow-lg">
                  {property.name}
                </h1>
                <p className="text-lg font-semibold mb-2 text-orange-200">{property.tagline}</p>
                <SectionLine />
                <p className="mb-4 text-white/90 whitespace-pre-line">{property.description}</p>
                <SectionLine />
                <div>
                  <h2 className="text-xl font-bold text-orange-400 mb-2">Proximity to Major Landmarks</h2>
                  <ul className="mb-4 text-white/80">
                    {property.strategic.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 mb-1">
                        <span className="text-orange-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <SectionLine />
                <div>
                  <h2 className="text-xl font-bold text-orange-400 mb-2">Why Choose Setia Sky?</h2>
                  <ul className="list-disc list-inside text-white/90">
                    {property.whyChoose.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <SectionLine />
                <div>
                  <h2 className="text-xl font-bold text-orange-400 mb-2">Current Offer</h2>
                  <ul className="list-disc list-inside text-white/90 text-base md:text-lg">
                    {property.offer.map((item, i) => (
                      <li key={i} className="break-words whitespace-normal leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                <SectionLine />
                <div>
                  <h2 className="text-xl font-bold text-orange-400 mb-2">Estate Features</h2>
                  <ul className="list-disc list-inside text-white/90">
                    {property.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <SectionLine />
                <div className="flex flex-col items-center gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="bg-orange-600 text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-black hover:text-orange-500 transition"
                  >
                    Book Your Inspection
                  </button>
                  {property.video && (
                    <div className="my-6 w-full flex justify-center">
                      <div className="relative w-full max-w-xl" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${property.video.split('/').pop()?.split('v=')[1] || property.video.split('/').pop()?.split('?')[0]}`}
                          title="Property Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        ></iframe>
                      </div>
                    </div>
                  )}
                  {showForm && (
                    <BookInspectionForm onClose={() => setShowForm(false)} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
