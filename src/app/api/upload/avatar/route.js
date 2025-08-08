import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await prisma.blogPost.delete({ where: { id } });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}