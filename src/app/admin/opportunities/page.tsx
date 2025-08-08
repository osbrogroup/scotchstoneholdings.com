"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
// Correct dynamic import for Markdown preview
const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

// Correct dynamic import for MDEditor
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

type Opportunity = {
  id: string;
  title: string;
  image: string;
  description: string; // <-- Add this line
  link?: string;       // <-- Add other fields as needed
};

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", content: "", link: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch all opportunities
  useEffect(() => {
    fetch("/api/opportunities")
      .then((res) => res.json())
      .then((data) => setOpportunities(data))
      .catch(() => setError("Could not load opportunities."));
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleContentChange(value: string | undefined) {
    setForm({ ...form, content: value || "" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const url = editingId ? `/api/opportunities/${editingId}` : "/api/opportunities";
    const method = editingId ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok && data.ok) {
      setNotification(editingId ? "Opportunity updated!" : "Opportunity created!");
      setForm({ title: "", content: "", link: "" }); // <-- Reset form
      setEditingId(null); // <-- Reset editing state
      fetch("/api/opportunities") // <-- Fetch latest data
        .then(res => res.json())
        .then(setOpportunities);
    } else {
      setNotification("Failed to save opportunity.");
    }
    setTimeout(() => setNotification(null), 1500);
  }

  function handleEdit(opp: any) {
    setForm({ title: opp.title, content: opp.content, link: opp.link || "" });
    setEditingId(opp.id);
  }

  function handleCancel() {
    setForm({ title: "", content: "", link: "" });
    setEditingId(null);
  }

  async function handleDelete(id: string) {
    setLoading(true);
    await fetch(`/api/opportunities/${id}`, { method: "DELETE" });
    setOpportunities(opportunities.filter((o: any) => o.id !== id));
    setLoading(false);
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 text-center drop-shadow">
        Manage Opportunities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {opportunities.map((opp: any) => (
          <div
            key={opp.id}
            className="bg-white rounded-2xl shadow-xl border border-orange-200 p-8 flex flex-col gap-4 hover:shadow-2xl transition min-h-[340px]"
            style={{ minHeight: 340 }}
          >
            <h2 className="text-2xl font-bold text-orange-500 mb-2 font-serif">{opp.title}</h2>
            <div className="text-zinc-700 text-base mb-2">
              <MarkdownPreview source={opp.content} />
            </div>
            {opp.link && (
              <Link
                href={opp.link}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
              >
                View Details
              </Link>
            )}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(opp)}
                className="bg-blue-900 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-black transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(opp.id)}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-red-200 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 mb-8 admin-opportunities">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-4 py-2 rounded text-lg border border-blue-900"
          required
          style={{ color: "black", fontWeight: "bold" }} // <-- updated to black
        />
        <input
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="URL Link"
          className="w-full px-4 py-2 rounded text-lg border border-blue-900"
          style={{ color: "black" }} // <-- ensure link input is black too
        />
        <MDEditor
          value={form.content}
          onChange={handleContentChange}
          height={200}
        />
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-900 text-white py-3 rounded font-extrabold text-lg hover:bg-black transition"
          >
            {editingId ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-200 text-blue-900 py-3 rounded font-extrabold text-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
      {notification && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-blue-900 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-bold animate-fade-in">
          {notification}
        </div>
      )}
      <div className="min-h-screen bg-white p-8 font-sans">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">Investment Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp) => (
            <div key={opp.id} className="bg-white rounded-xl shadow-lg border-2 border-blue-900 p-6 flex flex-col items-center">
              <img
                src={opp.image}
                alt={opp.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border"
                onError={e => (e.currentTarget.src = "/images/default-opportunity.jpg")}
              />
              <h2 className="text-xl font-bold text-blue-900 mb-2 text-center">{opp.title}</h2>
              <p className="text-gray-700 mb-4 text-center">{opp.description}</p>
              <Link
                href={opp.link || "#"}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .admin-opportunities input::placeholder,
        .admin-opportunities textarea::placeholder {
          color: #ff8800 !important;
          font-weight: bold;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
