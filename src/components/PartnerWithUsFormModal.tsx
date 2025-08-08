import React, { useState } from "react";

const PartnerWithUsFormModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-orange-600 text-2xl font-bold hover:text-black transition z-10" onClick={onClose} aria-label="Close">&times;</button>
        {!submitted ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-extrabold text-orange-600 mb-2 text-center">Partner With Us</h3>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="border border-orange-200 rounded px-4 py-2 bg-zinc-50 text-black placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="border border-orange-200 rounded px-4 py-2 bg-zinc-50 text-black placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base" />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number (optional)" className="border border-orange-200 rounded px-4 py-2 bg-zinc-50 text-black placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your interest or partnership idea..." rows={4} required className="border border-orange-200 rounded px-4 py-2 bg-zinc-50 text-black placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base" />
            <button type="submit" className="bg-orange-600 text-white font-bold py-2 rounded-full text-base hover:bg-orange-700 transition mt-2 shadow-lg">Submit</button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <span className="text-3xl text-green-600 mb-4">✓</span>
            <h4 className="text-lg font-bold text-orange-700 mb-2">Thank you!</h4>
            <p className="text-zinc-700 text-center">Your partnership request has been received. We will contact you soon.</p>
            <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-base hover:bg-black hover:text-orange-500 transition" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerWithUsFormModal;
