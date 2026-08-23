type IconProps = { className?: string };

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.32 5.37a18.27 18.27 0 0 0-4.53-1.4 13.7 13.7 0 0 0-.62 1.27 17.06 17.06 0 0 0-5.14 0 13.7 13.7 0 0 0-.62-1.27 18.2 18.2 0 0 0-4.54 1.4C1.66 9.1.97 12.73 1.32 16.3a18.4 18.4 0 0 0 5.5 2.76c.44-.6.84-1.24 1.18-1.92a11.9 11.9 0 0 1-1.86-.9c.16-.11.31-.23.46-.35a13.1 13.1 0 0 0 11.1 0c.15.12.3.24.46.35-.59.35-1.21.65-1.86.9.34.68.74 1.32 1.18 1.92a18.35 18.35 0 0 0 5.5-2.76c.42-4.14-.66-7.73-2.66-10.93ZM8.68 14.1c-.9 0-1.63-.83-1.63-1.85s.72-1.85 1.63-1.85 1.65.84 1.63 1.85c0 1.02-.72 1.85-1.63 1.85Zm6.64 0c-.9 0-1.63-.83-1.63-1.85s.72-1.85 1.63-1.85 1.64.84 1.63 1.85c0 1.02-.72 1.85-1.63 1.85Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.27 7.42 1.96 1.96 0 0 0 5.25 3.5ZM20.5 13.6c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.69h-.04V8.5H10.2V20.5h3.38v-6.66c0-1.76.33-3.46 2.5-3.46 2.15 0 2.18 2 2.18 3.57v6.55h3.38V13.6Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3h-3.1v12.1a2.7 2.7 0 1 1-2.7-2.9c.24 0 .48.02.7.07V9.2a5.9 5.9 0 0 0-.7-.04A5.86 5.86 0 1 0 16.6 15V9.1a7.6 7.6 0 0 0 4.4 1.4V7.4a4.5 4.5 0 0 1-4.4-4.4Z" />
    </svg>
  );
}
