import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const properties = await prisma.property.findMany();
    return Response.json(properties);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const created = await prisma.property.create({
      data: {
        title: body.title,
        location: body.location,
        status: body.status,
        description: body.description,
        features: body.features,
        image: body.image,
        type: body.type,
        link: body.link, // include link if your schema supports it
      },
    });
    return Response.json({ ok: true, property: created });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}