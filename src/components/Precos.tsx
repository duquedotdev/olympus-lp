import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "R$ 0",
    period: "",
    description: "Para começar a organizar suas finanças",
    features: [
      "Dashboard financeira completa",
      "Transações manuais",
      "Categorização inteligente",
      "1 conta bancária",
      "Importação de extratos (CSV/OFX)",
    ],
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description: "Para quem quer mais controle",
    features: [
      "Tudo do Free, mais:",
      "Análise avançada de gastos",
      "Metas e objetivos ilimitados",
      "Orçamentos ilimitados",
      "Sugestões de economia com IA",
      "Contas ilimitadas",
      "Backup automático",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "R$ 49",
    period: "/mês",
    description: "Máximo controle e insights",
    features: [
      "Tudo do Pro, mais:",
      "Previsões financeiras com IA",
      "Análise de investimentos detalhada",
      "Planejamento de aposentadoria",
      "Consultoria financeira via chat 24/7",
      "Contas compartilhadas em família",
      "Ofertas exclusivas de parceiros",
      "Suporte VIP",
    ],
  },
];

const billingFaq: { q: string; a: string }[] = [
  {
    q: "É grátis durante o beta?",
    a: "Sim. Durante o beta fechado, todos os recursos estão disponíveis sem custo. Os planos pagos entram em vigor no lançamento oficial.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem fidelidade. Cancele a assinatura a qualquer momento e mantém o acesso até o fim do período pago.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "[A PREENCHER — formas de pagamento a definir]",
  },
  {
    q: "Tem desconto anual?",
    a: "[A PREENCHER]",
  },
  {
    q: "Plano família?",
    a: "O plano Premium inclui contas compartilhadas em família — até [A PREENCHER] membros.",
  },
];

export function Precos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="precos">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <p className="eyebrow"><span className="eyebrow__dot" />PLANOS</p>
          <h1 className="page-hero__title">Escolha o seu plano.</h1>
          <p className="page-hero__lede">
            Comece grátis. Faça upgrade quando precisar de mais controle.
            Sem fidelidade, sem surpresas — você cancela quando quiser.
          </p>
        </div>
      </section>

      <section className="product-pricing">
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`} key={i} data-reveal>
              {plan.highlight && <span className="pricing-card__badge mono">RECOMENDADO</span>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <p className="pricing-card__price">
                {plan.price}<span className="pricing-card__period">{plan.period}</span>
              </p>
              <p className="pricing-card__desc">{plan.description}</p>
              <ul className="pricing-card__features">
                {plan.features.map((f, j) => (
                  <li key={j} className={f.endsWith(":") ? "pricing-card__sep" : ""}>{f}</li>
                ))}
              </ul>
              <a href="/" className={`btn ${plan.highlight ? "btn--solid" : "btn--ghost"} pricing-card__cta`}>
                Entrar para a lista
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="product-faq">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Cobrança</p>
          <h2 className="section-title" data-reveal>Perguntas sobre planos e pagamento</h2>
        </div>
        <div className="faq__list">
          {billingFaq.map((item, i) => (
            <details className="faq__item" key={i} data-reveal>
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
