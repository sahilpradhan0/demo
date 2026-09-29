import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const DELETE = async function (request: Request) {
  const { id } = await request.json();
  await db.comments.remove(id);
  return NextResponse.json({ ok: true });
};
