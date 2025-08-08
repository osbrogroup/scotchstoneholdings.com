"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const SocialMediaLinks = () => (
  <div className="flex gap-3 mt-3">
    <a
      href="https://facebook.com/share/16ajPNVa55"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-blue-600 transition"
    >
      <svg className="w-4 h-4 text-blue-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
      </svg>
    </a>
    <a
      href="https://instagram.com/scotchstoneholdings"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-pink-500 transition"
    >
      <svg className="w-4 h-4 text-pink-500 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.388 3.678 1.369c-.98.98-1.237 2.092-1.296 3.373C2.013 5.668 2 6.077 2 12s.013 6.332.072 7.611c.059 1.281.316 2.393 1.296 3.373.98.98 2.092 1.237 3.373 1.296C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.316 3.373-1.296.98-.98 1.237-2.092 1.296-3.373.059-1.279.072-1.688.072-7.611s-.013-6.332-.072-7.611c-.059-1.281-.316-2.393-1.296-3.373-.98-.98-2.092-1.237-3.373-1.296C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
      </svg>
    </a>
    <a
      href="https://wa.link/4mmjgi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-green-500 transition"
    >
      <svg className="w-4 h-4 text-green-500 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.24-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
      </svg>
    </a>
    <a
      href="https://www.tiktok.com/@scotchstoneholdings"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-black transition"
    >
      <svg className="w-4 h-4 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h.75V9.5h-.75A5.25 5.25 0 1 0 15.75 14.75V2h-3zm6.25 0v2.25a3.75 3.75 0 0 0 3.75 3.75h1.25V2h-5z"/>
      </svg>
    </a>
    <a
      href="https://www.youtube.com/@ScotchstoneHoldings"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-red-600 transition"
    >
      <svg className="w-4 h-4 text-red-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.454 3.5 12 3.5 12 3.5s-7.454 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.118 0 12 0 12s0 3.882.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.546 20.5 12 20.5 12 20.5s7.454 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.882 24 12 24 12s0-3.882-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </div>
);

export default function AdminBlogListPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load blog posts.");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setError("Could not load blog posts. Please check your server."));
  }, []);

  if (error) return <div className="text-red-700">{error}</div>;

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="flex items-center mb-8">
        {/* Admin Home button on the far left */}
        <Link
          href="/admin"
          className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-900 transition mr-4"
        >
          Admin Home
        </Link>
        {/* Centered header */}
        <div className="flex-1 flex justify-center">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Manage Blog Posts</h2>
        </div>
        {/* + New Post button on the far right */}
        <Link
          href="/admin/blog/new"
          className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition ml-4"
        >
          + New Post
        </Link>
      </div>
      {posts.length === 0 ? (
        <div className="text-center text-gray-400">No blog posts found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg border-2 border-blue-900 p-6 flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {post.authorAvatar && (
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full border"
                    onError={e => (e.currentTarget.src = "/avatars/default.jpg")}
                  />
                )}
                <span className="text-sm text-gray-700 font-semibold">{post.author}</span>
              </div>
              <p className="text-gray-700 mb-2">{post.excerpt || post.content?.slice(0, 100) + "..."}</p>
              <div className="flex flex-wrap gap-2 mb-2 justify-center">
                {(
                  Array.isArray(post.tags)
                    ? post.tags
                    : typeof post.tags === "string"
                      ? post.tags.split(",").map((tag: string) => tag.trim()).filter(Boolean)
                      : post.tags == null
                        ? []
                        : String(post.tags).split(",").map((tag: string) => tag.trim()).filter(Boolean)
                ).map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-sky-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <SocialMediaLinks />
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  className="bg-blue-900 text-white px-3 py-1 rounded font-bold hover:bg-blue-800 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={async () => {
                    if (confirm("Are you sure you want to delete this post?")) {
                      const res = await fetch(`/api/blog/${post.id}`, { method: "DELETE" });
                      if (res.ok) {
                        setPosts(posts.filter((p: any) => p.id !== post.id));
                      } else {
                        alert("Failed to delete post.");
                      }
                    }
                  }}
                  className="bg-red-600 text-white px-3 py-1 rounded font-bold hover:bg-red-800 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

