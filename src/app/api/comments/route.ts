import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const POST = async (request: Request) => {
  const body = await request.json();
  return NextResponse.json(await db.comments.insert(body), { status: 201 });
};
