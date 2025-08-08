"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminGalleryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Gallery Admin</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id} className="mb-4 flex justify-between items-center">
            <span>{item.title}</span>
            <Link
              href={`/admin/gallery/${item.id}/edit`}
              className="text-blue-600 underline"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}