import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// Protected: arrow-function handler that checks auth first.
export const POST = async (request: Request) => {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await db.settings.save(userId, await request.json()));
};

// Protected: handler wrapped in an auth helper.
export const PUT = withAuth(async (request: Request) => {
  return NextResponse.json(await db.settings.replace(await request.json()));
});
