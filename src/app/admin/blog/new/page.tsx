"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";

export default function AdminBlogNewPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    author: "",
    image: "",
    authorAvatar: "",
    tags: "",
    content: "",
    date: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Upload handler for images/avatars
  async function handleUpload(type: "image" | "avatar" | "video", file: File) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`/api/upload/${type}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.url) return data.url;
    throw new Error(data.error || "Upload failed");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      let imageUrl = form.image;
      let avatarUrl = form.authorAvatar;
      let video = videoUrl;
      if (imageFile) imageUrl = await handleUpload("image", imageFile);
      if (avatarFile) avatarUrl = await handleUpload("avatar", avatarFile);
      if (videoFile) video = await handleUpload("video", videoFile);

      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          image: imageUrl,
          authorAvatar: avatarUrl,
          video,
          tags: form.tags.split(",").map((t) => t.trim()),
        }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Failed to save blog post");
      router.push("/admin/blog");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-2xl border border-blue-200 p-8">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          Create New Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Title</label>
            <input
              className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="Title"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Summary</label>
            <input
              className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
              value={form.summary}
              onChange={(e) =>
                setForm((f) => ({ ...f, summary: e.target.value }))
              }
              placeholder="Summary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Author</label>
            <input
              className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
              value={form.author}
              onChange={(e) =>
                setForm((f) => ({ ...f, author: e.target.value }))
              }
              placeholder="Author"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Blog Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="border border-blue-300 p-2 rounded text-black placeholder-gray-800"
              placeholder="Blog Image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Author Avatar</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
              className="border border-blue-300 p-2 rounded text-black placeholder-gray-800"
              placeholder="Author Avatar"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">
              Tags (comma separated)
            </label>
            <input
              className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
              value={form.tags}
              onChange={(e) =>
                setForm((f) => ({ ...f, tags: e.target.value }))
              }
              placeholder="Tags (comma separated)"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Content</label>
            <MDEditor
              value={form.content}
              onChange={(val) =>
                setForm((f) => ({ ...f, content: val || "" }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">Date</label>
            <input
              className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              placeholder="Date (YYYY-MM-DD)"
              type="date"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-700">
              Blog Video (Upload or URL)
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
              className="border border-blue-300 p-2 rounded text-black placeholder-gray-800"
              placeholder="Upload Video"
            />
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="border border-blue-300 p-2 rounded text-black placeholder-gray-800 mt-2"
              placeholder="Or paste video URL"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded font-bold shadow hover:bg-gray-400 transition"
              onClick={() => router.push("/admin/blog")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded font-bold shadow hover:bg-blue-800 transition"
              disabled={saving}
            >
              {saving ? "Saving..." : "Create Blog Post"}
            </button>
          </div>
          {error && (
            <div className="text-red-600 text-center">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}