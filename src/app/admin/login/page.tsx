"use client";
import React, { useState } from "react";
import { setAdminAuth } from "../../../utils/auth";

export default function EditGalleryPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === "yourStrongPassword") {
      setAdminAuth(true);
      window.location.href = "/admin";
    } else {
      setError("Invalid password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-orange-600">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded font-bold">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}