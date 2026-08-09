import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
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

// Vite import.meta.glob carrega todos os .md em tempo de build
const modules = import.meta.glob("../blog/*.md", { query: "?raw", import: "default", eager: true });

const posts: BlogPost[] = Object.entries(modules).map(([path, raw]) => {
  const content = raw as string;
  const { data, body } = parseFrontmatter(content);
  const slug = data.slug || path.split("/").pop()!.replace(".md", "");

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    author: data.author || "Olympkus AI",
    content: body,
    html: marked.parse(body, { async: false }) as string,
  };
});

posts.sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
