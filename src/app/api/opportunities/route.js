import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const opportunities = await prisma.opportunity.findMany();
    return NextResponse.json(opportunities);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
