// components/QuillClientOnly.tsx
"use client";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function QuillClientOnly({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      className="bg-white border-2 border-gray-400 rounded-lg"
      theme="snow"
    />
  );
}