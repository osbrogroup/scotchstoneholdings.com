import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
  const uploadDir = path.join(process.cwd(), "public", "images");

  // Ensure the directory exists
  await fs.mkdir(uploadDir, { recursive: true });

  // Save the file
  await fs.writeFile(path.join(uploadDir, filename), buffer);

  return NextResponse.json({ filename });
}