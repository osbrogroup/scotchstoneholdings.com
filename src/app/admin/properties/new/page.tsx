"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewProperty() {
  const router = useRouter();
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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setProperty({ ...property, [e.target.name]: e.target.value });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let imageName = "";
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);

      // Upload image to /api/upload
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      imageName = uploadData.filename;
    }

    const res = await fetch("/api/property", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...property,
        image: imageName,
      }),
    });

    if (res.ok) {
      setNotification("Property created!");
      setTimeout(() => {
        setNotification(null);
        router.push("/admin/properties");
      }, 1500);
    } else {
      setNotification("Failed to create property.");
      setTimeout(() => setNotification(null), 2500);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Notification Overlay */}
      {notification && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-blue-900 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-bold animate-fade-in">
          {notification}
        </div>
      )}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10 border border-blue-900">
        <h2 className="text-3xl font-extrabold mb-8 text-blue-900 text-center drop-shadow">Add New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="title"
            value={property.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-4 py-3 rounded text-lg text-black placeholder:text-blue-900 bg-white border border-blue-900"
            required
          />
          <input
            name="location"
            value={property.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-3 rounded text-lg text-black placeholder:text-blue-900 bg-white border border-blue-900"
            required
          />
          <select
            name="type"
            value={property.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded text-lg text-black bg-white border border-blue-900"
            required
          >
            <option value="">Select Type</option>
            <option value="Land">Land</option>
            <option value="Apartment">Apartment</option>
          </select>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-3 rounded text-lg text-black placeholder:text-blue-900 bg-white border border-blue-900 min-h-[120px] break-words whitespace-pre-line"
          />
          <input
            name="features"
            value={property.features}
            onChange={handleChange}
            placeholder="Features (comma separated)"
            className="w-full px-4 py-3 rounded text-lg text-black placeholder:text-blue-900 bg-white border border-blue-900"
          />
          <input
            name="link"
            value={property.link}
            onChange={handleChange}
            placeholder="Details URL (e.g. /properties/my-property)"
            className="w-full px-4 py-3 rounded text-lg text-black placeholder:text-blue-900 bg-white border border-blue-900"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 rounded text-lg text-black bg-white border border-blue-900"
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded font-extrabold text-lg hover:bg-black transition"
          >
            Create Property
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/properties")}
            className="w-full bg-gray-200 text-blue-900 py-3 rounded font-extrabold text-lg hover:bg-gray-300 transition mt-2"
          >
            Cancel
          </button>
        </form>
        <div className="mt-8 text-center">
          <Link href={property.link} className="text-blue-900 underline">
            View Details
          </Link>
        </div>
      </div>
      {/* Optional: Add fade-in animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}