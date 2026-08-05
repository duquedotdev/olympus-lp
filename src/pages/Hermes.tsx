import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hermes — Foco e gestão de tempo com IA",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  publisher: { "@type": "Organization", name: "Olympkus AI" },
};

const FEATURES = [
  { icon: "lock", title: "Bloqueio de distrações", desc: "Instagram, TikTok, YouTube — bloqueie com um toque. O Hermes sabe quais apps roubam sua atenção e te protege de você mesmo." },
  { icon: "chart", title: "Analytics de tempo", desc: "Veja exatamente quanto tempo você gasta em cada app, cada site, cada atividade. Sem julgamento — com clareza para mudar." },
  { icon: "bolt", title: "Modo foco com IA", desc: "A IA aprende seus padrões: quando você rende mais, quando você escorrega. Sugere o melhor horário para foco profundo e ativa o modo automaticamente." },
  { icon: "target", title: "Metas de tempo", desc: "\"2 horas de trabalho profundo por dia.\" O Hermes acompanha, avisa quando você está perto e comemora quando você chega." },
  { icon: "bell", title: "Alertas inteligentes", desc: "Não é só bloquear. O Hermes avisa quando você está 20 minutos no Instagram e sugere uma pausa. Gentil, chato, eficaz." },
  { icon: "trend", title: "Relatórios de produtividade", desc: "Semana, mês, ano. Veja sua evolução. O Hermes mostra tendências e sugere ajustes pra você proteger o que importa." },
];

export function Hermes() {
  return (
    <>
      <Seo
        path="/hermes"
        title="Hermes — Foco e gestão de tempo com IA"
        description="Bloqueie distrações, acompanhe seu tempo e entre em modo foco com IA. O Hermes protege sua atenção e devolve seu tempo."
        jsonLd={[productSchema]}
      />

      <section className="page-hero product-hero">
        <div className="container page-hero-inner">
          <span className="badge" style={{ background: "rgba(162, 74, 194, 0.14)", color: "#a24ac2", borderColor: "rgba(162, 74, 194, 0.3)" }}>Foco & Tempo · Em breve</span>
          <h1><span className="gradient-text">Hermes</span>. Foco profundo. Zero distração.</h1>
          <p className="section-lead">
            Bloqueie apps que roubam sua atenção, acompanhe quanto tempo você
            gasta em cada coisa e entre em modo foco com um toque. A IA aprende
            seus padrões e protege seu tempo mais produtivo.
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
            <h2 className="section-title">Sua atenção é seu bem mais valioso. Proteja.</h2>
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
        title="Recupere seu tempo. Recupere sua atenção."
        desc="O Hermes está chegando. Seja um dos primeiros a testar."
        primary={{ label: "Quero acesso antecipado", to: "/contato" }}
        secondary={{ label: "Ver outros produtos", to: "/#produtos" }}
      />
    </>
  );
}
