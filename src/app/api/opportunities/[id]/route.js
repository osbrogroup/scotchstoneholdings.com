import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const id = params.id;
  const body = await req.json();
  const { title, description, features, link, content } = body;
  try {
    const updated = await prisma.opportunity.update({
      where: { id },
      data: { title, description, features, link, content },
    });
    return NextResponse.json({ ok: true, opportunity: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const id = params.id;
  try {
    await prisma.opportunity.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete opportunity." },
      { status: 500 }
    );
  }
}