# Olympkus AI — Landing Page

Single-page landing for the Olympkus AI agentic suite (Pluto · Cronos · Zeus).
Vite + React 19 + TypeScript, with a referral waitlist backed by Vercel
Functions + Neon Postgres.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173  (UI only; /api needs vercel dev)
npm run build      # type-check + production build
npm run lint       # oxlint
npm test           # vitest (integration tests run only when DATABASE_URL is set)
```

The static UI runs under `npm run dev`, but the `/api/waitlist` endpoint is a
Vercel Function — to exercise the full waitlist flow locally use `vercel dev`
(after linking the project) or a preview deployment.

## Waitlist backend (Neon Postgres)

1. On Vercel, add the **Neon** integration from the Marketplace to this project.
   It provisions the database and injects `DATABASE_URL` into every environment.
2. Apply the schema (constraints are the source of truth):

   ```bash
   export DATABASE_URL="postgres://…"   # or: vercel env pull .env
   npm run db:migrate                   # runs migrations/001_waitlist.sql
   ```

3. Run the integration tests against a throwaway Neon branch:

   ```bash
   DATABASE_URL="postgres://…" npm test
   ```

### API

- `POST /api/waitlist` — body `{ "email": "...", "ref": "<code|null>" }` →
  `{ code, position, total, referrals }`
- `GET  /api/waitlist?code=<code>` — current standing for a code

Ranking: entries are ordered by referral count (desc), ties broken by signup
time — each confirmed referral moves you toward the front of the queue.

## Structure

```
api/waitlist.ts        Vercel Function (POST join / GET standing)
server/                Shared server logic (db, validation, waitlist)
migrations/            SQL schema + rollback
src/components/        UI sections (Hero, Pantheon, CtaBand, …)
src/lib/api.ts         Client fetch wrapper + referral link
src/data/content.ts    All copy and product data
tests/                 vitest (unit + real-DB integration)
```
