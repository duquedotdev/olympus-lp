import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";
import { InteriorHero } from "./interior-hero.tsx";
import { SocialLinks } from "./SocialLinks.tsx";

type ContactCard = {
  label: string;
  email: string;
  description: string;
};

const contacts: ContactCard[] = [
  {
    label: "Support",
    email: "support@olympkusai.com",
    description: "Dúvidas sobre o app, bugs, problemas técnicos.",
  },
  {
    label: "Press",
    email: "press@olympkusai.com",
    description: "Jornalistas e criadores de conteúdo. Veja também nossa sala de imprensa em /press.",
  },
  {
    label: "Privacy/LGPD",
    email: "privacy@olympkusai.com",
    description: "Questões sobre seus dados, exercício de direitos LGPD.",
  },
  {
    label: "Legal",
    email: "legal@olympkusai.com",
    description: "Assuntos legais e contratos.",
  },
  {
    label: "General",
    email: "hello@olympkusai.com",
    description: "Parcerias, investidores e contato institucional.",
  },
];

export function Contato() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <InteriorHero id="contato">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <h1 className="page-hero__title">Fale com a gente — pelo canal certo.</h1>
          <p className="page-hero__lede">
            Cada assunto tem um endereço. Escolha o que mais combina com a sua
            necessidade e escreva direto — sem formulário intermediário.
          </p>
        </div>
      </InteriorHero>

      <section className="product-pricing">
        <div className="panteao-grid contact-grid">
          {contacts.map((c, i) => (
            <article className="panteao-card" key={i} data-reveal>
              <div className="panteao-card__head">
                <span className="panteao-card__glyph" aria-hidden="true">✉</span>
                <span className="panteao-card__domain mono">{c.label.toUpperCase()}</span>
              </div>
              <h3 className="panteao-card__name contact-card__email">
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </h3>
              <p className="panteao-card__desc">{c.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="prose">
        <div className="prose__inner">
          <SocialLinks />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
