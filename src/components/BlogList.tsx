import { useMemo, useState } from "react";
import { getAllCategories, getAllPosts } from "../lib/blog.ts";

export function BlogList() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "Todos" || post.category === activeCategory;
      const matchesQuery =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [allPosts, activeCategory, query]);

  const chips = ["Todos", ...categories];

  return (
    <div className="blog-list">
      <header className="blog-header">
        <a href="/" className="blog-back">← Voltar</a>
        <p className="eyebrow eyebrow--center"><span className="eyebrow__dot" />BLOG</p>
        <h1 className="blog-title">Bastidores do Panteão</h1>
        <p className="blog-lede">Reflexões sobre IA agêntica, finanças pessoais e o futuro da delegação.</p>
      </header>

      <div className="blog-controls">
        <input
          type="text"
          className="blog-search mono"
          placeholder="Buscar artigos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar artigos"
        />
        <div className="blog-filters">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              className={`chip blog-filter${activeCategory === chip ? " blog-filter--active" : ""}`}
              onClick={() => setActiveCategory(chip)}
            >
              {chip.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <span className="chip">{post.category.toUpperCase()}</span>
            <time className="blog-card__date mono">
              {formatDate(post.date)} · {post.readingTime} MIN
            </time>
            <h2 className="blog-card__title">{post.title}</h2>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <span className="blog-card__more mono">LER →</span>
          </a>
        ))}
        {filteredPosts.length === 0 && (
          <p className="blog-empty mono">Nenhum artigo encontrado.</p>
        )}
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
}
