"use client";
import React, { useState, useRef } from "react";

export interface BookInspectionFormProps {
  onClose?: () => void;
}

const BookInspectionForm: React.FC<BookInspectionFormProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Ref for the modal content
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose && onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      // Replace with your inspection booking API or email logic
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      });
    } catch {
      // Handle error here if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white/70 backdrop-blur-lg rounded-xl shadow-2xl p-6 max-w-md w-full relative py-3"
        onMouseDown={e => e.stopPropagation()}
      >
        {onClose && (
          <button
            className="absolute top-3 right-3 text-neutral-500 hover:text-black text-2xl"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>
        )}
        <h2 className="text-2xl mb-4 text-neutral-800 text-center tracking-tight">Book Inspection</h2>
        {success ? (
          <div className="text-green-700 text-center py-8">
            Thank you! Your inspection has been booked.<br />
            We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <label className="block mb-1 text-neutral-700" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-1.5 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-neutral-700" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-1.5 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-neutral-700" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="e.g. 08012345678"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-1.5 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-neutral-700" htmlFor="date">Inspection Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-1.5 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block mb-1 text-neutral-700" htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Additional message"
                value={form.message}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-1.5 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white px-6 py-2 rounded-md text-base shadow hover:bg-orange-700 transition disabled:opacity-60"
            >
              {loading ? "Booking..." : "Book Inspection"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookInspectionForm;