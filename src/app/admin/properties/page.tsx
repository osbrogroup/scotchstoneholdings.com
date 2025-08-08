"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPropertiesList() {
  const [properties, setProperties] = useState([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/property")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  async function handleDeleteProperty(idx: number, id: string) {
    if (!confirm("Are you sure you want to delete this property?")) return;
    const res = await fetch(`/api/property/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.ok) {
      setNotification("Property deleted!");
      // Refetch backend properties
      fetch("/api/property")
        .then((res) => res.json())
        .then((data) => setProperties(data));
      setTimeout(() => setNotification(null), 1500);
    } else {
      setNotification("Failed to delete property.");
      setTimeout(() => setNotification(null), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/admin"
          className="bg-blue-900 text-white px-5 py-2 rounded-lg font-bold shadow hover:bg-blue-800 transition border border-blue-900"
        >
          ← Admin Dashboard
        </Link>
        <Link
          href="/admin/properties/new"
          className="bg-orange-600 text-white px-7 py-2 rounded-lg font-bold shadow hover:bg-orange-700 transition border border-orange-600"
        >
          + Add Property
        </Link>
      </div>
      <h2 className="text-4xl font-extrabold mb-8 text-blue-900 text-center tracking-tight drop-shadow border-b-2 border-blue-900 pb-2">
        Manage Properties
      </h2>
      {notification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl p-8 border-2 border-orange-600 shadow-lg text-center">
            <h3
              className={`text-xl font-bold mb-2 ${
                notification === "Property deleted!" ? "text-orange-600" : "text-red-600"
              }`}
            >
              {notification === "Property deleted!" ? "Success!" : "Error"}
            </h3>
            <p className="text-blue-900 font-bold">{notification}</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property, idx) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-lg border-2 border-blue-900 p-6 flex flex-col"
          >
            <h3 className="text-2xl font-extrabold mb-2 text-gray-800">{property.title}</h3>
            <p className="text-blue-900 mb-1 font-semibold">{property.location}</p>
            <p className="text-gray-700 mb-2 font-semibold">{property.status}</p>
            <p className="mb-2 text-gray-700 break-words whitespace-pre-line">
              {property.description}
            </p>
            {property.features && property.features.length > 0 && (
              <div className="mb-2 text-gray-700 font-semibold">{property.features}</div>
            )}
            {property.image && (
              <img
                src={`/uploads/images/${property.image}`}
                alt={property.title}
                className="mt-2 max-h-32 rounded shadow border border-blue-900"
              />
            )}
            <div className="flex gap-2 mt-4">
              <Link
                href={`/admin/properties/${property.id}/edit`}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-blue-800 transition border border-blue-900"
              >
                Edit
              </Link>
              <button
                type="button"
                className="bg-red-700 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-red-900 transition border border-red-700"
                onClick={() => handleDeleteProperty(idx, property.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}