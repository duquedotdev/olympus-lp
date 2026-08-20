import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  readingTime: number;
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
    let value = line.slice(idx + 1).trim();
    // Remove aspas duplas ou simples envolvendo o valor
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, body };
}

function calcReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
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
    category: data.category || "Geral",
    readingTime: calcReadingTime(body),
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

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const p of posts) set.add(p.category);
  return Array.from(set);
}
