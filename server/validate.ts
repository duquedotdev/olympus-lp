const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  return EMAIL.test(email) && email.length <= 254 ? email : null;
}

export function cleanCode(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const code = raw.trim();
  return /^[a-z0-9]{6,16}$/i.test(code) ? code : null;
}

export function newCode(): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}
