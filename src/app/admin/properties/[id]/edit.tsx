"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

export default function EditGalleryPage() {
  const router = useRouter();
  const { id } = useParams();
  const [property, setProperty] = useState({
    title: "",
    location: "",
    status: "available",
    description: "",
    features: "",
    image: "",
    type: "", // <-- Add this
  });
  const [featuresInput, setFeaturesInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/properties/${id}`)
      .then(res => res.json())
      .then(data => {
        setProperty({
          ...data,
          features: typeof data.features === "string"
            ? data.features
            : Array.isArray(data.features)
              ? data.features.join(", ")
              : "",
        });
        setFeaturesInput(
          typeof data.features === "string"
            ? data.features
            : Array.isArray(data.features)
              ? data.features.join(", ")
              : ""
        );
      });
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setProperty({ ...property, [e.target.name]: e.target.value });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();

    let imageName = property.image;
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      const imgRes = await fetch("http://localhost:4000/api/upload-image", {
        method: "POST",
        body: formData,
      });
      const imgData = await imgRes.json();
      if (imgData.success) {
        imageName = imgData.filename;
      } else {
        setNotification("Image upload failed.");
        return;
      }
    }

    const propertyToSave = {
      ...property,
      features: featuresInput, // store as string, show as entered
      image: imageName,
    };

    const res = await fetch(`/api/property/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(propertyToSave),
    });
    const data = await res.json();
    if (data.success) {
      setNotification("Property updated!");
      setTimeout(() => {
        setNotification(null);
        router.push("/admin/properties");
      }, 1500);
    } else {
      setNotification("Failed to update property.");
      setTimeout(() => setNotification(null), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <Link
        href="/admin/properties"
        className="inline-block mb-6 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
      >
        ← Back to Properties
      </Link>
      <h2 className="text-3xl font-semibold mb-6 text-black text-center tracking-tight border-b-2 border-blue-900 pb-2">
        Edit Property
      </h2>
      {notification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl p-8 border-2 border-orange-600 shadow-lg text-center">
            <h3 className={`text-xl font-bold mb-2 ${notification === "Property updated!" ? "text-orange-600" : "text-red-600"}`}>
              {notification === "Property updated!" ? "Success!" : "Error"}
            </h3>
            <p className="text-blue-900 font-bold">{notification}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-lg p-8 space-y-6 max-w-xl mx-auto border border-gray-300">
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Title</label>
          <input
            name="title"
            value={property.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black"
            required
            placeholder="Property title"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Location</label>
          <input
            name="location"
            value={property.location}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black"
            required
            placeholder="Location"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Status</label>
          <select
            name="status"
            value={property.status}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black"
          >
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Description</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black"
            rows={6}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Features</label>
          <input
            name="features"
            value={featuresInput}
            onChange={e => {
              setFeaturesInput(e.target.value);
              setProperty({ ...property, features: e.target.value });
            }}
            className="w-full border-2 border-blue-900 px-4 py-2 rounded-lg text-base text-gray-900 font-semibold"
            placeholder="e.g. Swimming Pool, Gym, Parking"
          />
          <div className="text-xs text-gray-500 mt-1">Enter features as you want them to appear.</div>
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black"
          />
          {property.image && (
            <img src={`http://localhost:4000/uploads/images/${property.image}`} alt="" className="mt-2 max-h-32 rounded shadow" />
          )}
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Type</label>
          <select
            name="type"
            value={property.type || ""}
            onChange={handleChange}
            className="w-full border-2 border-blue-900 px-4 py-2 rounded-lg text-base text-gray-900 font-semibold"
            required
          >
            <option value="">Select type</option>
            <option value="Land">Land</option>
            <option value="Short-let">Short-let</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-700 transition"
        >
          Update Property
        </button>
      </form>
    </div>
  );
}