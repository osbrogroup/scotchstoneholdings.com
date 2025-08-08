"use client";

import React, { useState } from "react";

const ApartmentBookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    checkin: "",
    checkout: "",
    roomType: "Studio",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">Thank you!</h3>
        <p className="text-green-800">Your booking request has been received. We will contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black rounded-xl p-4 max-w-xl mx-auto">
      <h3 className="text-2xl font-extrabold text-orange-500 mb-4 text-center tracking-tight">Book a Short-let Apartment</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-white text-sm font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-white text-sm font-medium">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-white text-sm font-medium">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="roomType" className="text-white text-sm font-medium">Apartment Type</label>
          <select
            id="roomType"
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white focus:border-orange-500 focus:outline-none text-base"
          >
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedroom">2 Bedroom</option>
            <option value="3 Bedroom">3 Bedroom</option>
            <option value="4 Bedroom">4 Bedroom</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="checkin" className="text-white text-sm font-medium">Check-in Date</label>
          <input
            id="checkin"
            type="date"
            name="checkin"
            value={form.checkin}
            onChange={handleChange}
            required
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white focus:border-orange-500 focus:outline-none text-base"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="checkout" className="text-white text-sm font-medium">Check-out Date</label>
          <input
            id="checkout"
            type="date"
            name="checkout"
            value={form.checkout}
            onChange={handleChange}
            required
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white focus:border-orange-500 focus:outline-none text-base"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="guests" className="text-white text-sm font-medium">Number of Guests</label>
          <input
            id="guests"
            type="number"
            name="guests"
            min={1}
            max={10}
            value={form.guests}
            onChange={handleChange}
            required
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white focus:border-orange-500 focus:outline-none text-base"
            placeholder="No. of Guests"
          />
        </div>
        <div className="flex flex-col gap-1 md:col-span-2">
          <label htmlFor="message" className="text-white text-sm font-medium">Additional Message (optional)</label>
          <textarea
            id="message"
            name="message"
            placeholder="Let us know any special requests or questions..."
            value={form.message}
            onChange={handleChange}
            className="border border-orange-200 rounded px-2 py-2 bg-zinc-900 text-white placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none text-base"
            rows={2}
          />
        </div>
      </div>
      <button type="submit" className="bg-orange-600 text-white font-bold py-2 rounded-full text-base hover:bg-orange-700 transition mt-5 w-full">Book Short-let Now</button>
    </form>
  );
};

export default ApartmentBookingForm;
