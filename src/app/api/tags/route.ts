import { NextResponse } from "next/server";
import { db } from "@/lib/db";

async function renameTag(request: Request) {
  const body = await request.json();
  return NextResponse.json(await db.tags.update(body));
}

export { renameTag as PATCH };
