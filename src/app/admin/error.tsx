"use client";
export default function AdminError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Admin Error</h1>
      <p className="text-lg text-red-600 mb-2">{error.message}</p>
      <button
        className="bg-red-700 text-white px-6 py-2 rounded font-bold"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}