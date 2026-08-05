import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBand } from "../components/CtaBand";
import { ARTICLES } from "../data/content";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Olympkus AI",
  publisher: { "@type": "Organization", name: "Olympkus AI" },
  blogPost: ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    datePublished: a.date,
    articleSection: a.category,
  })),
};

const CATEGORIES = ["Todos", "Inteligência Artificial", "Produto", "Educação", "Finanças", "Segurança", "Produtividade"];

export function Resources() {
  return (
    <>
      <Seo
        path="/recursos"
        title="Blog & Recursos"
        description="Artigos, guias e bastidores sobre IA, finanças pessoais e o Pluto. Informação direta, sem enrolação, pra você decidir melhor."
        jsonLd={[blogSchema]}
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="badge">Blog</span>
          <h1>Finanças com IA, explicadas sem enrolação</h1>
          <p className="section-lead">
            Artigos, guias e bastidores do Pluto. Informação direta pra você
            tomar decisões melhores — não pra te deixar mais confuso.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container">
          <Link to={`/recursos/${ARTICLES[0].slug}`} className="card featured-article">
            <div className="featured-article-media" aria-hidden="true" />
            <div className="featured-article-body">
              <span className="badge">{ARTICLES[0].category}</span>
              <h2>{ARTICLES[0].title}</h2>
              <p>{ARTICLES[0].excerpt}</p>
              <div className="article-meta">
                <span>{formatDate(ARTICLES[0].date)}</span>
                <span>·</span>
                <span>{ARTICLES[0].readTime} de leitura</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="article-filters">
            {CATEGORIES.map((cat) => (
              <button key={cat} className={cat === "Todos" ? "is-active" : ""}>
                {cat}
              </button>
            ))}
          </div>

          <div className="articles-grid">
            {ARTICLES.slice(1).map((a) => (
              <Link key={a.slug} to={`/recursos/${a.slug}`} className="card article-card">
                <div className="article-card-media" aria-hidden="true" />
                <div className="article-card-body">
                  <span className="badge">{a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <div className="article-meta">
                    <span>{formatDate(a.date)}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Receba os melhores artigos no seu email"
        desc="Uma vez por mês. Sem spam, sem clickbait — só o que vale a pena ler."
        primary={{ label: "Quero receber", to: "/contato" }}
        secondary={{ label: "Conhecer o Pluto", to: "/pluto" }}
      />
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
