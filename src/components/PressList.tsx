import { getAllReleases } from "../lib/pr.ts";

export function PressList() {
  const releases = getAllReleases();

  return (
    <div className="blog-list">
      <header className="blog-header">
        <a href="#" className="blog-back">← Voltar</a>
        <p className="eyebrow eyebrow--center"><span className="eyebrow__dot" />IMPRENSA</p>
        <h1 className="blog-title">Sala de Imprensa</h1>
        <p className="blog-lede">Comunicados, posicionamento e materiais para jornalistas e criadores de conteúdo.</p>
      </header>

      <div className="press-contact">
        <p className="mono">CONTATO PARA IMPRENSA</p>
        <a href="mailto:imprensa@olympkus.ai">imprensa@olympkus.ai</a>
      </div>

      <div className="blog-grid">
        {releases.map((release) => (
          <a key={release.slug} href={`#imprensa/${release.slug}`} className="blog-card">
            <time className="blog-card__date mono">{formatDate(release.date)}</time>
            <span className="chip chip--shipping">COMUNICADO</span>
            <h2 className="blog-card__title">{release.title}</h2>
            <p className="blog-card__excerpt">{release.excerpt}</p>
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
