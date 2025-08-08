import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const id = params.id;
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id },
    });
    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const id = params.id;
  try {
    const body = await req.json();
    const updated = await prisma.blogPost.update({
      where: { id },
      data: {
        title: body.title,
        summary: body.summary,
        author: body.author,
        image: body.image,
        authorAvatar: body.authorAvatar,
        tags: Array.isArray(body.tags) ? body.tags.join(",") : body.tags,
        content: body.content,
        date: body.date,
        video: body.video,
      },
    });
    return NextResponse.json({ ok: true, post: updated });
  } catch (error) {
    if (error.code === "P2025") {
      return NextResponse.json({ ok: false, error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const id = params.id;
  try {
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post." }, { status: 500 });
  }
}