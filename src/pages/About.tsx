import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";
import { FEATURES, STATS, SITE } from "../data/content";

const VALUES = [
  { title: "Clareza acima de tudo", desc: "Software não deveria complicar. Toda decisão de produto passa por uma pergunta: isso deixa a vida do usuário mais clara ou mais confusa?" },
  { title: "Segurança não é opcional", desc: "Dados financeiros exigem responsabilidade radical. Criptografia, LGPD e transparência não são diferencial — são o ponto de partida." },
  { title: "IA a serviço do humano", desc: "O Pluto recomenda, projeta e alerta. Mas a decisão é sempre sua. A IA é copiloto, não piloto automático. Você no controle." },
  { title: "Feito no Brasil", desc: "Entendemos a realidade financeira brasileira. PIX, IR, CNPJ, extratos de qualquer banco — tudo nativo, nada adaptado de gringo." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Olympkus AI",
    foundingDate: "2025",
    foundingLocation: "São Paulo, Brasil",
    slogan: SITE.slogan,
    description: SITE.description,
  },
};

export function About() {
  return (
    <>
      <Seo
        path="/sobre"
        title="Sobre a Olympkus AI"
        description="A Olympkus AI usa IA para devolver seu tempo e sua clareza. Conheça a missão, os valores e o time por trás do Pluto."
        jsonLd={[orgSchema]}
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="badge">Sobre nós</span>
          <h1>Devolvemos seu tempo. Devolvemos sua clareza.</h1>
          <p className="section-lead">
            A Olympkus AI nasceu de uma frustração que você provavelmente sente:
            gerenciar dinheiro ainda depende de planilha, app desconectado e
            decisão no escuro. Nós existimos pra acabar com isso.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div>
              <span className="eyebrow">Nossa missão</span>
              <h2 className="section-title">
                Inteligência financeira não deveria ser privilégio
              </h2>
              <p className="section-lead">
                Todo mundo merece entender para onde vai seu dinheiro e ter
                confiança pra decidir. Não só quem pode pagar um consultor
                financeiro. O Pluto democratiza isso com IA.
              </p>
            </div>
            <div className="about-mission-stats">
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Valores</span>
            <h2 className="section-title">O que nos guia quando ninguém está olhando</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <article key={v.title} className="card value-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">O que construímos</span>
            <h2 className="section-title">Tecnologia que trabalha. Pra você viver.</h2>
          </div>
          <div className="features-grid">
            {FEATURES.slice(0, 4).map((f) => (
              <article key={f.title} className="card feature-card">
                <div className="feature-icon">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer construir isso com a gente?"
        desc="Estamos sempre atrás de pessoas excepcionais."
        primary={{ label: "Ver carreiras", to: "/sobre" }}
        secondary={{ label: "Falar conosco", to: "/contato" }}
      />
    </>
  );
}
