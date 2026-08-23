import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { icon: string; title: string; body: string };

const features: Feature[] = [
  {
    icon: "▼",
    title: "Dívidas ativas e quitadas",
    body: "Acompanhe todas as suas dívidas num só lugar — ativas e quitadas. Saldo devedor, parcela atual, taxa de juros, data prevista de quitação. O histórico fica acessível para você ver o caminho percorrido.",
  },
  {
    icon: "◈",
    title: "Simulação de cenários de aceleração",
    body: "Simule o que acontece se antecipar parcelas, aumentar o valor mensal ou quitar à vista. Pluto calcula quanto você economiza em juros e quantos meses encurta o prazo. Decida com números, não com achismo.",
  },
  {
    icon: "◐",
    title: "Parcelamentos com vencimento agrupado",
    body: "Todos os parcelamentos num painel só, agrupados por vencimento: atrasado, hoje, essa semana, mais adiante. Você vê de uma vez o que precisa pagar e quando — sem surpresa no fim do mês.",
  },
  {
    icon: "★",
    title: "Caminho para quitar",
    body: "O assistente de IA traça o caminho mais eficiente para quitar suas dívidas com base nos seus dados reais. Qual atacar primeiro, quanto destinar por mês, quando fica livre. Um plano, não uma esperança.",
  },
];

export function FuncionalidadeDividas() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="dividas">
        <div className="page-hero__inner">
          <a href="/features" className="blog-back">← Voltar para funcionalidades</a>
          <h1 className="page-hero__title">Dívidas e parcelamentos como módulo dedicado.</h1>
          <p className="page-hero__lede">
            No Brasil, quase tudo é parcelado. O Pluto trata isso como fato, não
            como exceção. Dívidas ativas e quitadas, simulação de cenários de
            aceleração e parcelamentos com vencimento agrupado — tudo num módulo
            que existe de verdade, não como um subproduto de transações.
          </p>
        </div>
      </section>

      <section className="feature-highlight">
        <div className="feature-highlight__box" data-reveal>
          <p className="feature-highlight__label">O maior diferencial real</p>
          <h2 className="feature-highlight__title">Nenhum concorrente trata parcelamento como módulo de primeira classe.</h2>
          <p className="feature-highlight__body">
            A maioria dos apps de finanças pessoais trata parcelamento como uma
            transação recorrente disfarçada. O Pluto tem um módulo dedicado:
            agrupamento por vencimento, simulação de aceleração, histórico de
            quitação. No Brasil, onde quase tudo é parcelado, isso não é
            detalhe — é o que separa um app que funciona de um que você abandona.
          </p>
        </div>
      </section>

      <section className="feature-detail__why">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Por que isso importa</p>
          <h2 className="section-title" data-reveal>No Brasil, quase tudo é parcelado.</h2>
        </div>
        <div className="feature-detail__why-box">
          <p>
            No Brasil, quase tudo é parcelado — do tênis ao carro. A maioria dos
            apps de finanças foi feita para mercados onde compra à vista é a
            norma. Eles tratam parcelamento como exceção, quando tratam. O Pluto
            <em> trata isso como fato, não como exceção</em>. Parcelamentos com
            vencimento agrupado, dívidas com simulação de cenários e um painel
            que mostra exatamente o que você deve e quando.
          </p>
        </div>
        <div className="screenshot-placeholder">[Screenshot real do beta — a ser adicionado]</div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Como o módulo funciona</p>
          <h2 className="section-title" data-reveal>Dívidas e parcelamentos num só lugar</h2>
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
