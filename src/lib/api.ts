// Cérbero — waitlist service, exposed via Nike (api.olympkusai.com/cerbero).
// In dev, set VITE_CERBERO_URL to point to a local Cérbero instance.
const CERBERO_BASE =
  import.meta.env.VITE_CERBERO_URL ?? "https://api.olympkusai.com/cerbero";

export interface Standing {
  code: string;
  position: number;
  total: number;
  referrals: number;
}

async function parse(res: Response): Promise<Standing> {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "request failed");
  return data as Standing;
}

export async function joinWaitlist(email: string, ref: string | null): Promise<Standing> {
  const res = await fetch(`${CERBERO_BASE}/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, ref }),
  });
  return parse(res);
}

export async function getStanding(code: string): Promise<Standing | null> {
  const res = await fetch(`${CERBERO_BASE}/standing?code=${encodeURIComponent(code)}`);
  if (res.status === 404) return null;
  return parse(res);
}

export async function getCount(): Promise<number> {
  try {
    const res = await fetch(`${CERBERO_BASE}/count`);
    if (!res.ok) return 0;
    const data = await res.json();
    return data.total ?? 0;
  } catch {
    return 0;
  }
}

export function shareUrl(code: string): string {
  return `${window.location.origin}/?ref=${code}`;
}
