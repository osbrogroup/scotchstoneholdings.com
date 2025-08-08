"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function EditGalleryPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const router = useRouter();
  const [gallery, setGallery] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/gallery/${id}`)
      .then(res => res.json())
      .then(data => {
        setGallery({
          title: data.title || "",
          description: data.description || "",
          image: data.image || "",
        });
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [id]);

  const handleSave = async () => {
    const updated = {
      ...gallery,
      description: gallery.description, // ✅ use the value from your state
    };
    const res = await fetch(`/api/gallery/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      router.push("/admin/gallery");
    } else {
      alert("Failed to update gallery item.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Gallery Item</h1>
      <input
        className="w-full border p-2 mb-4"
        placeholder="Title"
        value={gallery.title}
        onChange={e => setGallery({ ...gallery, title: e.target.value })}
      />
      <input
        className="w-full border p-2 my-4"
        placeholder="Image URL"
        value={gallery.image}
        onChange={e => setGallery({ ...gallery, image: e.target.value })}
      />
      <MDEditor
        value={gallery.description}
        onChange={value => setGallery({ ...gallery, description: value || "" })}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}