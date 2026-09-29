import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PUT(request: Request) {
  const body = await request.json();
  return NextResponse.json(await db.profiles.replace(body));
}

export async function PATCH(request: Request) {
  const body = await request.json();
  return NextResponse.json(await db.profiles.update(body));
}
