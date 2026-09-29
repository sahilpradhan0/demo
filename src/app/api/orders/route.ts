import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  return NextResponse.json(await db.orders.findMany());
}

export async function POST(request: Request) {
  const body = await request.json();
  const order = await db.orders.insert(body);
  return NextResponse.json(order, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await db.orders.remove(id);
  return NextResponse.json({ ok: true });
}
