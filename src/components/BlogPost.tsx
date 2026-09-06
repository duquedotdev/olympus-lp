import { getPost } from "../lib/blog.ts";
import { ReadingMark } from "./reading-mark.tsx";

export function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="blog-post">
        <a href="/blog" className="blog-back">← Voltar ao blog</a>
        <ReadingMark label="Crônicas · Fora dos registros" />
        <h1 className="blog-title">Artigo não encontrado</h1>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <a href="/blog" className="blog-back">← Voltar ao blog</a>

      <header className="blog-post__header">
        <ReadingMark label="Crônicas do Panteão" />
        <h1 className="blog-post__title">{post.title}</h1>
        <p className="blog-post__excerpt">{post.excerpt}</p>
        <p className="blog-post__author mono">POR {post.author.toUpperCase()}</p>
      </header>

      <div className="blog-post__body" dangerouslySetInnerHTML={{ __html: post.html }} />

      <footer className="blog-post__footer">
        <a href="/" className="btn btn--solid">Quero ser avisado</a>
        <a href="/blog" className="blog-back">← Voltar ao blog</a>
      </footer>
    </article>
  );
}
