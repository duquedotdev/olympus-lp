import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type ContactCard = {
  label: string;
  email: string;
  description: string;
};

const contacts: ContactCard[] = [
  {
    label: "Suporte",
    email: "[A PREENCHER — email de suporte]",
    description: "Dúvidas sobre o app, bugs, problemas técnicos.",
  },
  {
    label: "Imprensa",
    email: "imprensa@olympkus.ai",
    description: "Jornalistas e criadores de conteúdo. Veja também nossa sala de imprensa em /press.",
  },
  {
    label: "Privacidade/LGPD",
    email: "privacidade@olympkus.ai",
    description: "Questões sobre seus dados, exercício de direitos LGPD.",
  },
  {
    label: "Jurídico",
    email: "legal@olympkus.ai",
    description: "Assuntos legais e contratos.",
  },
  {
    label: "Parcerias/Institucional",
    email: "[A PREENCHER — email geral]",
    description: "Parcerias, investidores e contato institucional.",
  },
];

const socials: { label: string; url: string }[] = [
  { label: "Discord", url: "https://discord.gg/Y5GxgEY8Zt" },
  { label: "LinkedIn", url: "https://linkedin.com/company/olympkusai" },
  { label: "Instagram", url: "https://instagram.com/olympkus" },
  { label: "TikTok", url: "https://tiktok.com/@olympkus" },
];

export function Contato() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="contato">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <p className="eyebrow"><span className="eyebrow__dot" />CONTATO</p>
          <h1 className="page-hero__title">Fale com a gente — pelo canal certo.</h1>
          <p className="page-hero__lede">
            Cada assunto tem um endereço. Escolha o que mais combina com a sua
            necessidade e escreva direto — sem formulário intermediário.
          </p>
        </div>
      </section>

      <section className="product-pricing">
        <div className="panteao-grid">
          {contacts.map((c, i) => (
            <article className="panteao-card" key={i} data-reveal>
              <div className="panteao-card__head">
                <span className="panteao-card__glyph" aria-hidden="true">✉</span>
                <span className="panteao-card__domain mono">{c.label.toUpperCase()}</span>
              </div>
              <h3 className="panteao-card__name">
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </h3>
              <p className="panteao-card__desc">{c.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="prose">
        <div className="prose__inner">
          <h2>Redes sociais</h2>
          <p>
            Acompanhe a Olympkus e participe da comunidade:
          </p>
          <ol>
            {socials.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
