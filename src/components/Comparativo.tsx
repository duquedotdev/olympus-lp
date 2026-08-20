import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.92rem",
  color: "var(--marble-dim)",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "1rem 1.1rem",
  borderBottom: "1px solid var(--line-strong)",
  fontFamily: "var(--mono)",
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--stone-dim)",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "1rem 1.1rem",
  borderBottom: "1px solid var(--line)",
  color: "var(--marble-dim)",
  fontSize: "0.9rem",
};

const featureCellStyle: React.CSSProperties = {
  ...tdStyle,
  color: "var(--marble)",
  fontWeight: 500,
};

const plutoColStyle: React.CSSProperties = {
  ...tdStyle,
  color: "var(--bronze-soft)",
  fontWeight: 600,
};

const plutoHeadStyle: React.CSSProperties = {
  ...thStyle,
  color: "var(--bronze-soft)",
};

const wrapperStyle: React.CSSProperties = {
  maxWidth: "var(--shell)",
  margin: "0 auto",
  padding: "0 var(--gutter) var(--section-y)",
  overflowX: "auto",
};

const noteStyle: React.CSSProperties = {
  maxWidth: "720px",
  margin: "2.5rem auto 0",
  padding: "1.6rem 1.8rem",
  border: "1px solid var(--line-strong)",
  borderRadius: "var(--radius)",
  background: "var(--onyx-2)",
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "var(--stone)",
};

const rows: { feature: string; pluto: string; organizze: string; mobills: string; monarch: string }[] = [
  { feature: "Sincronização bancária automática", pluto: "Não (ainda)", organizze: "Sim", mobills: "Sim", monarch: "Sim" },
  { feature: "Categorização por IA", pluto: "Sim (96% de confiança)", organizze: "Não", mobills: "Básica", monarch: "Sim" },
  { feature: "Assistente de IA conversacional", pluto: "Sim", organizze: "Não", mobills: "Não", monarch: "Não" },
  { feature: "Parcelamento como módulo dedicado", pluto: "Sim", organizze: "Não", mobills: "Não", monarch: "Não" },
  { feature: "Orçamento preenchido automaticamente", pluto: "Sim", organizze: "Não", mobills: "Não", monarch: "Não" },
  { feature: "Dívidas com simulação de cenários", pluto: "Sim", organizze: "Básico", mobills: "Básico", monarch: "Não" },
  { feature: "Funciona sem internet", pluto: "Sim", organizze: "Não", mobills: "Não", monarch: "Não" },
  { feature: "Multi-idioma", pluto: "5 idiomas", organizze: "Português", mobills: "Português", monarch: "Inglês" },
  { feature: "Desktop nativo", pluto: "Sim (macOS/Win/Linux)", organizze: "Não", mobills: "Não", monarch: "Sim (web)" },
  { feature: "2FA obrigatório", pluto: "Sim", organizze: "Não", mobills: "Não", monarch: "Sim" },
  { feature: "Tela de auditoria", pluto: "Sim", organizze: "Não", mobills: "Não", monarch: "Não" },
  { feature: "Open source", pluto: "Não", organizze: "Não", mobills: "Não", monarch: "Não" },
];

export function Comparativo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="page-hero" id="comparativo">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <p className="eyebrow"><span className="eyebrow__dot" />COMPARATIVO</p>
          <h1 className="page-hero__title">Pluto vs. os outros — sem esconder onde perdemos.</h1>
          <p className="page-hero__lede">
            A página mais honesta do site. Comparamos o Pluto com os principais
            apps de finanças pessoais do mercado, incluindo onde eles ainda
            estão à frente. Se a gente ganha em tudo, desconfie.
          </p>
        </div>
      </section>

      <div style={wrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Recurso</th>
              <th style={plutoHeadStyle}>Pluto</th>
              <th style={thStyle}>Organizze</th>
              <th style={thStyle}>Mobills</th>
              <th style={thStyle}>Monarch</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td style={featureCellStyle}>{row.feature}</td>
                <td style={plutoColStyle}>{row.pluto}</td>
                <td style={tdStyle}>{row.organizze}</td>
                <td style={tdStyle}>{row.mobills}</td>
                <td style={tdStyle}>{row.monarch}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={noteStyle}>
          <p style={{ margin: 0 }}>
            Sincronização bancária automática é a única área onde o Pluto ainda
            perde. É uma escolha deliberada de segurança — integramos via
            importação de extratos (CSV/OFX) até que a integração via Open
            Finance atenda aos nossos padrões. Em tudo o que depende de IA,
            parcelamento e controle, o Pluto está à frente.
          </p>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
