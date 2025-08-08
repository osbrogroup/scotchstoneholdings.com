import MainLayout from "../../components/MainLayout";
import React from "react";

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Top Black Section */}
      <div className="bg-black pt-28 pb-16 px-2 w-full">{/* Increased pt-20 to pt-28 for more space */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 drop-shadow-lg tracking-tight font-serif mb-6">Contact Us</h1>{/* Reduced text size and increased mb-4 to mb-6 */}
          <p className="text-base md:text-lg font-medium text-orange-200 mb-2 font-sans">We&apos;d love to hear from you! Reach out for property inquiries, partnership, or support.</p>
        </div>
      </div>
      {/* Middle White Section */}
      <div className="bg-white w-full py-12 px-2">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Map on the left */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-orange-400 animate-fadeIn">
              <iframe
                title="Scotchstone Holdings Office Map"
                src="https://www.google.com/maps?q=FAI+Mall,+opposite+Lakowe+Golf,+off+Lekki/Epe+Expressway,+Ibeju-Lekki,+Lagos+State&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-2 text-center">
              <span className="inline-block bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md select-none font-sans">
                Our Office Location
              </span>
            </div>
          </div>
          {/* Form and Contact Info on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <form className="bg-zinc-50 rounded-2xl shadow-xl p-8 flex flex-col gap-5 border border-orange-200 animate-fadeIn">
              <h3 className="text-2xl font-extrabold text-orange-600 mb-4 text-center tracking-tight font-serif">Send Us a Message</h3>
              <div className="flex flex-col gap-4">
                <input type="text" name="name" placeholder="Full Name" required className="border border-orange-200 rounded px-4 py-3 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-lg font-sans" />
                <input type="email" name="email" placeholder="Email Address" required className="border border-orange-200 rounded px-4 py-3 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-lg font-sans" />
                <input type="tel" name="phone" placeholder="Phone Number" required className="border border-orange-200 rounded px-4 py-3 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-lg font-sans" />
                <textarea name="message" placeholder="Your Message" rows={4} required className="border border-orange-200 rounded px-4 py-3 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-lg font-sans"></textarea>
              </div>
              <button type="submit" className="bg-orange-600 text-white font-bold py-3 rounded-full text-lg hover:bg-orange-700 transition mt-2 shadow-lg font-sans">Send Message</button>
            </form>
            {/* Contact Info below form */}
            <div className="flex flex-col gap-6 bg-zinc-100 rounded-2xl shadow-xl border border-orange-200 p-6 animate-fadeIn mt-8 text-sm">
              <div className="flex items-center gap-3">
                <span className="bg-orange-600 text-white rounded-full px-2 py-0.5 text-xs font-bold shrink-0 font-sans min-w-[60px]">Phone</span>
                <div className="flex flex-col gap-0 pl-6">
                  <a href="tel:+2348122132548" className="text-orange-700 hover:underline font-semibold font-mono">+234-812-213-2548</a>
                  <a href="tel:+2347073205724" className="text-orange-700 hover:underline font-semibold font-mono">+234-707-320-5724</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-orange-600 text-white rounded-full px-2 py-0.5 text-xs font-bold font-sans min-w-[60px]">Email</span>
                <a href="mailto:info@scotchstoneholdings.com" className="text-orange-700 hover:underline font-semibold font-mono pl-6">info@scotchstoneholdings.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-orange-600 text-white rounded-full px-2 py-0.5 text-xs font-bold font-sans min-w-[60px]">Website</span>
                <a href="https://www.scotchstoneholdings.com" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-semibold font-mono pl-6">www.scotchstoneholdings.com</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-orange-600 text-white rounded-full px-2 py-0.5 text-xs font-bold shrink-0 font-sans min-w-[60px]">Address</span>
                <span className="text-zinc-800 font-medium font-serif pl-6">FAI Mall (Third Floor), opposite Lakowe Golf, off Lekki/Epe Expressway, Ibeju-Lekki, Lagos State.</span>
              </div>
              <div className="flex justify-center mt-2">
                <a href="https://wa.me/2348122132548" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg transition font-sans text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.212 8.212 0 0 1 3.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25Zm-5.25-2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 .75-.75h2.25Z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
