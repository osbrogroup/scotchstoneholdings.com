"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import MainLayout from "../../components/MainLayout";

const PartnerWithUsFormModal = dynamic(() => import("../../components/PartnerWithUsFormModal"), { ssr: false });

export default function OpportunitiesPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const investmentImg = "/uploads/investment.jpg";
  const careerImg = "/uploads/career.jpg";
  const agentImg = "/uploads/agent.jpg";

  return (
    <MainLayout>
      <div className="h-12 md:h-16" />
      <section
        className="w-full min-h-screen bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%25%27%20height=%27100%25%27%20viewBox=%270%200%201600%20800%27%3E%3Crect%20fill=%27%23000000%27%20width=%271600%27%20height=%27800%27/%3E%3Cg%3E%3Cpolygon%20fill=%27%23220000%27%20points=%271600%20160%200%20460%200%20350%201600%2050%27/%3E%3Cpolygon%20fill=%27%23440000%27%20points=%271600%20260%200%20560%200%20450%201600%20150%27/%3E%3Cpolygon%20fill=%27%23660000%27%20points=%271600%20360%200%20660%200%20550%201600%20250%27/%3E%3Cpolygon%20fill=%27%23880000%27%20points=%271600%20460%200%20760%200%20650%201600%20350%27/%3E%3Cpolygon%20fill=%27%23A00%27%20points=%271600%20800%200%20800%200%20750%201600%20450%27/%3E%3C/g%3E%3C/svg%3E')] bg-no-repeat bg-cover text-white"
      >
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 space-y-24">
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-orange-600 drop-shadow-lg font-serif">Explore Opportunities</h1>
            <p className="text-xl text-zinc-200 mt-4 max-w-3xl mx-auto font-medium">
              Partner, invest, or build a career with <span className="text-orange-400 font-bold">Scotchstone Holdings</span>.
              Discover where your ambition meets opportunity.
            </p>
          </div>

          {/* Investment Card */}
          <div className="grid md:grid-cols-2 rounded-3xl shadow-lg overflow-hidden text-center">
            <div className="bg-black text-white p-10 space-y-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-serif font-bold text-orange-400">Investment Partnerships</h2>
              <p>
                Join our network of investors and enjoy transparent ROI from property development,
                serviced apartments, and co-ownership ventures.
              </p>
              <ul className="text-sm text-gray-300 list-disc list-inside">
                <li>Joint venture property development</li>
                <li>Short-let & service apartment investment</li>
                <li>Flexible ROI & co-ownership models</li>
              </ul>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setOpenModal("partner")}
                  className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  Partner With Us
                </button>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center">
              <img src={investmentImg} alt="Investment" className="h-80 w-80 object-cover" />
            </div>
          </div>

          {/* Careers Card */}
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl shadow-xl overflow-hidden bg-white text-center">
            <div className="bg-black/90 p-10 text-white space-y-4 flex flex-col items-center">
              <h2 className="text-3xl font-serif font-bold text-orange-400">Careers & Talent</h2>
              <p>
                We’re hiring thinkers, doers, and dreamers. Whether you’re a marketer, agent,
                or strategist — grow with us.
              </p>
              <ul className="text-sm text-gray-200 list-disc list-inside">
                <li>Real estate sales & marketing</li>
                <li>Property management & operations</li>
                <li>Internships & graduate programs</li>
              </ul>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setOpenModal("career")}
                  className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={careerImg} alt="Career" className="h-90 w-80 object-cover" />
            </div>
          </div>

          {/* Vendor Card */}
          <div className="bg-black rounded-3xl p-10 shadow-lg text-white text-center space-y-4 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-orange-500 font-serif">Vendors & Service Providers</h2>
            <p className="max-w-xl mx-auto">
              Reliable contractors, cleaners, facility managers, and designers — let’s work together
              to elevate the living experience.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>Facility management</li>
              <li>Cleaning & maintenance</li>
              <li>Interior design & furnishing</li>
            </ul>
            <div className="mt-4 text-center">
              <button
                onClick={() => setOpenModal("vendor")}
                className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Become a Vendor
              </button>
            </div>
          </div>

          {/* Agent Card */}
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg text-center">
            <div className="bg-black text-white p-10 space-y-4 flex flex-col items-center">
              <h2 className="text-3xl font-bold font-serif text-orange-400">Join Our Agent Network</h2>
              <p>
                Become part of a growing team of trusted agents. Earn great commissions and
                access premium listings.
              </p>
              <ul className="text-sm text-gray-300 list-disc list-inside">
                <li>Exclusive property listings</li>
                <li>Sales & marketing support</li>
                <li>Attractive commission structure</li>
              </ul>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setOpenModal("agent")}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  Join Our Network
                </button>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center">
              <img src={agentImg} alt="Agent" className="h-90 w-full object-cover" />
            </div>
          </div>
        </div>

        <PartnerWithUsFormModal open={!!openModal} onClose={() => setOpenModal(null)} />
      </section>
    </MainLayout>
  );
}
