import type { VercelRequest, VercelResponse } from "@vercel/node";
import { join, standingByCode } from "../server/waitlist.ts";
import { normalizeEmail, cleanCode } from "../server/validate.ts";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const code = cleanCode(req.query.code);
      if (!code) return res.status(400).json({ error: "invalid code" });
      const standing = await standingByCode(code);
      if (!standing) return res.status(404).json({ error: "not found" });
      return res.status(200).json(standing);
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};
      const email = normalizeEmail(body.email);
      if (!email) return res.status(400).json({ error: "invalid email" });
      const ref = cleanCode(body.ref);
      const standing = await join(email, ref);
      return res.status(201).json(standing);
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method not allowed" });
  } catch (err) {
    console.error("[waitlist]", err);
    return res.status(500).json({ error: "internal error" });
  }
}
