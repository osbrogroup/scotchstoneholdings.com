"use client";
import React, { useState } from "react";
import Link from "next/link";
import MainLayout from "../../../components/MainLayout";
import PropertyImagePreview from "../../../components/PropertyImagePreview";
import BookInspectionForm from "../../../components/BookInspectionForm";

const property = {
  name: "Vina Residence Phase 1",
  location: "Ketu, Epe, Lagos (Beside Lagos Food Hub)",
  city: "Ketu Epe",
  state: "Lagos",
  landTitle: "Registered Survey and Deed of Assignment",
  video: "https://youtu.be/g2aQbIKZ3xg",
  description: `Vina Residence Phase 1 is a well-planned residential and commercial estate located in the highly sought-after Ketu–Epe axis of Lagos. Perfectly positioned beside the Lagos Food Logistics Hub, this estate offers incredible proximity to major developments such as the Lekki-Epe International Airport and the upcoming Lagos Film City.\nWith its strategic location, excellent accessibility, and rapidly appreciating land value, Vina Residence Phase 1 is an investor’s dream and a homeowner’s perfect choice.\n\nEpe is fast becoming the new investment hub in Lagos due to its government-driven infrastructural projects, industrial zones, and residential demand. Investing in Vina Residence Phase 1 places you at the center of this emerging smart city.`,
  strategic: [
    "Beside Lagos Food Logistics Center",
    "Lagos Film City",
    "Lekki-Epe International Airport (Proposed)",
    "Dangote Refinery",
    "Epe Resort and Spa",
    "Omu-Epe Expressway"
  ],
  whyChoose: [
    "Fastest-selling estate in Ketu–Epe axis",
    "Strategically located beside Lagos Food Logistics Center",
    "High potential for capital appreciation",
    "Perfect for both residential living and commercial development",
    "Affordable entry with flexible payment plans"
  ],
  offer: [
    "Residential Plot (500 SQM) – ₦6,000,000",
    "Commercial Plot (1000 SQM) – ₦14,000,000",
    "Initial Deposit: Just ₦1,000,000",
    "Flexible Payment Plan: Spread across 3 to 9 months"
  ],
  features: [
    "Secure Gated Entrance & Gatehouse",
    "Standard Drainage System",
    "Good Road Network within the Estate",
    "Electricity Supply",
    "Recreational and Green Spaces"
  ],
  tagline: "Affordable Residential & Commercial Plots in Epe’s Fastest Growing Investment Corridor.",
  images: [
    "/images/properties/vinaphase1/vinaphase1.jpg",
    "/images/properties/vinaphase1/1.png",
    "/images/properties/vinaphase1/2.png",
    "/images/properties/vinaphase1/4.jpg",
    "/images/properties/vinaphase1/5.jpeg",
    "/images/properties/vinaphase1/6.jpeg"
  ]
};

const SectionLine = () => <hr className="my-6 border-t-2 border-orange-400 opacity-60" />;

export default function VinaPhase1Page() {
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
                  title="Vina Residence Phase 1 Map"
                  src="https://www.google.com/maps?q=Ketu,+Epe,+Lagos&output=embed"
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
              <h2 className="text-xl font-bold text-orange-400 mb-2">Why Invest in Vina Residence Phase 1?</h2>
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
              {/* Center the Book Your Inspection button and video */}
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