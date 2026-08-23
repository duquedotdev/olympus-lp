import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { icon: string; title: string; body: string };

const features: Feature[] = [
  {
    icon: "▣",
    title: "Orçamentos por categoria",
    body: "Crie orçamentos semanais, mensais, trimestrais ou anuais por categoria. Acompanhe quanto já gastou e quanto falta. Cada categoria tem seu próprio ritmo — o Pluto respeita isso.",
  },
  {
    icon: "◐",
    title: "Alertas de limite",
    body: "Receba alertas ao se aproximar do limite. Não é no dia que estoura — é antes, quando ainda dá tempo de ajustar. Notificações no celular e no desktop.",
  },
  {
    icon: "◇",
    title: "Auto-seed baseado em pirâmide de Maslow",
    body: "Pluto sugere valores iniciais para cada categoria com base na pirâmide de Maslow — necessidades básicas primeiro, depois o resto. Você começa com um orçamento que faz sentido, não com uma tela em branco.",
  },
  {
    icon: "◈",
    title: "Visão consolidada",
    body: "Veja todos os orçamentos num só painel. Quanto já gastou, quanto falta, quais estão saudáveis e quais precisam de atenção. Sem navegar entre telas.",
  },
];

export function FuncionalidadeOrcamentos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="orcamentos">
        <div className="page-hero__inner">
          <a href="/features" className="blog-back">← Voltar para funcionalidades</a>
          <h1 className="page-hero__title">Orçamentos que se montam sozinhos.</h1>
          <p className="page-hero__lede">
            Orçamento manual é a razão número um de abandono de apps financeiros.
            O Pluto sugere valores iniciais com base na pirâmide de Maslow, acompanha
            cada categoria e te avisa antes do limite — não depois.
          </p>
        </div>
      </section>

      <section className="feature-detail__why">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Por que isso importa</p>
          <h2 className="section-title" data-reveal>Orçamento manual é a razão #1 de abandono.</h2>
        </div>
        <div className="feature-detail__why-box">
          <p>
            Pesquisas mostram que a maioria das pessoas abandona apps financeiros
            no segundo mês — e o orçamento manual é o motivo principal. Montar
            do zero, ajustar categoria por categoria, lembrar de atualizar. O
            Pluto corta esse trabalho: <em>sugere os valores, acompanha sozinho
            e alerta antes do problema</em>. Você aprova, não administra.
          </p>
        </div>
        <div className="screenshot-placeholder">[Screenshot real do beta — a ser adicionado]</div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Como os orçamentos funcionam</p>
          <h2 className="section-title" data-reveal>Orçamentos que se montam sozinhos</h2>
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
