"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { isAdminAuthenticated } from "../../../../utils/auth";

export default function AddPage() {
  const [page, setPage] = useState({
    title: "",
    slug: "",
    content: "",
    image: "",
    video: "",
  });
  const [preview, setPreview] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPage({ ...page, [e.target.name]: e.target.value });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPage({ ...page, image: file.name }); // In production, upload and use the URL
    }
  }

  function handleVideoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setPage({ ...page, video: file.name }); // In production, upload and use the URL
    }
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const id = page.slug || page.title.toLowerCase().replace(/\s+/g, "-");
    // TODO: Upload imageFile and videoFile to server/cloud and get URLs, then save page with those URLs
    fetch("http://localhost:4000/api/pages/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(page),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Page added!");
          router.push("/admin/pages");
        } else {
          alert("Failed to add page.");
        }
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center tracking-tight drop-shadow">
        Add New Page
      </h2>
      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-lg p-8 space-y-6 max-w-xl mx-auto border border-gray-300">
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Title</label>
          <input
            name="title"
            value={page.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            required
            placeholder="Page title"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Slug</label>
          <input
            name="slug"
            value={page.slug}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            placeholder="page-slug"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Content</label>
          <textarea
            name="content"
            value={page.content}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            rows={6}
            placeholder="Page content"
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
            Save Page
          </button>
        </div>
      </form>
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full border border-gray-300">
            <h3 className="text-xl mb-2 text-gray-900 font-semibold">{page.title}</h3>
            <p className="text-gray-800 font-semibold">{page.slug}</p>
            <div className="mb-2 text-gray-900 font-semibold">{page.content}</div>
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