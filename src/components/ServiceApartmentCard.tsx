"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ApartmentBookingForm = dynamic(() => import("./ApartmentBookingForm"), { ssr: false });

const ServiceApartmentCard = ({ showBookingButton = false }: { showBookingButton?: boolean }) => {
  const [showModal, setShowModal] = useState(false);

  // Handler to close modal on background click
  const handleModalBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <section className="relative bg-white py-8 px-2" id="service-apartment-section">
      <div className="w-full max-w-4xl mx-auto rounded-xl border border-orange-300 overflow-hidden flex flex-col md:flex-row items-center bg-zinc-900">
        <div className="relative w-full md:w-1/2 aspect-[4/3] min-h-[160px] max-h-[220px]">
          <Image
            src="/images/apartment-rentals.jpg"
            alt="Service Apartment"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-l-xl"
            priority
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center items-center text-center gap-2">
          <h2 className="text-xl md:text-2xl font-extrabold text-orange-500 mb-1 drop-shadow">BOOK A SHORT-LET APARTMENT</h2>
          <p className="text-sm md:text-base text-white/90 mb-1 font-medium">
            Experience premium short-let and serviced apartments for business or leisure. Enjoy comfort, security, and style in every stay, with flexible booking and payment options in Lagos & Abuja.
          </p>
          <div className="flex gap-2 mt-1">
            <button
              className="bg-orange-600 text-white px-3 py-1.5 rounded-full font-extrabold text-sm hover:bg-black hover:text-orange-500 transition"
              onClick={() => setShowModal(true)}
            >
              Book Short-let Now
            </button>
            <Link href="/service-apartment" className="bg-white text-orange-600 px-3 py-1.5 rounded-full font-extrabold text-sm border border-orange-600 hover:bg-orange-600 hover:text-white transition">
              View Short-let
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={handleModalBackgroundClick}>
          <div className="bg-black rounded-xl p-0 max-w-xl w-full relative" style={{ boxShadow: 'none' }}>
            <button
              className="absolute top-2 right-2 text-orange-600 text-xl font-bold hover:text-black transition z-10"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <ApartmentBookingForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceApartmentCard;
