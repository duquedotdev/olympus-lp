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
  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, ref }),
  });
  return parse(res);
}

export async function getStanding(code: string): Promise<Standing | null> {
  const res = await fetch(`/api/waitlist?code=${encodeURIComponent(code)}`);
  if (res.status === 404) return null;
  return parse(res);
}

export function shareUrl(code: string): string {
  return `${window.location.origin}/?ref=${code}`;
}
