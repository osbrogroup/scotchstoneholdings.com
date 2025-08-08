import React from "react";
import Image from "next/image";
import { featuredProperties, Property } from "../data/properties";

const FeaturedProperty = ({ properties = featuredProperties }: { properties?: Property[] }) => (
  <section className="relative bg-black text-white py-16 px-2">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-orange-500 drop-shadow-lg tracking-tight">
        Featured Estate Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Existing property cards only, Service Apartment card removed */}
        {properties.map((property: Property, idx: number) => (
          <div
            key={property.name}
            className="group flex flex-col bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-orange-700 hover:-translate-y-1 transition-all duration-300 min-h-[420px] max-h-[600px]"
          >
            <div className="relative w-full aspect-[4/3] min-h-[220px] max-h-[220px]">
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-105 rounded-t-3xl"
                priority={idx === 0}
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-lg font-extrabold text-orange-500 drop-shadow group-hover:text-white mb-1 text-center truncate w-full" title={property.name}>
                  {property.name}
                </h3>
                <p className="text-xs font-semibold text-orange-300 mb-1 text-center line-clamp-2">{property.tagline}</p>
                <p className="mb-1 text-gray-200 font-bold text-xs text-center truncate w-full" title={property.location}>Location: <span className="font-normal">{property.location}</span></p>
                <p className="mb-1 text-gray-300 font-bold text-xs text-center truncate w-full" title={property.landTitle}>Title: <span className="font-normal">{property.landTitle}</span></p>
              </div>
              <div className="flex flex-col items-center mt-4 gap-2">
                <a
                  href={property.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white font-bold px-3 py-1 rounded-full shadow hover:bg-orange-600 hover:text-white transition text-xs backdrop-blur mb-1 truncate w-full text-center"
                >
                  ▶ Watch Video
                </a>
                <a href={property.link} className="bg-orange-600 text-white px-4 py-2 rounded-full font-extrabold text-xs shadow hover:bg-black hover:text-orange-500 transition text-center w-full">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProperty;
