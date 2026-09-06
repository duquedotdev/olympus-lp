import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";
import { InteriorHero } from "./interior-hero.tsx";

type Feature = { icon: string; title: string; body: string };

const features: Feature[] = [
  {
    icon: "✦",
    title: "Chat com raciocínio visível",
    body: "O agente mostra o raciocínio passo a passo antes de responder. Você vê como chegou à conclusão, não só a resposta. Markdown renderizado, anexo de arquivos e streaming em tempo real.",
  },
  {
    icon: "✧",
    title: "Categorização com alta confiança",
    body: "O agente sugere a categoria correta para cada transação com alta confiança. Você aprova com um toque — não precisa categorizar tudo manualmente. Quanto mais você usa, mais calibrado fica.",
  },
  {
    icon: "★",
    title: "Insights e quick wins",
    body: "Auditoria de assinaturas, caminho para quitar dívidas, projeção de metas e oportunidades de economia — gerados automaticamente a partir dos seus dados. O agente encontra o que você não estava procurando.",
  },
  {
    icon: "☆",
    title: "Leitura de documentos",
    body: "Envie uma foto de recibo, o PDF de uma fatura ou o extrato do banco. O agente lê cada linha, entende valores e datas, e registra tudo sozinho. Sem digitação manual.",
  },
  {
    icon: "◈",
    title: "Sugestões prontas",
    body: "Não precisa saber o que perguntar. O agente oferece atalhos: analisar gastos, revisar orçamento, checar metas, pedir dicas. Um toque e a conversa começa.",
  },
  {
    icon: "◐",
    title: "Histórico de conversas",
    body: "Cada conversa fica salva e agrupada por data — hoje, ontem, última semana, últimos 30 dias. Volte a qualquer conversa anterior e continue de onde parou. Nada se perde.",
  },
];

type Difference = { icon: string; title: string; before: string; after: string };

const differences: Difference[] = [
  {
    icon: "▣",
    title: "Entrada de dados",
    before: "Você digita cada transação manualmente ou importa um CSV que ninguém revisa.",
    after: "Você envia uma foto ou documento. O agente lê, entende e registra tudo sozinho.",
  },
  {
    icon: "◇",
    title: "Entendimento",
    before: "O app mostra gráficos e números. A interpretação fica com você.",
    after: "O agente raciocina sobre os seus dados e te explica, em linguagem natural, o que está acontecendo.",
  },
  {
    icon: "◆",
    title: "Ação",
    before: "O app te avisa de um problema. Você decide o que fazer e faz manualmente.",
    after: "O agente prepara a solução — renegociação, transferência, ajuste de orçamento — e você só aprova.",
  },
  {
    icon: "◐",
    title: "Evolução",
    before: "O app é o mesmo no primeiro dia e no centésimo. Não aprende com você.",
    after: "O agente aprende com cada interação. Quando erra, corrige sozinho e não repete o erro.",
  },
];

export function FuncionalidadeFinanceAgent() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <InteriorHero id="finance-agent">
        <div className="page-hero__inner">
          <a href="/features" className="blog-back">← Voltar para funcionalidades</a>
          <h1 className="page-hero__title">Uma suíte agêntica para suas finanças.</h1>
          <p className="page-hero__lede">
            A maioria dos apps de finanças é um espelho: mostra onde seu dinheiro
            foi. A Olympkus construiu algo diferente — uma suíte agêntica que lê
            seus documentos, raciocina sobre seus dados, categoriza transações,
            antecipa problemas e prepara ações para você aprovar. Você não é o
            operador. Você é quem decide.
          </p>
        </div>
      </InteriorHero>

      <section className="feature-detail__why">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Por que isso é diferente</p>
          <h2 className="section-title" data-reveal>Nenhum app faz isso. Nenhum.</h2>
        </div>
        <div className="feature-detail__why-box">
          <p>
            Apps de finanças mostram. Você faz todo o resto — digita, categoriza,
            interpreta, decide, executa. A Olympkus trocou esse modelo. Em vez de
            um dashboard que espera que você trabalhe, uma suíte agêntica que
            trabalha por você. Ela lê seus documentos, entende cada linha,
            raciocina sobre o que encontrou e age. A diferença não é incremental —
            é outro paradigma.
          </p>
        </div>
        <div className="screenshot-placeholder">[Screenshot real do beta — a ser adicionado]</div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Recursos</p>
          <h2 className="section-title" data-reveal>O que a suíte faz</h2>
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

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Antes e depois</p>
          <h2 className="section-title" data-reveal>O que muda no seu dia</h2>
        </div>
        <div className="product-features__grid">
          {differences.map((d, i) => (
            <article className="product-feature" key={i} data-reveal>
              <span className="product-feature__icon" aria-hidden="true">{d.icon}</span>
              <h3 className="product-feature__title">{d.title}</h3>
              <p className="product-feature__body">
                <span className="comparison-before">Apps de finanças — </span>
                {d.before}
              </p>
              <p className="product-feature__body">
                <span className="comparison-after">Olympkus — </span>
                {d.after}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
