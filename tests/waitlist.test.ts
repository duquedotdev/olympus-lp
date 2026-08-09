import { describe, it, expect, beforeAll, beforeEach } from "vitest";

const hasDb = !!(process.env.DATABASE_URL || process.env.POSTGRES_URL);

// Integration: hits a real Postgres with the real constraints. No mocks.
// Runs only when DATABASE_URL is set (e.g. a Neon branch). See migrations/.
describe.skipIf(!hasDb)("waitlist (integration)", () => {
  let sql: typeof import("../server/db.ts").sql;
  let join: typeof import("../server/waitlist.ts").join;
  let standingByCode: typeof import("../server/waitlist.ts").standingByCode;

  beforeAll(async () => {
    ({ sql } = await import("../server/db.ts"));
    ({ join, standingByCode } = await import("../server/waitlist.ts"));
  });

  beforeEach(async () => {
    await sql`TRUNCATE waitlist_entry RESTART IDENTITY CASCADE`;
  });

  it("assigns sequential positions and a shareable code", async () => {
    const a = await join("a@olympus.io", null);
    expect(a.position).toBe(1);
    expect(a.total).toBe(1);
    expect(a.code).toMatch(/^[a-z0-9]{8}$/);

    const b = await join("b@olympus.io", null);
    expect(b.position).toBe(2);
    expect(b.total).toBe(2);
  });

  it("is idempotent for the same email", async () => {
    const first = await join("dup@olympus.io", null);
    const again = await join("DUP@olympus.io", null);
    expect(again.code).toBe(first.code);
    const [{ count }] = (await sql`SELECT count(*)::int AS count FROM waitlist_entry`) as {
      count: number;
    }[];
    expect(count).toBe(1);
  });

  it("counts referrals and moves the referrer ahead", async () => {
    const referrer = await join("ref@olympus.io", null);
    await join("second@olympus.io", null);
    const referred = await join("child@olympus.io", referrer.code);
    expect(referred.total).toBe(3);

    const updated = await standingByCode(referrer.code);
    expect(updated?.referrals).toBe(1);
    // one referral outranks the zero-referral entry that joined earlier
    expect(updated?.position).toBe(1);
  });

  it("ignores unknown referral codes", async () => {
    const entry = await join("solo@olympus.io", "zzzzzz");
    expect(entry.position).toBe(1);
    const [{ referred_by }] = (await sql`
      SELECT referred_by FROM waitlist_entry WHERE code = ${entry.code}
    `) as { referred_by: number | null }[];
    expect(referred_by).toBeNull();
  });

  it("rejects a malformed email at the constraint level", async () => {
    await expect(
      sql`INSERT INTO waitlist_entry (email, code) VALUES ('not-an-email', 'abcdef')`
    ).rejects.toThrow();
  });
});
