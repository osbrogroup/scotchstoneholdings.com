"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { isAdminAuthenticated } from "../../../../utils/auth";
import Link from "next/link";
// import MDEditor from "@uiw/react-md-editor"; // Uncomment if you want to use MDEditor

export default function GalleryForm() {
  const router = useRouter();
  const params = useParams();
  const isEdit = !!params?.id;
  const [item, setItem] = useState({
    title: "",
    description: "",
    image: "",
    video: "",
  });
  const [preview, setPreview] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  // Load existing data for edit
  useEffect(() => {
    if (!isAdminAuthenticated()) {
      window.location.href = "/admin/login";
    }
    if (isEdit) {
      fetch(`http://localhost:4000/api/gallery/${params.id}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.title) setItem(data);
        });
    }
  }, [isEdit, params]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setItem({ ...item, description: e.target.value });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setItem({ ...item, image: file.name });
    }
  }

  function handleVideoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setItem({ ...item, video: file.name });
    }
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const endpoint = isEdit
      ? `http://localhost:4000/api/gallery/${params.id}`
      : `http://localhost:4000/api/gallery/${item.title.toLowerCase().replace(/\s+/g, "-")}`;
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert(isEdit ? "Gallery item updated!" : "Gallery item added!");
          router.push("/admin/gallery");
        } else {
          alert("Failed to save gallery item.");
        }
      });
  }

  if (isEdit && !item.title) return <div className="p-8 text-gray-700 font-semibold">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
      <Link
        href="/admin"
        className="inline-block mb-6 bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
      >
        ← Return to Admin Dashboard
      </Link>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center tracking-tight drop-shadow">
        {isEdit ? "Edit Gallery Item" : "Add New Gallery Item"}
      </h2>
      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-lg p-8 space-y-6 max-w-xl mx-auto border border-gray-300">
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Title</label>
          <input
            name="title"
            value={item.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500"
            required
            placeholder="Gallery title"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 text-base font-semibold">Description</label>
          {/* Use textarea or swap for <MDEditor ... /> if you want markdown */}
          <textarea
            name="description"
            value={item.description}
            onChange={handleDescriptionChange}
            className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg text-base text-black focus:outline-none focus:border-blue-500 bg-gray-50 placeholder-gray-500 min-h-[120px]"
            placeholder="Gallery description"
          />
          {/* <MDEditor
            value={item.description}
            onChange={value => setItem({ ...item, description: value || "" })}
          /> */}
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
            {isEdit ? "Save Changes" : "Save Gallery Item"}
          </button>
        </div>
      </form>
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full border border-gray-300">
            <h3 className="text-xl mb-2 text-gray-900 font-semibold">{item.title}</h3>
            <div className="mb-2 text-gray-900 font-semibold">
              {/* Preview description */}
              <div>{item.description}</div>
              {/* Or use <MDEditor.Markdown source={item.description} /> if using MDEditor */}
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