import React from "react";
import Image from "next/image";

const land = {
  name: "Setia Sky Residences",
  tagline: "Own Land at the Center of Lagos' Smart City Revolution.",
  location: "Ibereko Scheme, Eleko, Ibeju-Lekki, Lagos",
  price: "₦27M (All-Inclusive)",
  image: "/images/properties/setia-sky-residences/1.jpg",
  link: "/properties/setiasky",
};

const FeaturedLandCard = () => (
  <section className="relative bg-white py-12 px-4 border-b border-gray-200">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-orange-500">
        <Image
          src={land.image}
          alt={land.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-orange-600 drop-shadow-sm">
          {land.name}
        </h2>
        <p className="text-lg font-semibold mb-2 text-gray-800">{land.tagline}</p>
        <p className="mb-2 text-gray-700 font-bold">Location: <span className="font-normal">{land.location}</span></p>
        <p className="mb-4 text-gray-700 font-bold">Starting at: <span className="text-orange-600 font-extrabold">{land.price}</span></p>
        <a
          href={land.link}
          className="bg-orange-600 text-white px-8 py-3 rounded-full font-extrabold text-lg shadow-lg hover:bg-black hover:text-orange-500 transition"
        >
          View Details
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedLandCard;
