import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { HlsVideo } from "../components/HlsVideo";
import { Icon } from "../components/Icon";
import { ARTICLES, PRODUCTS, SITE } from "../data/content";

const HERO_VIDEO =
  "https://stream.mux.com/JFHOwdZ8ujlrDDSLujoSv9su9PQb5001CiRiNdMgIjnk.m3u8";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olympkus AI",
  url: SITE.url,
  slogan: SITE.slogan,
  description: SITE.description,
  foundingDate: "2025",
  areaServed: "BR",
  knowsLanguage: "pt-BR",
};

const HIGHLIGHTS = [
  {
    title: "IA que trabalha por você",
    blurb:
      "Não é mais automação. É antecipação. Nossos produtos percebem o que você nem notou, projetam o que vai acontecer e recomendam o melhor caminho.",
    tag: "Tecnologia",
  },
  {
    title: "Cinco produtos. Uma só conta.",
    blurb:
      "Finanças, agenda, notas, foco e hábitos — todos conectados, todos com IA. Comece com um, expanda para os outros. Sem friction.",
    tag: "Plataforma",
  },
  {
    title: "Feito no Brasil. Para o Brasil.",
    blurb:
      "PIX, DAS, IRPF, carnê, feriados nacionais, português real. Entendemos a sua realidade porque vivemos ela. Nada adaptado de gringo.",
    tag: "Origem",
  },
];

export function Home() {
  return (
    <>
      <Seo
        path="/"
        description={SITE.description}
        jsonLd={[orgSchema]}
      />

      <section className="hero">
        <HlsVideo className="hero-video" src={HERO_VIDEO} />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">
          <h1 className="hero-title">
            AI at work.<br /><span className="gradient-text">Life at ease.</span>
          </h1>
          <p className="hero-sub">
            Cinco aplicativos de produtividade com IA. Finanças, agenda, notas,
            foco e hábitos — <strong>tudo trabalhando a seu favor</strong>,
            tudo num só ecossistema.
          </p>
          <div className="hero-cta">
            <Link to="/pluto" className="btn btn-primary btn-lg">Conhecer os produtos</Link>
            <Link to="/precos" className="btn btn-ghost btn-lg">Ver preços</Link>
          </div>
        </div>
      </section>

      {/* ===== Products ===== */}
      <section className="products" id="produtos">
        <div className="container">
          <div className="products-head">
            <span className="eyebrow">Ecossistema Olympkus</span>
            <h2 className="section-title">
              Cinco produtos. <span className="gradient-text">Uma IA que trabalha.</span>
            </h2>
            <p className="section-lead">
              Cada produto resolve um problema. Juntos, cuidam da sua vida
              inteira. Escolha por onde começar — a IA faz o resto.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                className={`product-card ${p.status === "Em breve" ? "is-soon" : ""}`}
              >
                <div className="product-card-top">
                  <div className="product-card-icon" style={{ color: p.color }}>
                    <Icon name={p.icon} size={28} />
                  </div>
                  <span className={`product-card-status ${p.status === "Disponível" ? "is-live" : "is-soon"}`}>
                    {p.status}
                  </span>
                </div>
                <div className="product-card-body">
                  <span className="product-card-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p className="product-card-tagline">{p.tagline}</p>
                  <p className="product-card-desc">{p.desc}</p>
                </div>
                <div className="product-card-features">
                  {p.features.map((f) => (
                    <span key={f} className="product-feature-chip">{f}</span>
                  ))}
                </div>
                <span className="product-card-cta">
                  {p.status === "Disponível" ? "Explorar" : "Saber mais"} <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section className="research" id="recursos">
        <div className="container">
          <div className="research-head">
            <span className="eyebrow">Por que Olympkus</span>
            <h2 className="section-title">
              Não é mais um app. É uma IA que cuida da sua vida.
            </h2>
            <p className="research-sub">
              Construímos cinco produtos sobre a mesma inteligência. Eles se
              entendem, se conectam e trabalham juntos — pra você não ter que
              fazer o trabalho deles.
            </p>
            <Link to="/manifesto" className="btn btn-ghost">Saber mais</Link>
          </div>

          <div className="research-grid">
            {HIGHLIGHTS.map((item) => (
              <Link key={item.title} to="/tecnologia" className="research-card">
                <div className="research-media" aria-hidden="true">
                  <span className="research-tag">{item.tag}</span>
                </div>
                <div className="research-body">
                  <h3>
                    {item.title}
                    <span className="arrow">↗</span>
                  </h3>
                  <p>{item.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="news" id="novidades">
        <div className="container">
          <div className="news-head">
            <h2 className="section-title">Do blog Olympkus</h2>
          </div>
          <div className="news-grid">
            {ARTICLES.slice(0, 4).map((item, i) => (
              <Link
                key={item.slug}
                to={`/recursos/${item.slug}`}
                className={`news-card news-card-${i}`}
              >
                <div className="news-media" aria-hidden="true" />
                <div className="news-body">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="news-link">Ler artigo →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
