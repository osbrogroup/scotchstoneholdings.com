import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const opportunity = await prisma.opportunity.findUnique({ where: { id } });
    if (!opportunity) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(opportunity);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const { title, content } = await req.json();
    const updated = await prisma.opportunity.update({
      where: { id },
      data: { title, content },
    });
    return Response.json({ ok: true, opportunity: updated });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await prisma.opportunity.delete({ where: { id } });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}
