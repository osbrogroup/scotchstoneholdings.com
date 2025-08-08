import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  const filename = `${Date.now()}-${file.name}`;
  fs.writeFileSync(path.join(uploadDir, filename), buffer);
  return NextResponse.json({ url: `/uploads/${filename}` });
}