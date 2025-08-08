import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const id = params.id;
  try {
    const item = await prisma.gallery.findUnique({ where: { id } });
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const id = params.id;
  try {
    const body = await req.json();
    const updated = await prisma.gallery.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
      },
    });
    return NextResponse.json({ ok: true, item: updated });
  } catch (error) {
    if (error.code === "P2025") {
      return NextResponse.json({ ok: false, error: "Gallery item not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}