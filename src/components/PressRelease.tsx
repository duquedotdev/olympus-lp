import { getRelease } from "../lib/pr.ts";

export function PressRelease({ slug }: { slug: string }) {
  const release = getRelease(slug);

  if (!release) {
    return (
      <div className="blog-post">
        <a href="/press" className="blog-back">← Voltar à sala de imprensa</a>
        <h1 className="blog-title">Comunicado não encontrado</h1>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <a href="/press" className="blog-back">← Voltar à sala de imprensa</a>

      <header className="blog-post__header">
        <p className="eyebrow"><span className="eyebrow__dot" />{formatDate(release.date)}</p>
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

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase();
}
