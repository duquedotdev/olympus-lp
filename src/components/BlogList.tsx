import { getAllPosts } from "../lib/blog.ts";

export function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="blog-list">
      <header className="blog-header">
        <a href="#" className="blog-back">← Voltar</a>
        <p className="eyebrow eyebrow--center"><span className="eyebrow__dot" />BLOG</p>
        <h1 className="blog-title">Bastidores do Panteão</h1>
        <p className="blog-lede">Reflexões sobre IA agêntica, finanças pessoais e o futuro da delegação.</p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <a key={post.slug} href={`#blog/${post.slug}`} className="blog-card">
            <time className="blog-card__date mono">{formatDate(post.date)}</time>
            <h2 className="blog-card__title">{post.title}</h2>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <span className="blog-card__more mono">LER →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
}
