"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [form, setForm] = useState({
    title: "",
    summary: "",
    author: "",
    image: "",
    authorAvatar: "",
    tags: "",
    content: "",
    date: "",
    video: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title || "",
          summary: data.summary || "",
          author: data.author || "",
          image: data.image || "",
          authorAvatar: data.authorAvatar || "",
          tags: Array.isArray(data.tags) ? data.tags.join(", ") : data.tags || "",
          content: data.content || "",
          date: data.date || "",
          video: data.video || "",
        });
      })
      .catch(() => setError("Failed to load blog post."));
  }, [id]);

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
      let video = videoUrl || form.video;
      if (imageFile) imageUrl = await handleUpload("image", imageFile);
      if (avatarFile) avatarUrl = await handleUpload("avatar", avatarFile);
      if (videoFile) video = await handleUpload("video", videoFile);

      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          image: imageUrl,
          authorAvatar: avatarUrl,
          tags: form.tags.split(",").map((t) => t.trim()),
          video,
        }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Failed to update blog post");
      router.push("/admin/blog");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-xl border border-blue-200 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-blue-900">Edit Blog Post</h1>
      <input
        className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
        value={form.title}
        onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
        placeholder="Title"
        required
      />
      <input
        className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
        value={form.summary}
        onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
        placeholder="Summary"
      />
      <input
        className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
        value={form.author}
        onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
        placeholder="Author"
      />
      <div>
        <label className="block font-semibold mb-1">Blog Image</label>
        {form.image && (
          <img src={form.image} alt="Blog" className="w-24 h-24 object-cover rounded mb-2 border" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={e => setImageFile(e.target.files?.[0] || null)}
          className="border border-blue-300 p-2 rounded text-black placeholder-gray-800"
          placeholder="Blog Image"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Author Avatar</label>
        {form.authorAvatar ? (
          <img
            src={form.authorAvatar}
            alt={form.author}
            className="w-16 h-16 object-cover rounded-full mb-2 border"
            onError={e => (e.currentTarget.src = "/avatars/default.jpg")}
          />
        ) : (
          <img
            src="/avatars/default.jpg"
            alt="Default Avatar"
            className="w-16 h-16 object-cover rounded-full mb-2 border"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={e => setAvatarFile(e.target.files?.[0] || null)}
          className="border border-blue-300 p-2 rounded text-black placeholder-gray-800"
          placeholder="Author Avatar"
        />
      </div>
      <input
        className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
        value={form.tags}
        onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
        placeholder="Tags (comma separated)"
      />
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-blue-700">Content</label>
        <MDEditor
          value={form.content}
          onChange={val => setForm(f => ({ ...f, content: val || "" }))}
        />
      </div>
      <input
        className="border border-blue-300 p-2 rounded focus:border-blue-700 focus:ring-1 focus:ring-blue-200 text-black placeholder-gray-800"
        value={form.date}
        onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
        placeholder="Date (YYYY-MM-DD)"
        type="date"
      />
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-blue-700">Blog Video (Upload or URL)</label>
        {form.video && (
          <video src={form.video} controls className="w-full max-w-xs mb-2 rounded border" />
        )}
        <input
          type="file"
          accept="video/*"
          onChange={e => setVideoFile(e.target.files?.[0] || null)}
          className="border border-blue-300 p-2 rounded text-black placeholder-gray-800"
          placeholder="Upload Video"
        />
        <input
          type="url"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
          className="border border-blue-300 p-2 rounded text-black placeholder-gray-800 mt-2"
          placeholder="Or paste video URL"
        />
      </div>

      {/* Live Preview */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Preview</h2>
        <div className="bg-gray-50 rounded-xl p-6 border">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{form.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            {form.authorAvatar && (
              <img
                src={form.authorAvatar}
                alt={form.author}
                className="w-8 h-8 rounded-full border"
                onError={e => (e.currentTarget.src = "/avatars/default.jpg")}
              />
            )}
            <span className="text-sm text-gray-700 font-semibold">{form.author}</span>
          </div>
          <p className="text-gray-700 mb-2">{form.summary}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {form.tags.split(",").map((tag) =>
              tag.trim() ? (
                <span key={tag} className="bg-sky-400 text-white px-2 py-1 rounded-full text-xs font-semibold">{tag.trim()}</span>
              ) : null
            )}
          </div>
          {form.image && (
            <img
              src={form.image}
              alt="Blog"
              className="w-32 h-32 object-cover rounded mb-2 border"
              onError={e => (e.currentTarget.src = "/images/blog/default.jpg")}
            />
          )}
          {form.video && (
            <video src={form.video} controls className="w-full max-w-xs mb-2 rounded border" />
          )}
          <div className="mt-4">
            <MDEditor.Markdown source={form.content} />
          </div>
          <div className="text-xs text-gray-500 mt-2">{form.date}</div>
        </div>
      </div>

      <div className="flex gap-4 justify-end mt-6">
        <button
          type="button"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded font-bold shadow hover:bg-gray-400 transition"
          onClick={() => router.push("/admin/blog")}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-blue-800 transition"
          disabled={saving}
        >
          {saving ? "Saving..." : "Update Blog Post"}
        </button>
      </div>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
}