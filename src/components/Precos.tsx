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
      "5 mensagens de IA por dia",
      "Dashboard financeira completa",
      "Transações manuais",
      "Categorização inteligente",
      "Importação de extratos (CSV/OFX)",
      "Contém anúncios",
    ],
  },
  {
    name: "Pro",
    price: "R$ 9,90",
    period: "/mês",
    description: "Para quem quer mais controle",
    features: [
      "Tudo do Free, mais:",
      "IA ilimitada sem bloqueio diário",
      "Sem anúncios em nenhuma tela",
      "Insights avançados de gastos",
      "Orçamentos ilimitados",
      "Metas ilimitadas",
      "Relatórios mensais automáticos",
      "Exportação de dados em CSV",
      "Temas e cores exclusivas",
    ],
    highlight: true,
  },
  {
    name: "Max",
    price: "R$ 19,90",
    period: "/mês",
    description: "Máximo controle e insights",
    features: [
      "Tudo do Pro, mais:",
      "IA com modelo prioritário",
      "Exportação avançada (PDF/Excel)",
      "Relatórios completos e detalhados",
      "Live Activities e widgets",
      "Categorias ilimitadas",
      "Backup automático na nuvem",
      "Suporte prioritário",
    ],
  },
];

const billingFaq: { q: string; a: string }[] = [
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem fidelidade. Cancele a assinatura a qualquer momento e mantém o acesso até o fim do período pago.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é processado pela Google Play Store no seu dispositivo Android. Você pode usar qualquer método de pagamento vinculado à sua conta Google.",
  },
  {
    q: "Tem desconto anual?",
    a: "Sim. Além do plano mensal, oferecemos planos anuais com desconto para Pro e Max. Consulte os valores diretamente no app — o preço é exibido em BRL conforme a sua região.",
  },
  {
    q: "Qual a diferença entre Pro e Max?",
    a: "O Pro remove anúncios, libera IA ilimitada, orçamentos e metas ilimitados, relatórios mensais e exportação em CSV. O Max inclui tudo isso mais IA com modelo prioritário, exportação em PDF/Excel, relatórios completos, Live Activities, categorias ilimitadas e backup automático na nuvem.",
  },
  {
    q: "O plano Free tem limites?",
    a: "O Free permite 5 mensagens de IA por dia e exibe anúncios. Todas as outras funcionalidades de organização financeira (dashboard, transações, categorização, importação de extratos) estão disponíveis sem custo.",
  },
];

export function Precos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="precos">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
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
