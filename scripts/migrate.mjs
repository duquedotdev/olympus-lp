import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const file = process.argv[2] ?? "migrations/001_waitlist.sql";
const sql = neon(url);
const statements = readFileSync(file, "utf8")
  .split(/;\s*$/m)
  .map((s) => s.trim())
  .filter(Boolean);

for (const statement of statements) {
  await sql.query(statement);
}
console.log(`migrated: ${file} (${statements.length} statements)`);
