import type { ComponentType } from "react";
import { DiscordIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "./icons/SocialIcons.tsx";

type Social = { label: string; url: string; Icon: ComponentType<{ className?: string }> };

const SOCIALS: Social[] = [
  { label: "Discord", url: "https://discord.gg/Y5GxgEY8Zt", Icon: DiscordIcon },
  { label: "LinkedIn", url: "https://linkedin.com/company/olympkusai", Icon: LinkedInIcon },
  { label: "Instagram", url: "https://instagram.com/olympkus", Icon: InstagramIcon },
  { label: "TikTok", url: "https://tiktok.com/@olympkus", Icon: TikTokIcon },
];

export function SocialLinks() {
  return (
    <>
      <h2>Redes sociais</h2>
      <p>Acompanhe a Olympkus e participe da comunidade:</p>
      <ul className="social-links">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="social-links__item">
              <s.Icon className="social-links__icon" />
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
