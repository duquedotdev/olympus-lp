import { Link } from "react-router-dom";

export function CtaBand({
  title = "Sua vida financeira começa a ficar leve hoje",
  desc = "Grátis pra começar. Sem cartão de crédito, sem fidelidade.",
  primary = { label: "Começar grátis", to: "/pluto" },
  secondary = { label: "Falar com a gente", to: "/contato" },
}: {
  title?: string;
  desc?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="section cta-band-section">
      <div className="container">
        <div className="cta-band">
          <div className="cta-band-glow" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="cta-band-actions">
            <Link to={primary.to} className="btn btn-primary btn-lg">
              {primary.label}
            </Link>
            <Link to={secondary.to} className="btn btn-ghost btn-lg">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
