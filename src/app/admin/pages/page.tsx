"use client";
import React, { useEffect, useState } from "react";
import { isAdminAuthenticated } from "../../../utils/auth";

export default function AdminPages() {
  const [pages, setPages] = useState<{ [id: string]: any }>({});

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      window.location.href = "/admin/login";
    }
    fetch("http://localhost:4000/api/pages")
      .then(res => res.json())
      .then(data => setPages(data));
  }, []);

  function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this page?")) {
      fetch(`http://localhost:4000/api/pages/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setPages(prev => {
              const copy = { ...prev };
              delete copy[id];
              return copy;
            });
          } else {
            alert("Failed to delete page.");
          }
        });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center tracking-tight drop-shadow">
        Manage Pages
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-lg font-semibold text-gray-800">
                Title
              </th>
              <th className="py-2 px-4 border-b text-lg font-semibold text-gray-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(pages).map(([id, page]) => (
              <tr key={id}>
                <td className="py-2 px-4 border-b text-base text-black">
                  {page.title}
                </td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={`/admin/pages/${id}/edit`}
                    className="text-blue-700 underline mr-4 hover:text-blue-900"
                  >
                    Edit
                  </a>
                  <button
                    className="text-red-700 underline hover:text-red-900"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <a
            href="/admin/pages/new"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
          >
            Add New Page
          </a>
        </div>
      </div>
    </div>
  );
}