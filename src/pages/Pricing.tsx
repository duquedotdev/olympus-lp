import { useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { FAQ, PLANS } from "../data/content";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <Seo
        path="/precos"
        title="Preços"
        description="Plano grátis pra sempre, Pro por R$ 29,90/mês e Família por R$ 59,90/mês (até 3 usuários). Sem fidelidade, sem letra miúda, cancele com um clique."
        jsonLd={[faqSchema]}
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="badge">Preços</span>
          <h1>Comece grátis. Fique se valer a pena.</h1>
          <p className="section-lead">
            Sem cartão de crédito pra começar. Sem fidelidade pra sair. Sem
            letra miúda escondida. Você paga só se o Pluto te entregar valor.
          </p>

          <div className="billing-toggle">
            <button
              className={!annual ? "is-active" : ""}
              onClick={() => setAnnual(false)}
            >
              Mensal
            </button>
            <button
              className={annual ? "is-active" : ""}
              onClick={() => setAnnual(true)}
            >
              Anual <span className="toggle-save">-30%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((plan) => {
              const baseCents = parseInt(plan.price.replace(/[^\d]/g, "")) || 0;
              const monthlyCents = annual ? baseCents : Math.round(baseCents * 1.3);
              const reais = Math.floor(monthlyCents / 100);
              const centavos = monthlyCents % 100;
              const price = monthlyCents === 0
                ? "R$ 0"
                : `R$ ${reais},${String(centavos).padStart(2, "0")}`;
              return (
                <article
                  key={plan.name}
                  className={`card plan-card ${plan.highlight ? "is-highlight" : ""}`}
                >
                  {plan.highlight && <span className="plan-flag">Mais popular</span>}
                  <h3>{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="plan-price">
                    <strong>{price}</strong>
                    <span>{plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <Icon name="check" size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contato"
                    className={`btn btn-lg ${plan.highlight ? "btn-primary" : "btn-ghost"} plan-cta`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Dúvidas</span>
            <h2 className="section-title">Perguntas frequentes</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>
                  {item.q}
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band-section">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-glow" aria-hidden="true" />
            <h2>Ainda com dúvidas?</h2>
            <p>Fala com a gente. Respondemos em até 1 dia útil — pessoa pra pessoa, não bot.</p>
            <div className="cta-band-actions">
              <Link to="/contato" className="btn btn-primary btn-lg">Falar com a gente</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
