import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { icon: string; title: string; body: string };

const features: Feature[] = [
  {
    icon: "◆",
    title: "Metas financeiras",
    body: "Reserva de emergência, quitar dívida, investir, poupar para uma viagem. Cada meta tem um valor alvo e uma data. Pluto acompanha progresso, contribuições e projeta quando você chega lá.",
  },
  {
    icon: "◇",
    title: "Lista de desejos",
    body: "Guarde o que quer comprar com preço, categoria e data alvo. Pluto acompanha quanto você já juntou e te avisa quando pode comprar — sem comprometer o orçamento.",
  },
  {
    icon: "◈",
    title: "Progresso visível",
    body: "Cada meta mostra uma barra de progresso, quanto falta e a projeção de conclusão baseada no seu ritmo atual. Não é um número solto — é um plano com data.",
  },
  {
    icon: "★",
    title: "Projeção inteligente",
    body: "O assistente de IA projeta quando você vai chegar na meta com base nos aportes reais. Se o ritmo não bate, sugere ajustes — não promessas vazias.",
  },
];

export function FuncionalidadeMetas() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="metas">
        <div className="page-hero__inner">
          <a href="/features" className="blog-back">← Voltar para funcionalidades</a>
          <h1 className="page-hero__title">Metas e lista de desejos.</h1>
          <p className="page-hero__lede">
            Reserva de emergência, quitar dívida, investir, poupar para uma
            viagem. O Pluto transforma intenção em plano — com progresso visível,
            projeção baseada no seu ritmo e lista de desejos que avisa quando
            você pode comprar sem comprometer o orçamento.
          </p>
        </div>
      </section>

      <section className="feature-detail__why">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Por que isso importa</p>
          <h2 className="section-title" data-reveal>Transformar intenção em plano com progresso visível.</h2>
        </div>
        <div className="feature-detail__why-box">
          <p>
            Todo mundo tem metas financeiras. Poucos as transformam em plano.
            A diferença entre "quero juntar R$ 10 mil" e "juntar R$ 10 mil até
            dezembro a R$ 830 por mês" é a diferença entre intenção e execução.
            O Pluto faz essa tradução: <em>valor alvo, data, ritmo, progresso
            visível</em>. E quando o ritmo não bate, ajusta — não deixa a meta
            virar mais uma promessa de ano novo.
          </p>
        </div>
        <div className="screenshot-placeholder">[Screenshot real do beta — a ser adicionado]</div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Como as metas funcionam</p>
          <h2 className="section-title" data-reveal>Metas com progresso visível</h2>
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
