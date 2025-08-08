import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, context) {
  const { id } = context.params;
  try {
    const property = await prisma.property.findUnique({
      where: { id },
    });
    if (!property) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(property);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, context) {
  const { id } = context.params;
  try {
    const body = await req.json();
    const updated = await prisma.property.update({
      where: { id },
      data: {
        title: body.title || "",
        location: body.location || "",
        status: body.status || "",
        description: body.description ?? "",
        features: body.features ?? "",
        image: body.image ?? "",
        type: body.type || "",
        link: body.link ?? "",
      },
    });
    return Response.json({ ok: true, property: updated });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, context) {
  const { id } = context.params;
  try {
    await prisma.property.delete({
      where: { id },
    });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}