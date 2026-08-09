import { sql } from "./db.ts";
import { newCode } from "./validate.ts";

export interface Standing {
  code: string;
  position: number;
  total: number;
  referrals: number;
}

interface EntryRow {
  id: string;
  code: string;
}

async function insertEntry(email: string, referredBy: string | null): Promise<EntryRow> {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const rows = (await sql`
        INSERT INTO waitlist_entry (email, code, referred_by)
        VALUES (${email}, ${newCode()}, ${referredBy})
        RETURNING id::text, code
      `) as EntryRow[];
      return rows[0];
    } catch (err) {
      // Unique violation on generated code -> retry with a fresh code.
      if (isUniqueViolation(err) && !isEmailConflict(err)) continue;
      throw err;
    }
  }
  throw new Error("could not allocate a unique code");
}

function isUniqueViolation(err: unknown): boolean {
  return typeof err === "object" && err !== null && (err as { code?: string }).code === "23505";
}
function isEmailConflict(err: unknown): boolean {
  const msg = (err as { message?: string })?.message ?? "";
  return isUniqueViolation(err) && msg.includes("email");
}

async function resolveReferrer(refCode: string | null): Promise<string | null> {
  if (!refCode) return null;
  const rows = (await sql`SELECT id::text FROM waitlist_entry WHERE code = ${refCode}`) as {
    id: string;
  }[];
  return rows.length ? rows[0].id : null;
}

export async function standingByCode(code: string): Promise<Standing | null> {
  const rows = (await sql`
    WITH counts AS (
      SELECT w.id, w.code, w.created_at,
             (SELECT count(*) FROM waitlist_entry r WHERE r.referred_by = w.id) AS refs
      FROM waitlist_entry w
    ),
    me AS (SELECT id, code, created_at, refs FROM counts WHERE code = ${code})
    SELECT
      me.code AS code,
      (SELECT count(*) FROM counts c, me
         WHERE c.refs > me.refs
            OR (c.refs = me.refs AND c.created_at < me.created_at)) + 1 AS position,
      (SELECT count(*) FROM waitlist_entry) AS total,
      me.refs AS referrals
    FROM me
  `) as { code: string; position: number; total: number; referrals: number }[];

  if (!rows.length) return null;
  const r = rows[0];
  return {
    code: r.code,
    position: Number(r.position),
    total: Number(r.total),
    referrals: Number(r.referrals),
  };
}

export async function join(email: string, refCode: string | null): Promise<Standing> {
  const existing = (await sql`SELECT code FROM waitlist_entry WHERE email = ${email}`) as {
    code: string;
  }[];
  if (existing.length) {
    return (await standingByCode(existing[0].code))!;
  }

  const referredBy = await resolveReferrer(refCode);
  const entry = await insertEntry(email, referredBy);
  return (await standingByCode(entry.code))!;
}
