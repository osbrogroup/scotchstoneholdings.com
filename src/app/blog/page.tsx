"use client";

import Seo from "@/components/Seo";
import MainLayout from "../../components/MainLayout";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Correct dynamic import for Markdown preview
const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then(mod => mod.default),
  { ssr: false }
);

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [expandedPosts, setExpandedPosts] = useState<{ [id: string]: boolean }>({});
  const [topBlogId, setTopBlogId] = useState<string | number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [contactStatus, setContactStatus] = useState<string | null>(null);

  // Robust: loading and error state
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from API
  useEffect(() => {
    setLoading(true);
    fetch("/api/blog")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load blog posts.");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load blog posts. Please check your server.");
        setLoading(false);
      });
  }, []);

  // Hide newsletter popup after 2.5s
  useEffect(() => {
    if (newsletterStatus) {
      const timer = setTimeout(() => setNewsletterStatus(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [newsletterStatus]);

  // Hide contact popup after 2.5s
  useEffect(() => {
    if (contactStatus) {
      const timer = setTimeout(() => setContactStatus(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [contactStatus]);

  // Filtered posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      (post.excerpt?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
      (post.content?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchesTag = tagFilter ? post.tags?.includes(tagFilter) : true;
    return matchesSearch && matchesTag;
  });

  // Top blog logic
  const topBlog =
    filteredPosts.find((p) => p.id === topBlogId) || filteredPosts[0];
  const restPosts = filteredPosts.filter((p) => p.id !== topBlog?.id);

  // Read More/Less toggle
  const toggleExpand = (id: string) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Set any post as top blog
  const handleSetTopBlog = (post: any) => {
    setTopBlogId(post.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Newsletter submit handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      setFormStatus("Newsletter subscription sent!");
      setNewsletterEmail("");
      setNewsletterStatus("Subscription successful! Check your email for confirmation.");
    } catch {
      setFormStatus("Failed to send newsletter subscription.");
      setNewsletterStatus("Subscription failed. Please try again.");
    }
  };

  // Contact form submit handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      setFormStatus("Message sent!");
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setContactStatus("Message sent successfully!");
    } catch {
      setFormStatus("Failed to send message.");
      setContactStatus("Message sending failed. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!posts.length) return <div>No blog posts found.</div>;

  return (
    <>
      <Seo
        title="Scotchstone Real Estate Blog"
        description="Latest insights, guides, and news on Lagos real estate, short-lets, and investment opportunities."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Scotchstone Real Estate Blog",
          description:
            "Latest insights, guides, and news on Lagos real estate, short-lets, and investment opportunities.",
          url: "https://www.scotchstoneholdings.com/blog",
          author: {
            "@type": "Person",
            name: "contact_us@scotchstoneholdings.com",
            telephone: "+234-812-213-2548, +234-707-320-5724",
            url: "https://www.scotchstoneholdings.com",
          },
        }}
      />
      <MainLayout>
        {/* Top blue bar above everything */}
        <div className="w-full h-12 bg-[#001a3a]"></div>
        {/* Banner: solid blue, flush to the top, right after navigation */}
        <div className="w-full bg-[#001a3a] shadow-lg flex flex-col md:flex-row items-center justify-between p-8">
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-serif tracking-tight text-center mt-2">
              Scotchstone Blog
            </h1>
            <p className="text-lg text-blue-100 mb-4 font-light text-center md:text-left">
              Insights, news, and stories from Lagos' leading real estate experts.
            </p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {Array.from(new Set(posts.flatMap((p) => p.tags))).map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                    tagFilter === tag
                      ? "bg-sky-400 text-white border-sky-600"
                      : "bg-sky-200 text-blue-900 border-sky-400"
                  } transition`}
                  onClick={() => setTagFilter(tag)}
                >
                  {tag}
                </button>
              ))}
              <button
                className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                  !tagFilter
                    ? "bg-sky-400 text-white border-sky-600"
                    : "bg-sky-200 text-blue-900 border-sky-400"
                } transition`}
                onClick={() => setTagFilter(null)}
              >
                All
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-blue-900 placeholder-blue-400 font-semibold"
            />
          </div>
        </div>
        {/* Main body below the banner */}
        <div className="w-screen min-h-screen bg-white flex flex-col items-center pb-10 font-sans">
          <div className="w-full max-w-[1800px] flex flex-col gap-0">
            {/* White background for all content below the banner */}
            <div className="w-full bg-white">
              {/* Loading/Error States */}
              {loading && (
                <div className="w-full text-center text-white text-xl py-12">Loading blog posts...</div>
              )}
              {error && (
                <div className="w-full text-center text-red-600 text-xl py-12">{error}</div>
              )}

              {!loading && !error && (
                <div className="w-full flex flex-row gap-0 items-stretch">
                  {/* Main Blog Card (top) */}
                  <div className="w-full lg:w-[66.6667%] flex flex-col relative z-10 bg-white">
                    <div className="w-full bg-white rounded-none border border-blue-300 flex flex-col overflow-visible h-full">
                      {/* Main current blog post */}
                      {topBlog && (
                        <article
                          id={`blog-${topBlog.id}`}
                          className="w-full flex flex-col mb-8 bg-white rounded-2xl border border-blue-100 hover:border-blue-200 transition"
                          style={{ minHeight: "520px" }}
                        >
                          {/* Image at the top */}
                          {topBlog.image && (
                            <div className="w-full flex items-center justify-center bg-white p-0 mt-6">
                              <div className="bg-white rounded-2xl flex items-center justify-center h-64 w-full max-w-2xl mx-auto overflow-hidden border border-blue-200">
                                <img
                                  src={topBlog.image}
                                  alt={topBlog.title}
                                  className="object-cover h-full w-full rounded-2xl transition-transform duration-300 hover:scale-105"
                                  style={{ background: "#e0e7ff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
                                  onError={(e) =>
                                    (e.currentTarget.src = "/images/blog/default.jpg")
                                  }
                                />
                              </div>
                            </div>
                          )}
                          <div className="flex-1 flex flex-col justify-between p-4 md:p-8 gap-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">{topBlog.title}</h2>
                            {/* Author Section */}
                            <div className="flex flex-col mb-2 items-center">
                              <span className="text-xs text-gray-500 font-semibold mb-1">Author</span>
                              <div className="flex items-center gap-2">
                                {topBlog.authorAvatar && (
                                  <img
                                    src={topBlog.authorAvatar}
                                    alt={topBlog.author}
                                    className="w-8 h-8 rounded-full border"
                                    onError={(e) =>
                                      (e.currentTarget.src = "/avatars/default.jpg")
                                    }
                                  />
                                )}
                                <span className="text-sm text-gray-700 font-semibold">
                                  {topBlog.author}
                                </span>
                                <span className="text-xs text-gray-400 ml-2">
                                  {topBlog.date}
                                </span>
                              </div>
                            </div>
                            {/* Content */}
                            <div className="mb-2 text-gray-800 bg-white rounded p-2">
                              <MarkdownPreview source={topBlog.content} />
                            </div>
                            <div className="flex flex-wrap gap-2 mb-2 justify-center">
                              {(Array.isArray(topBlog.tags)
                                ? topBlog.tags
                                : typeof topBlog.tags === "string"
                                  ? topBlog.tags.split(",").map(tag => tag.trim()).filter(Boolean)
                                  : []
                              ).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="bg-sky-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {/* Social Media Share Links */}
                            <div className="flex flex-wrap gap-4 items-center mt-6 justify-center">
                              <span className="font-semibold text-gray-700 text-base">Share Link:</span>
                              {/* Facebook */}
                              <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 flex items-center gap-1"
                              >
                                <i className="fab fa-facebook fa-lg"></i>
                              </a>
                              {/* Twitter */}
                              <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(topBlog.title)}&url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                              >
                                <i className="fab fa-twitter fa-lg"></i>
                              </a>
                              {/* WhatsApp */}
                              <a
                                href={`https://wa.me/?text=${encodeURIComponent(topBlog.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 flex items-center gap-1"
                              >
                                <i className="fab fa-whatsapp fa-lg"></i>
                              </a>
                            </div>
                          </div>
                        </article>
                      )}

                      {/* Rest of the posts as lined cards */}
                      <div className="flex flex-col gap-8">
                        {restPosts.map((post, idx) => (
                          <div key={post.id} className="w-full">
                            <article
                              id={`blog-${post.id}`}
                              className="w-full flex flex-col bg-white rounded-2xl border border-blue-100 hover:border-blue-200 transition"
                              style={{ minHeight: "320px", cursor: "pointer" }}
                              onClick={() => handleSetTopBlog(post)}
                            >
                              <div className="flex flex-col md:flex-row">
                                {post.image && (
                                  <div className="md:w-1/3 flex items-center justify-center p-4 mt-6">
                                    <div className="w-full h-40 rounded-xl overflow-hidden border border-blue-200 flex items-center justify-center">
                                      <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover h-full w-full rounded-xl transition-transform duration-300 hover:scale-105"
                                        style={{ background: "#e0e7ff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
                                        onError={(e) =>
                                          (e.currentTarget.src = "/images/blog/default.jpg")
                                        }
                                      />
                                    </div>
                                  </div>
                                )}
                                <div className="flex-1 flex flex-col justify-between p-4 gap-4">
                                  <h3 className="text-xl font-bold text-blue-900 mb-1">{post.title}</h3>
                                  <div className="text-xs text-gray-500 mb-2">{post.date} &middot; {post.author}</div>
                                  <div className="text-gray-700 text-sm mb-2">
                                    {(post.excerpt || post.content?.slice(0, 120)) + "..."}
                                  </div>
                                  <button
                                    className="inline-block mt-1 text-white bg-black px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-gray-800 transition w-max"
                                    onClick={e => {
                                      e.stopPropagation();
                                      handleSetTopBlog(post);
                                    }}
                                  >
                                    Read More
                                  </button>
                                </div>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Right Sidebar Cards (Recent Posts, 33.3333%) */}
                  <div className="hidden lg:flex flex-col w-[33.3333%] h-full relative z-20 bg-white">
                    {/* Recent Posts Card */}
                    <div className="p-6 border-b border-blue-100 flex flex-col items-center justify-center">
                      <div className="bg-white rounded-xl p-4 w-full max-w-xs mx-auto">
                        <h3 className="text-blue-900 font-bold text-lg mb-3 text-center">Recent Posts</h3>
                        <ul className="space-y-2 overflow-y-auto max-h-[70vh]">
                          {posts.slice(0, 7).map((post) => (
                            <li key={post.id}>
                              <button
                                type="button"
                                onClick={() => setTopBlogId(post.id)}
                                className={`flex items-center gap-2 w-full text-left px-2 py-2 rounded-lg transition 
                                  ${topBlogId === post.id ? "bg-blue-100 font-bold" : "hover:bg-blue-50"}
                                  text-blue-700`}
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                              >
                                {post.image && (
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-8 h-8 object-cover rounded"
                                    style={{ background: "#e0e7ff" }}
                                    onError={(e) =>
                                      (e.currentTarget.src = "/images/blog/default.jpg")
                                    }
                                  />
                                )}
                                <div className="flex flex-col flex-1">
                                  <span className="truncate">{post.title}</span>
                                  <span className="text-xs text-gray-500 truncate">{post.excerpt?.slice(0, 40) || post.content?.slice(0, 40)}</span>
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Promotional Banner */}
                    <div className="relative bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-xl p-4 w-full max-w-xs mx-auto flex flex-col items-center mb-4 border-4 border-transparent" style={{ borderImage: "linear-gradient(90deg, #facc15, #f43f5e) 1" }}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow">
                        <i className="fa fa-bolt text-yellow-400 text-xl"></i>
                      </span>
                      <span className="uppercase text-xs font-bold text-white tracking-widest mb-2 mt-4">Special Offer</span>
                     
                      <p className="text-white text-sm mb-2 text-center">Limited time only. Contact us today to claim your discount or learn about our featured properties.</p>
                      <a
                        href="#contact-us-form"
                        className="mt-2 px-4 py-2 rounded-full bg-white text-pink-600 font-bold shadow hover:bg-pink-50 transition text-sm"
                      >
                        Learn More
                      </a>
                    </div>
                    {/* FAQ Section */}
                    <div className="bg-white rounded-xl p-4 w-full max-w-xs mx-auto flex flex-col items-start mb-4">
                      <h3 className="text-blue-900 font-bold text-lg mb-2">FAQ</h3>
                      <details className="mb-2 w-full group transition-all">
                        <summary className="cursor-pointer font-semibold text-blue-700 flex items-center gap-2">
                          <span>
                            <i className="fa fa-question-circle text-blue-400"></i>
                          </span>
                          How do I buy a property?
                        </summary>
                        <p className="text-gray-700 text-sm mt-1 transition-all group-open:animate-fadeIn">
                          Contact our team, schedule a viewing, and we’ll guide you through the process from start to finish.
                        </p>
                      </details>
                      <details className="mb-2 w-full group transition-all">
                        <summary className="cursor-pointer font-semibold text-blue-700 flex items-center gap-2">
                          <span>
                            <i className="fa fa-question-circle text-blue-400"></i>
                          </span>
                          Can I schedule a tour online?
                        </summary>
                        <p className="text-gray-700 text-sm mt-1 transition-all group-open:animate-fadeIn">
                          Yes! Use our contact form or call us to book a tour at your convenience.
                        </p>
                      </details>
                      <details className="mb-2 w-full group transition-all">
                        <summary className="cursor-pointer font-semibold text-blue-700 flex items-center gap-2">
                          <span>
                            <i className="fa fa-question-circle text-blue-400"></i>
                          </span>
                          Do you offer property management?
                        </summary>
                        <p className="text-gray-700 text-sm mt-1 transition-all group-open:animate-fadeIn">
                          Absolutely. We offer full property management and short-let services for owners and investors.
                        </p>
                      </details>
                    </div>
                    {/* Newsletter Signup Bar */}
                    <div className="bg-white rounded-xl p-4 w-full max-w-xs mx-auto flex flex-col items-center mb-4 relative">
                      <h3 className="text-blue-900 font-bold text-lg mb-2 text-center">Newsletter Signup</h3>
                      <form className="w-full flex flex-col gap-2" onSubmit={handleNewsletterSubmit}>
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={newsletterEmail}
                          onChange={e => setNewsletterEmail(e.target.value)}
                          className="bg-transparent border-0 border-b border-blue-300 focus:border-blue-700 focus:ring-0 px-2 py-2 text-blue-900 placeholder-blue-400 outline-none"
                          required
                        />
                        <button
                          type="submit"
                          className="mt-2 px-4 py-2 rounded-full bg-black text-white font-bold shadow hover:bg-gray-800 transition"
                        >
                          Subscribe
                        </button>
                      </form>
                      {newsletterStatus && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-black rounded px-4 py-2 shadow text-black font-bold z-50">
                          {newsletterStatus}
                        </div>
                      )}
                    </div>
                    {/* Contact Form */}
                    <div
                      id="contact-us-form"
                      className="bg-white rounded-xl p-4 w-full max-w-xs mx-auto flex flex-col items-center min-h-[400px] mt-4 relative"
                    >
                      {contactStatus && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-black rounded px-4 py-2 shadow text-black font-bold z-50">
                          {contactStatus}
                        </div>
                      )}
                      <h3 className="text-blue-900 font-bold text-lg mb-2 text-center">Contact Us</h3>
                      <form className="w-full flex flex-col gap-2.5 flex-1 justify-between" onSubmit={handleContactSubmit}>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                          className="bg-transparent border-0 border-b border-blue-300 focus:border-blue-700 focus:ring-0 px-2 py-2 text-blue-900 placeholder-blue-400 outline-none"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={contactForm.email}
                          onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                          className="bg-transparent border-0 border-b border-blue-300 focus:border-blue-700 focus:ring-0 px-2 py-2 text-blue-900 placeholder-blue-400 outline-none"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Phone Number"
                          value={contactForm.phone}
                          onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="bg-transparent border-0 border-b border-blue-300 focus:border-blue-700 focus:ring-0 px-2 py-2 text-blue-900 placeholder-blue-400 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Subject"
                          value={contactForm.subject}
                          onChange={e => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="bg-transparent border-0 border-b border-blue-300 focus:border-blue-700 focus:ring-0 px-2 py-2 text-blue-900 placeholder-blue-400 outline-none"
                        />
                        <textarea
                          placeholder="Your Message"
                          value={contactForm.message}
                          onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                          className="bg-transparent border-0 border-b border-blue-300 focus:border-blue-700 focus:ring-0 px-2 py-2 text-blue-900 placeholder-blue-400 outline-none resize-none"
                          required
                        />
                        <button
                          type="submit"
                          className="mt-2 px-4 py-2 rounded-full bg-black text-white font-bold shadow hover:bg-gray-800 transition"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                    {/* Empty plain white card below the contact form */}
                    <div
                      className="bg-white rounded-xl w-full max-w-xs mx-auto flex flex-col items-center min-h-[400px] mt-4 border border-blue-100"
                      style={{
                        boxShadow: "none",
                        border: "1px solid #e5e7eb",
                        background: "#fff"
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Social Media Sidebar - moved to right */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener" className="text-blue-700 hover:text-blue-900"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="text-blue-500 hover:text-blue-700"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
          <style global jsx>{`
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
            .wmde-markdown.wmde-markdown-color {
              background: #fff !important;
              color: #002357 !important;
              border-radius: 0.5rem;
              padding: 1.5rem;
              font-size: 1.08rem;
              font-family: 'Segoe UI', 'Arial', sans-serif;
              box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
              line-height: 1.7;
            }
            .wmde-markdown.wmde-markdown-color h1,
            .wmde-markdown.wmde-markdown-color h2,
            .wmde-markdown.wmde-markdown-color h3,
            .wmde-markdown.wmde-markdown-color h4 {
              color: #002357;
              font-weight: bold;
            }
            .wmde-markdown.wmde-markdown-color a {
              color: #1d4ed8;
              text-decoration: underline;
            }
            .wmde-markdown.wmde-markdown-color code {
              background: #f3f4f6;
              color: #002357;
              border-radius: 4px;
              padding: 2px 6px;
              font-size: 0.98em;
            }
            .wmde-markdown.wmde-markdown-color pre {
              background: #f3f4f6;
              color: #002357;
              border-radius: 0.375rem;
              padding: 1rem;
              font-size: 0.95em;
              overflow-x: auto;
            }
            .wmde-markdown.wmde-markdown-color blockquote {
              border-left: 4px solid #2563eb;
              padding-left: 1rem;
              color: #374151;
              font-style: italic;
            }
          `}</style>
        </div>
      </MainLayout>
    </>
  );
}

