import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const current = await getServerSession(req, res);
  if (!current) return res.status(401).end();
  if (req.method === "POST") return res.status(200).json({ saved: true });
  return res.status(405).end();
}
