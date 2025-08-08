import React from "react";

const CallToAction = () => (
  <section className="relative pt-0 pb-10 text-white text-center" style={{ backgroundColor: "#ff6a00" }}>
    <div className="max-w-2xl mx-auto px-4 relative z-30 pt-16 flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-lg" style={{letterSpacing: "-0.5px"}}>
        Ready to Invest or Find Your Next Home?
      </h2>
      <hr className="border-t border-white/40 my-2 w-1/2 mx-auto" />
      <p className="text-base md:text-lg mb-4 font-semibold text-white/90">
        Contact Scotch Stone Holdings today for expert advice, exclusive listings, and unbeatable service.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-3 mt-4">
        <a
          href="/properties"
          className="bg-white text-[#ff6a00] px-6 py-3 rounded-full font-extrabold text-sm md:text-base shadow-xl transition duration-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 border-2 border-white hover:border-black drop-shadow-lg"
        >
          View Properties
        </a>
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full font-extrabold text-sm md:text-base shadow-xl transition duration-200 hover:bg-white hover:text-[#ff6a00] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 border-2 border-black hover:border-[#ff6a00] drop-shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;
