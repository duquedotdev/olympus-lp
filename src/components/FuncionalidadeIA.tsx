import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { icon: string; title: string; body: string };

const features: Feature[] = [
  {
    icon: "✦",
    title: "Chat com raciocínio visível",
    body: "O assistente mostra o raciocínio passo a passo antes de responder. Cada etapa do chain of thought é exibida com o ícone do nó que a gerou. Você vê como chegou à conclusão, não só a resposta. Markdown renderizado, anexo de arquivos e streaming em tempo real.",
  },
  {
    icon: "✧",
    title: "Categorização com 96% de confiança",
    body: "Pluto sugere a categoria correta para cada transação com 96% de confiança. Você aprova com um toque — não precisa categorizar tudo manualmente. Quanto mais você usa, mais calibrado fica.",
  },
  {
    icon: "★",
    title: "Insights e quick wins",
    body: "Auditoria de assinaturas, caminho para quitar dívidas, projeção de metas e oportunidades de economia — gerados automaticamente a partir dos seus dados. O assistente encontra o que você não estava procurando.",
  },
  {
    icon: "☆",
    title: "Histórico de conversas",
    body: "Cada conversa fica salva e agrupada por data — hoje, ontem, última semana, últimos 30 dias. Volte a qualquer conversa anterior e continue de onde parou. Nada se perde.",
  },
  {
    icon: "◈",
    title: "Sugestões prontas",
    body: "Não precisa saber o que perguntar. O assistente oferece atalhos: analisar gastos, revisar orçamento, checar metas, pedir dicas. Um toque e a conversa começa.",
  },
];

export function FuncionalidadeIA() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="ia">
        <div className="page-hero__inner">
          <a href="/features" className="blog-back">← Voltar para funcionalidades</a>
          <img src="/ia_logo.svg" alt="" className="page-hero__logo" aria-hidden="true" />
          <h1 className="page-hero__title">Assistente de IA com raciocínio visível.</h1>
          <p className="page-hero__lede">
            O assistente de IA do Pluto não entrega só a resposta — mostra como
            chegou até ela. Chat streaming com chain of thought exibido em tempo
            real, categorização automática com 96% de confiança e insights que
            surgem dos seus dados sem você precisar perguntar.
          </p>
        </div>
      </section>

      <section className="feature-detail__why">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Por que isso importa</p>
          <h2 className="section-title" data-reveal>Categorizar tudo manualmente é o trabalho que ninguém cumpre.</h2>
        </div>
        <div className="feature-detail__why-box">
          <p>
            Todo app de finanças pede que você categorize cada transação à mão.
            É o trabalho que faz as pessoas abandonarem no segundo mês. O
            assistente de IA do Pluto faz a categorização com 96% de confiança —
            <em> você aprova, não digita</em>. E quando você quer entender seus
            gastos, pergunta em linguagem natural e recebe a resposta com o
            raciocínio visível. Não é uma caixa preta: você vê cada passo.
          </p>
        </div>
        <div className="screenshot-placeholder">[Screenshot real do beta — a ser adicionado]</div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Recursos</p>
          <h2 className="section-title" data-reveal>O que o assistente faz</h2>
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
