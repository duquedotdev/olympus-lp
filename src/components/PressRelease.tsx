import { getRelease } from "../lib/pr.ts";
import { ReadingMark } from "./reading-mark.tsx";

export function PressRelease({ slug }: { slug: string }) {
  const release = getRelease(slug);

  if (!release) {
    return (
      <div className="blog-post">
        <a href="/press" className="blog-back">← Voltar à sala de imprensa</a>
        <ReadingMark label="Imprensa · Fora dos registros" />
        <h1 className="blog-title">Comunicado não encontrado</h1>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <a href="/press" className="blog-back">← Voltar à sala de imprensa</a>

      <header className="blog-post__header">
        <ReadingMark label="Registros do Panteão" />
        <span className="chip chip--shipping">COMUNICADO</span>
        <h1 className="blog-post__title">{release.title}</h1>
        <p className="blog-post__excerpt">{release.excerpt}</p>
      </header>

      <div className="blog-post__body" dangerouslySetInnerHTML={{ __html: release.html }} />

      <footer className="blog-post__footer">
        <p className="mono" style={{ color: "var(--stone-dim)", fontSize: "0.78rem" }}>CONTATO PARA IMPRENSA</p>
        <a href="mailto:imprensa@olympkus.ai" style={{ color: "var(--bronze-soft)" }}>imprensa@olympkus.ai</a>
        <a href="/press" className="blog-back">← Voltar à sala de imprensa</a>
      </footer>
    </article>
  );
}
