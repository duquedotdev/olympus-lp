import { marked } from "marked";

export interface PressRelease {
  slug: string;
  title: string;
  date: string;
  type: string;
  excerpt: string;
  content: string;
  html: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const frontmatter = match[1];
  const body = match[2];

  const data: Record<string, string> = {};
  for (const line of frontmatter.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  }

  return { data, body };
}

const modules = import.meta.glob("../pr/*.md", { query: "?raw", import: "default", eager: true });

const releases: PressRelease[] = Object.entries(modules).map(([path, raw]) => {
  const content = raw as string;
  const { data, body } = parseFrontmatter(content);
  const slug = data.slug || path.split("/").pop()!.replace(".md", "");

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    type: data.type || "press-release",
    excerpt: data.excerpt || "",
    content: body,
    html: marked.parse(body, { async: false }) as string,
  };
});

releases.sort((a, b) => b.date.localeCompare(a.date));

export function getAllReleases(): PressRelease[] {
  return releases;
}

export function getRelease(slug: string): PressRelease | undefined {
  return releases.find((r) => r.slug === slug);
}
