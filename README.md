# Olympkus AI — Landing Page

Single-page landing for the Olympkus AI agentic suite (Pluto · Cronos · Zeus).
Vite + React 19 + TypeScript. The waitlist backend lives in **Cérbero**
(`github.com/olympkusai/cerbero`), exposed via the **Nike** API gateway at
`api.olympkusai.com/cerbero`.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run lint       # oxlint
```

The waitlist API is called via `VITE_CERBERO_URL` (defaults to
`https://api.olympkusai.com/cerbero`). For local dev against a running Cérbero:

```bash
echo "VITE_CERBERO_URL=http://localhost:8085" > .env.local
npm run dev
```

## Structure

```
src/components/        UI sections (Hero, Pantheon, CtaBand, …)
src/lib/api.ts         Client fetch wrapper → Cérbero (via Nike)
src/lib/analytics.ts   Vercel Analytics events
src/data/content.ts    All copy and product data
```
