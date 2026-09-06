import { useEffect, useState } from "react";
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const assunto = formData.get("assunto") as string;
    formData.set("subject", `Contato — ${assunto}`);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          <h2>Ou escreva agora</h2>
          <p>Preencha o formulário e a mensagem chega direto no meu e-mail.</p>

          {status === "success" ? (
            <p className="help-form__success" role="status">
              Mensagem enviada. Obrigado — respondo o quanto antes.
            </p>
          ) : (
            <form className="help-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="46934dd6-15ce-4411-a348-3a47dc642f44" />
              <input type="hidden" name="from_name" value="Olympkus — Contato" />
              <input type="checkbox" name="botcheck" className="help-form__honeypot" tabIndex={-1} autoComplete="off" />

              <label className="help-form__label">
                <span>Nome</span>
                <input type="text" name="name" required placeholder="Seu nome" />
              </label>

              <label className="help-form__label">
                <span>E-mail</span>
                <input type="email" name="email" required placeholder="voce@email.com" />
              </label>

              <label className="help-form__label">
                <span>Assunto</span>
                <input type="text" name="assunto" required placeholder="Sobre o que é?" />
              </label>

              <label className="help-form__label">
                <span>Mensagem</span>
                <textarea name="message" required rows={5} placeholder="Como posso ajudar?" />
              </label>

              <button type="submit" className="btn btn--solid help-form__submit" disabled={status === "sending"}>
                {status === "sending" ? "Enviando…" : "Enviar mensagem"}
              </button>

              {status === "error" && (
                <p className="help-form__error" role="alert">
                  Algo deu errado. Tente novamente ou escreva para{" "}
                  <a href="mailto:hello@olympkusai.com">hello@olympkusai.com</a>.
                </p>
              )}
            </form>
          )}

          <SocialLinks />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
