import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { icon: string; title: string; body: string };

const features: Feature[] = [
  {
    icon: "◐",
    title: "Todas num só lugar",
    body: "Streaming, academia, software, condomínio, internet, telefone. Todas as suas assinaturas e contas fixas numa tela só — não espalhadas entre app do banco, e-mail e memória.",
  },
  {
    icon: "◈",
    title: "Quanto você gasta por mês",
    body: "Pluto soma tudo e mostra o total mensal de recorrências. Você vê quanto da sua renda está comprometida com contas fixas — e se esse número faz sentido.",
  },
  {
    icon: "⚠",
    title: "Assinaturas esquecidas",
    body: "Aquela assinatura de streaming que você não assiste há 4 meses. O trial que virou pago e ninguém lembrou. Pluto identifica recorrências que parecem abandonadas e te avisa.",
  },
  {
    icon: "◑",
    title: "Lembretes de vencimento",
    body: "Notificação antes de cada cobrança recorrente — no celular e no desktop. Você sabe o que vai cair na conta antes que caia, sem surpresa no fim do mês.",
  },
];

export function FuncionalidadeRecorrencias() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="recorrencias">
        <div className="page-hero__inner">
          <a href="/funcionalidades" className="blog-back">← Voltar para funcionalidades</a>
          <p className="eyebrow"><span className="eyebrow__dot" />RECORRÊNCIAS</p>
          <h1 className="page-hero__title">Assinaturas e contas fixas num só lugar.</h1>
          <p className="page-hero__lede">
            Streaming, academia, software, condomínio, internet. O Pluto reúne
            todas as suas recorrências numa tela só, soma quanto você gasta por
            mês e identifica assinaturas esquecidas — aquelas que você paga e
            nem usa.
          </p>
        </div>
      </section>

      <section className="feature-detail__why">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Por que isso importa</p>
          <h2 className="section-title" data-reveal>Você provavelmente está pagando por algo que não usa.</h2>
        </div>
        <div className="feature-detail__why-box">
          <p>
            Pesquisas repetidas mostram a mesma coisa: a maioria das pessoas
            subestima quanto gasta com assinaturas — e uma parcela significativa
            paga por pelo menos uma que não usa mais. O problema não é o valor
            de cada uma, é que <em>ninguém tem todas na mesma tela</em>. O Pluto
            coloca tudo junto, soma o total e aponta o que parece abandonado.
            Cancelar uma assinatura de R$ 30 que você não usa há meses é
            economia invisível — até alguém te mostrar.
          </p>
        </div>
        <div className="screenshot-placeholder">[Screenshot real do beta — a ser adicionado]</div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Como as recorrências funcionam</p>
          <h2 className="section-title" data-reveal>Cobranças fixas sem surpresa</h2>
        </div>
        <div className="product-features__grid">
          {features.map((f, i) => (
            <article className="product-feature" key={i} data-reveal>
              <span className="product-feature__icon" aria-hidden="true">{f.icon}</span>
              <h3 className="product-feature__title">{f.title}</h3>
              <p className="product-feature__body">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
