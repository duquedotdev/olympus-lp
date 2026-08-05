import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hestia — Hábitos e metas com IA",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  publisher: { "@type": "Organization", name: "Olympkus AI" },
};

const FEATURES = [
  { icon: "target", title: "Hábitos com streaks", desc: "Mantenha a sequência. Cada dia consecutivo alimenta seu streak. Quebrou? Sem drama — a Hestia ajuda a recomeçar sem perder o progresso." },
  { icon: "brain", title: "Metas adaptativas", desc: "Defina um objetivo e a IA ajusta o plano conforme você avança. Escorregou? A Hestia recalcula. Adiantou? Aumenta o desafio. Sem julgamento, com incentivo." },
  { icon: "bell", title: "Lembretes contextuais", desc: "\"Beber água\" lembra quando você acorda. \"Alongar\" depois de 2 horas no computador. A Hestia sabe o contexto e lembra na hora certa." },
  { icon: "spark", title: "Insights com IA", desc: "Quais hábitos você mantém melhor? Que dia da semana você escorrega? A Hestia analisa seu padrão e sugere ajustes que funcionam pra você." },
  { icon: "chart", title: "Progresso visual", desc: "Veja sua evolução em gráficos claros. Streaks, taxa de adesão, metas alcançadas. O progresso vira motivação." },
  { icon: "users", title: "Hábitos compartilhados", desc: "Construa hábitos com sua família ou amigos. Veja o progresso uns dos outros, celebrem juntos. Hábitos em grupo duram mais." },
];

export function Hestia() {
  return (
    <>
      <Seo
        path="/hestia"
        title="Hestia — Hábitos e metas com IA"
        description="Construa hábitos com streaks, defina metas adaptativas e acompanhe seu progresso com IA. A Hestia te ajuda a chegar lá — sem julgamento."
        jsonLd={[productSchema]}
      />

      <section className="page-hero product-hero">
        <div className="container page-hero-inner">
          <span className="badge" style={{ background: "rgba(224, 112, 58, 0.14)", color: "#e0703a", borderColor: "rgba(224, 112, 58, 0.3)" }}>Hábitos & Metas · Em breve</span>
          <h1><span className="gradient-text">Hestia</span>. Hábitos que ficam.</h1>
          <p className="section-lead">
            Construa hábitos com streaks que motivam, defina metas inteligentes
            e acompanhe seu progresso com IA que ajusta o plano quando você
            escorrega — sem julgamento, com incentivo.
          </p>
          <div className="home-hero-cta">
            <Link to="/contato" className="btn btn-primary btn-lg">Quero acesso antecipado</Link>
            <a href="#recursos" className="btn btn-ghost btn-lg">Saber mais</a>
          </div>
        </div>
      </section>

      <section className="section" id="recursos">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recursos</span>
            <h2 className="section-title">Pequenos hábitos. Grandes mudanças.</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <article key={f.title} className="card feature-card">
                <div className="feature-icon"><Icon name={f.icon} size={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Mudança não acontece num dia. Acontece todo dia."
        desc="A Hestia está chegando. Seja um dos primeiros a testar."
        primary={{ label: "Quero acesso antecipado", to: "/contato" }}
        secondary={{ label: "Ver outros produtos", to: "/#produtos" }}
      />
    </>
  );
}
