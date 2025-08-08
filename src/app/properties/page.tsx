"use client";

import MainLayout from "../../components/MainLayout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { featuredProperties } from "@/data/properties";
import { serviceApartments } from "@/data/serviceApartments";
import Link from "next/link";

// Property type icon helper
const propertyTypeIcon = (type) =>
  type === "land" ? (
    <svg className="w-5 h-5 mr-1 text-green-600 inline-block align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10l9-7 9 7M4 10v11h16V10" /></svg>
  ) : (
    <svg className="w-5 h-5 mr-1 text-orange-600 inline-block align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5a4 4 0 1 0-8" /></svg>
  );

// Simple property card
const PropertyCard = ({ image, title, location, description, type, link, tagline, features }) => {
  // Always ensure link is a string for <Link>
  const safeLink = typeof link === "string" && link.trim() ? link : "#";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-orange-200 overflow-hidden flex flex-col relative">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${type === "land" ? "bg-green-600/80 text-white" : "bg-orange-600/80 text-white"}`}>
          {propertyTypeIcon(type)}
          {type === "land" ? "Land" : "Short-let"}
        </span>
      </div>
      <div className="flex-1 flex flex-col p-5 gap-2">
        <h3 className="text-xl font-bold text-orange-500 mb-1 truncate">{title}</h3>
        <span className="text-orange-400 text-sm font-semibold mb-1">{location}</span>
        <p className="text-zinc-700 text-base mb-2 line-clamp-3">{description}</p>
        {tagline && <div className="text-xs text-orange-700 italic mb-2">{tagline}</div>}
        {features && Array.isArray(features) && features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {features.slice(0, 3).map((f, i) => (
              <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">{f}</span>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-auto">
          <Link
            href={safeLink}
            className="bg-zinc-900 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('az');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const [property, setProperty] = useState({
    title: "",
    location: "",
    status: "available",
    description: "",
    features: "",
    image: "",
    type: "",
    link: "",
  });

  useEffect(() => {
    fetch("/api/property")
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);

  let allProperties = [
    // Database properties
    ...properties.map((p) => ({
      image: p.image ? `/images/${p.image}` : "/placeholder.jpg",
      title: p.title,
      location: p.location,
      description: p.description,
      type: p.type === "Land" ? "land" : "apartment",
      link: typeof p.link === "string" && p.link.trim() ? p.link : "#",
      tagline: p.tagline || "",
      features: Array.isArray(p.features) ? p.features : (p.features ? [p.features] : []),
    })),
    // Hardcoded featured properties
    ...featuredProperties.map((p) => ({
      image: p.images?.[0] || "/placeholder.jpg",
      title: p.name,
      location: p.location,
      description: p.description,
      type: "land",
      link: p.link || "#",
      tagline: p.tagline || "",
      features: p.features || [],
    })),
    // Hardcoded service apartments
    ...serviceApartments.map((a) => ({
      image: a.images?.[0] || "/placeholder.jpg",
      title: a.name,
      location: a.location,
      description: a.description,
      type: "apartment",
      link: "/service-apartment", // <-- always use this URL for short-let cards
      tagline: a.tagline || "",
      features: a.features || [],
    })),
  ];

  if (filter !== 'all') {
    allProperties = allProperties.filter((p) => p.type === filter);
  }
  if (search.trim()) {
    allProperties = allProperties.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (sort === 'az') {
    allProperties = allProperties.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    allProperties = allProperties.sort((a, b) => b.title.localeCompare(a.title));
  }

  const totalPages = Math.ceil(allProperties.length / pageSize);
  const paginatedProperties = allProperties.slice((page - 1) * pageSize, page * pageSize);

  return (
    <MainLayout>
      <div className="pt-24 pb-10 min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#f5f7fa] font-sans">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-primary mb-2 drop-shadow-lg font-serif tracking-tight">
            Properties
          </h1>
          <p className="text-center text-lg text-gray-200 mb-8 font-light">
            Explore our exclusive listings and investment opportunities.
          </p>
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div className="flex gap-2">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full font-bold text-sm border ${filter==='all' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'} transition`}>
                All
              </button>
              <button onClick={() => setFilter('land')} className={`px-4 py-2 rounded-full font-bold text-sm border ${filter==='land' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-green-700 border-green-300 hover:bg-green-50'} transition`}>
                Land
              </button>
              <button onClick={() => setFilter('apartment')} className={`px-4 py-2 rounded-full font-bold text-sm border ${filter==='apartment' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'} transition`}>
                Short-let
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="px-4 py-2 rounded-full border border-orange-300 focus:border-orange-500 outline-none text-sm text-zinc-700 bg-white shadow-sm"
                style={{ minWidth: 220 }}
              />
              <span className="text-zinc-700 font-semibold text-sm">Sort:</span>
              <button onClick={() => setSort('az')} className={`px-3 py-1 rounded-full font-bold text-xs border ${sort==='az' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'} transition`}>A-Z</button>
              <button onClick={() => setSort('za')} className={`px-3 py-1 rounded-full font-bold text-xs border ${sort==='za' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'} transition`}>Z-A</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedProperties.length === 0 ? (
              <div className="col-span-full text-center text-zinc-500 text-lg font-semibold py-20">No properties found.</div>
            ) : (
              paginatedProperties.map((prop, idx) => (
                <PropertyCard key={idx} {...prop} />
              ))
            )}
          </div>
          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 rounded-full font-bold text-sm border bg-white text-orange-600 border-orange-300 hover:bg-orange-50 disabled:opacity-50">Prev</button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} className={`px-4 py-2 rounded-full font-bold text-sm border ${page === i + 1 ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-50'}`}>{i + 1}</button>
              ))}
              <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="px-4 py-2 rounded-full font-bold text-sm border bg-white text-orange-600 border-orange-300 hover:bg-orange-50 disabled:opacity-50">Next</button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
