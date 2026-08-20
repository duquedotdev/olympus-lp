import { useEffect } from "react";
import { getAllReleases } from "../lib/pr.ts";
import { CtaBand } from "./CtaBand.tsx";

const DOWNLOADS = [
  { label: "Logo (SVG)", desc: "Escalável para qualquer tamanho sem perder qualidade.", href: "/logo.svg" },
  { label: "Logo (PNG)", desc: "Imagem pronta para web e impressão.", href: "/logo.png" },
  { label: "Favicon / ícone (SVG)", desc: "Marca reduzida para navegadores.", href: "/favicon.svg" },
];

const FACTS: { label: string; value: string }[] = [
  { label: "Empresa", value: "Olympkus AI" },
  { label: "Fundação", value: "[A PREENCHER]" },
  { label: "Sede", value: "Brasil" },
  { label: "Time", value: "[A PREENCHER]" },
  { label: "Usuários no beta", value: "[A PREENCHER — se aplicável]" },
  { label: "Produtos", value: "Pluto (jan/2027), Aion (jul/2027), Zeus (em concepção)" },
];

export function PressList() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const releases = getAllReleases();

  return (
    <div className="blog-list">
      <header className="blog-header">
        <a href="/" className="blog-back">← Voltar</a>
        <p className="eyebrow eyebrow--center"><span className="eyebrow__dot" />IMPRENSA</p>
        <h1 className="blog-title">Sala de Imprensa</h1>
        <p className="blog-lede">Comunicados, posicionamento e materiais para jornalistas e criadores de conteúdo.</p>
      </header>

      {/* ---------- Kit de Mídia ---------- */}
      <section style={kitStyle}>
        <div style={{ marginBottom: "2.4rem" }}>
          <p className="eyebrow"><span className="eyebrow__dot" />KIT DE MÍDIA</p>
          <h2 style={kitTitleStyle}>Tudo que você precisa para falar da Olympkus.</h2>
        </div>

        {/* Boilerplate / backgrounder */}
        <div style={blockStyle}>
          <p className="mono" style={labelStyle}>SOBRE A OLYMPKUS</p>
          <p style={boilerStyle}>
            A Olympkus AI é uma empresa brasileira que desenvolve agentes de IA para a vida
            pessoal. A suíte Panteão reúne três agentes especializados — Pluto (finanças),
            Aion (tempo) e Zeus (orquestração) — sob um único comando. O primeiro produto,
            Pluto, está previsto para janeiro de 2027.
          </p>
        </div>

        {/* Downloads */}
        <div style={blockStyle}>
          <p className="mono" style={labelStyle}>DOWNLOADS</p>
          <div style={gridStyle}>
            {DOWNLOADS.map((d) => (
              <a key={d.href} href={d.href} className="blog-card" download style={cardStyle}>
                <span style={iconStyle} aria-hidden="true">↓</span>
                <span style={cardLabelStyle}>{d.label}</span>
                <span style={cardDescStyle}>{d.desc}</span>
              </a>
            ))}
            <div className="blog-card" style={{ ...cardStyle, cursor: "default" }}>
              <span style={iconStyle} aria-hidden="true">▢</span>
              <span style={cardLabelStyle}>Screenshots do app</span>
              <span style={cardDescStyle}>[Screenshots do app — a ser adicionado após o beta]</span>
            </div>
          </div>
        </div>

        {/* Dados factuais */}
        <div style={blockStyle}>
          <p className="mono" style={labelStyle}>DADOS FACTUAIS</p>
          <dl style={{ margin: 0 }}>
            {FACTS.map((f) => (
              <div key={f.label} style={factRowStyle}>
                <dt className="mono" style={factLabelStyle}>{f.label}</dt>
                <dd style={factValueStyle}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Contato para imprensa ---------- */}
      <div className="press-contact">
        <p className="mono">CONTATO PARA IMPRENSA</p>
        <a href="mailto:imprensa@olympkus.ai">imprensa@olympkus.ai</a>
      </div>

      {/* ---------- Releases ---------- */}
      <div className="blog-grid">
        {releases.map((release) => (
          <a key={release.slug} href={`/press/${release.slug}`} className="blog-card">
            <time className="blog-card__date mono">{formatDate(release.date)}</time>
            <span className="chip chip--shipping">COMUNICADO</span>
            <h2 className="blog-card__title">{release.title}</h2>
            <p className="blog-card__excerpt">{release.excerpt}</p>
            <span className="blog-card__more mono">LER →</span>
          </a>
        ))}
      </div>

      <CtaBand />
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
}

/* ---------- Inline styles (kit de mídia) ---------- */
const kitStyle: React.CSSProperties = {
  maxWidth: "880px",
  margin: "0 auto clamp(48px, 6vw, 72px)",
  padding: "clamp(28px, 4vw, 44px)",
  background: "var(--raised)",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius)",
};

const kitTitleStyle: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontWeight: 400,
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  lineHeight: 1.1,
  color: "var(--marble)",
  marginTop: "1rem",
};

const blockStyle: React.CSSProperties = {
  marginTop: "2.4rem",
  paddingTop: "2.4rem",
  borderTop: "1px solid var(--line)",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.68rem",
  letterSpacing: "0.16em",
  color: "var(--stone-dim)",
  marginBottom: "1rem",
};

const boilerStyle: React.CSSProperties = {
  fontSize: "1.08rem",
  lineHeight: 1.75,
  color: "var(--marble-dim)",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "clamp(16px, 2vw, 24px)",
};

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1.4rem",
};

const iconStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  color: "var(--bronze)",
  lineHeight: 1,
  marginBottom: "0.4rem",
};

const cardLabelStyle: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontSize: "1.15rem",
  color: "var(--marble)",
};

const cardDescStyle: React.CSSProperties = {
  fontSize: "0.86rem",
  color: "var(--stone)",
  lineHeight: 1.5,
};

const factRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "180px 1fr",
  gap: "1rem",
  padding: "0.7rem 0",
  borderBottom: "1px solid var(--line)",
};

const factLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  color: "var(--stone-dim)",
  textTransform: "uppercase",
};

const factValueStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "0.98rem",
  color: "var(--marble-dim)",
  lineHeight: 1.5,
};
