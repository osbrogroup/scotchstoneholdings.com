import React from "react";
import Image from "next/image";

const CompanyIntro = () => (
  <section className="pt-16 pb-10 bg-white relative">
    <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#ff6a00]" style={{ textShadow: '0 2px 8px rgba(255,106,0,0.25)' }}>
        About Scotch Stone Holdings
      </h2>
      <hr className="border-t border-[#ff6a00]/30 my-2" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/images/scotchlogo.png"
            alt="Scotch Stone Holdings Logo"
            width={270}
            height={180}
            className="rounded-xl object-contain shadow-lg bg-white p-2"
            priority
            style={{ maxWidth: '270px', maxHeight: '180px' }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 text-left md:text-center">
          <p className="text-lg md:text-xl mb-2 font-semibold text-[#ff6a00]" style={{textShadow: '0 1px 4px rgba(255,106,0,0.10)'}}>
            Scotch Stone Holdings is a premier real estate investment and property acquisition company, specializing in residential, commercial, and apartment rental solutions.
          </p>
          <p className="text-base mb-2 text-[#ff6a00]">
            We are dedicated to delivering value, trust, and exceptional service to our clients and partners.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyIntro;
