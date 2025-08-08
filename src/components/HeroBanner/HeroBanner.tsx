"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BookInspectionForm from "@/components/BookInspectionForm"; // Make sure this path is correct

const images = ['/images/scotch2.jpg', '/images/scotch3.jpg', '/images/scotch4.jpg'];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={images[current]}
        alt={`Scotch Stone Hero ${current + 1}`}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%)',
        }}
      >
        <div className="bg-black/20 rounded-3xl shadow-2xl px-6 py-8 md:px-12 md:py-10 flex flex-col items-center max-w-3xl w-full mx-4 backdrop-blur-sm">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-4 drop-shadow-xl tracking-tight" style={{ color: '#ff6a00' }}>
            Welcome to Scotchstone Real Estate
          </h1>
          <p className="text-base md:text-xl text-white text-center mb-8 max-w-2xl font-light">
            Discover premium properties, expert advice, and seamless real estate experiences in Lagos.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-[#ff6a00] text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base font-semibold shadow hover:bg-black hover:text-white transition-all duration-200"
            >
              View Properties
            </a>
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base font-semibold shadow hover:bg-[#ff6a00] hover:text-white transition-all duration-200"
            >
              Book Inspection
            </button>
          </div>
        </div>
      </div>
      {/* Modal for Book Inspection Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-3xl text-black hover:text-[#ff6a00]"
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h1 className="text-4xl font-extrabold leading-tight mb-4 text-black">
              Book Your Inspection
            </h1>
            
            <BookInspectionForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
