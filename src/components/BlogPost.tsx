import { getPost } from "../lib/blog.ts";

export function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="blog-post">
        <a href="/blog" className="blog-back">← Voltar ao blog</a>
        <h1 className="blog-title">Artigo não encontrado</h1>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <a href="/blog" className="blog-back">← Voltar ao blog</a>

      <header className="blog-post__header">
        <p className="eyebrow"><span className="eyebrow__dot" />{formatDate(post.date)}</p>
        <h1 className="blog-post__title">{post.title}</h1>
        <p className="blog-post__excerpt">{post.excerpt}</p>
        <p className="blog-post__author mono">POR {post.author.toUpperCase()}</p>
      </header>

      <div className="blog-post__body" dangerouslySetInnerHTML={{ __html: post.html }} />

      <footer className="blog-post__footer">
        <a href="/#access" className="btn btn--solid">Garanta seu lugar no Panteão</a>
        <a href="/blog" className="blog-back">← Voltar ao blog</a>
      </footer>
    </article>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase();
}
