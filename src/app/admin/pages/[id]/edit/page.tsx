"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { isAdminAuthenticated } from "../../../../../utils/auth";

type Opportunity = {
  id: string;
  title: string;
  image: string;
  video?: string; // <-- Add this line
  // add other fields as needed
};

export default function EditGalleryPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const router = useRouter();
  const [shortlet, setShortlet] = useState<Opportunity>({
    id: "",
    title: "",
    image: "",
  });
  const [preview, setPreview] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      window.location.href = "/admin/login";
    }
    fetch(`http://localhost:4000/api/shortlet/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.title) setShortlet(data);
      });
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setShortlet({ ...shortlet, [e.target.name]: e.target.value });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setShortlet({ ...shortlet, image: file.name });
    }
  }

  function handleVideoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setShortlet({ ...shortlet, video: file.name });
    }
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    fetch(`http://localhost:4000/api/shortlet/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shortlet),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Short-let updated!");
          router.push("/admin/shortlet");
        } else {
          alert("Failed to update short-let.");
        }
      });
  }

  if (!shortlet.title) return <div className="p-8 text-gray-700 font-semibold">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center tracking-tight drop-shadow">
        Edit Short-let
      </h2>
      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-lg p-8 space-y-6 max-w-xl mx-auto border border-gray-300">
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Title</label>
          <input
            name="title"
            value={shortlet.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            required
            placeholder="Short-let title"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Location</label>
          <input
            name="location"
            value={shortlet.location}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            required
            placeholder="Location"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Price</label>
          <input
            name="price"
            value={shortlet.price}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            required
            placeholder="Price"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Status</label>
          <select
            name="status"
            value={shortlet.status}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50"
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Description</label>
          <textarea
            name="description"
            value={shortlet.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500 min-h-[120px]"
            placeholder="Short-let description"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg bg-gray-50 text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg bg-gray-50 text-black"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPreview(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition text-base font-semibold"
          >
            Preview
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition text-base font-semibold"
          >
            Save Changes
          </button>
        </div>
      </form>
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full border border-gray-300">
            <h3 className="text-xl mb-2 text-gray-900 font-semibold">{shortlet.title}</h3>
            <p className="text-gray-800 font-semibold">{shortlet.location}</p>
            <p className="text-gray-800 font-semibold">{shortlet.price}</p>
            <p className="text-gray-800 font-semibold">{shortlet.status}</p>
            <div className="mb-2 text-gray-900 font-semibold">
              <textarea
                value={shortlet.description}
                readOnly
                className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black bg-gray-50 placeholder-gray-500 min-h-[120px]"
              />
            </div>
            {imageFile && (
              <img src={URL.createObjectURL(imageFile)} alt="" className="mt-4 max-h-48 rounded shadow" />
            )}
            {videoFile && (
              <video controls className="mt-4 max-h-48 rounded shadow">
                <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
                Your browser does not support the video tag.
              </video>
            )}
            <button
              onClick={() => setPreview(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-base font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}