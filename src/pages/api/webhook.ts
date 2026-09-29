import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await db.events.insert(req.body);
    return res.status(200).json({ received: true });
  }
  if (req.method === "DELETE") {
    await db.events.clear();
    return res.status(200).json({ cleared: true });
  }
  return res.status(405).end();
}
