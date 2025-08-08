"use client";
import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout";
import PropertyImagePreview from "../../../components/PropertyImagePreview";
import BookInspectionForm from "@/components/BookInspectionForm";

const property = {
  name: "Vina Residence Phase 2 (Commercial & Residential)",
  location: "Facing Lekki-Epe Expressway, Okegun, Ibeju-Lekki, Lagos",
  city: "Okegun, Ibeju-Lekki",
  state: "Lagos",
  landTitle: "Government Allocation (Certificate of Occupancy — C of O)",
  video: "https://youtube.com/shorts/tuMOfPN4tyI?feature=share",
  description: `Premium Commercial and Residential Land Facing the Lekki-Epe Expressway
Welcome to Vina Residence Phase 2 (Commercial) — a prime commercial property strategically located right along the Lekki-Epe Expressway in Okegun, Ibeju-Lekki, one of Lagos’ fastest-developing investment hubs.
This is not just land — it’s a powerful commercial asset designed for businesses ready to thrive in the heart of the Ibeju-Lekki commercial corridor.

Position your business or investment right where Lagos’ commercial future is headed. With continuous infrastructural growth and skyrocketing demand, Vina Residence Phase 2 (Commercial) is a smart move for investors, developers, and business owners alike.
Plots are limited. Prices are rising. Now is the time to act!`,
  strategic: [
    "Lekki-Epe International Airport (Under Development)",
    "Alaro City",
    "Lagos Food Hub",
    "Directly Facing the Lekki-Epe Expressway"
  ],
  whyChoose: [
    "Facing the Lekki-Epe Expressway — unmatched visibility and accessibility",
    "Secure Government Allocation with C of O",
    "High ROI — rising demand for commercial properties in Ibeju-Lekki"
  ],
  offer: [
    "500 SQM (Commercial) — ₦50 Million",
    "1000 SQM (Commercial) — ₦100 Million",
    "Initial Deposit: ₦3 Million",
    "Flexible Payment Plans: Spread over 3 to 12 months"
  ],
  features: [
    "Gated Entrance with 24/7 Security",
    "CCTV Surveillance System",
    "Well-Planned Commercial Layout",
    "Standard Road Network and Drainage",
    "Easy Access & Prime Visibility"
  ],
  tagline: "Premium Commercial and Residential Land Facing the Lekki-Epe Expressway.",
  images: [
    "/images/properties/vinaphase2/vinaphase2.jpg",
    "/images/properties/vinaphase2/1.jpeg",
    "/images/properties/vinaphase2/2.jpeg",
    "/images/properties/vinaphase2/3.jpg",
    "/images/properties/vinaphase2/4.jpg",
    "/images/properties/vinaphase2/5.jpeg",
    "/images/properties/vinaphase2/6.jpg"
  ]
};

const SectionLine = () => <hr className="my-6 border-t-2 border-orange-400 opacity-60" />;

export default function VinaPhase2Page() {
  const [showForm, setShowForm] = useState(false);

  return (
    <MainLayout>
      {/* Spacer to create a larger gap (3rem) between header and body */}
      <div className="h-12 md:h-16" />
      <section className="relative bg-black text-white py-20 px-2 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 flex-shrink-0">
            {/* Click to view images label */}
            <div className="mb-2 text-center">
              <span className="inline-block bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md cursor-pointer select-none">
                Click to view images
              </span>
            </div>
            {/* Display all images in a vertical column under the label, clickable preview */}
            <div className="flex flex-col gap-3 items-center">
              <PropertyImagePreview images={property.images} alt={property.name} imageClassName="w-4/5 max-w-xs md:max-w-sm max-h-44 cursor-pointer" />
              {/* Map embed below images */}
              <div className="w-full mt-4 flex justify-center">
                <iframe
                  title="Vina Residence Phase 2 Map"
                  src="https://www.google.com/maps?q=Okegun,+Ibeju-Lekki,+Lagos&output=embed"
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
              <h2 className="text-xl font-bold text-orange-400 mb-2">Why Invest in Vina Residence Phase 2?</h2>
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
      </section>
    </MainLayout>
  );
}
