import { useParams, Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBand } from "../components/CtaBand";
import { ARTICLES } from "../data/content";

export function Article() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Seo path={`/recursos/${slug}`} title="Artigo não encontrado" />
        <section className="page-hero">
          <div className="container page-hero-inner">
            <h1>Artigo não encontrado</h1>
            <p className="section-lead">
              O artigo que você procura não existe ou foi movido.
            </p>
            <Link to="/recursos" className="btn btn-primary btn-lg">
              Ver todos os artigos
            </Link>
          </div>
        </section>
      </>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    articleSection: article.category,
    publisher: { "@type": "Organization", name: "Olympkus AI" },
  };

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Seo
        path={`/recursos/${article.slug}`}
        title={article.title}
        description={article.excerpt}
        type="article"
        jsonLd={[articleSchema]}
      />

      <article className="article-page">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <Link to="/recursos" className="back-link">← Voltar para o blog</Link>
            <span className="badge">{article.category}</span>
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.readTime} de leitura</span>
            </div>
          </div>
        </section>

        <section className="section article-body-section">
          <div className="container article-body">
            <div className="article-hero-media" aria-hidden="true" />

            <p className="article-lead">{article.excerpt}</p>

            <p>
              A inteligência artificial deixou de ser promessa. Em 2026, modelos
              de linguagem entendem contexto financeiro, categorizam transações
              com 98% de precisão e geram projeções que antes só um consultor
              humano conseguiria — em horas, não em segundos.
            </p>

            <h2>Por que agora?</h2>
            <p>
              Três coisas aconteceram ao mesmo tempo. A IA amadureceu. O Open
              Finance se consolidou no Brasil. E as pessoas cansaram de não
              entender o próprio dinheiro. O resultado é uma nova categoria de
              software: não mais planilha ou app de controle, mas um copiloto
              financeiro que entende você.
            </p>

            <h2>O que mudou no jogo</h2>
            <p>
              Antes, organizar finanças significava baixar extrato, categorizar
              manualmente, criar fórmula, atualizar gráfico. Trabalho repetitivo
              que comia horas por mês. A IA inverteu a equação: o software faz o
              pesado, você foca em decidir.
            </p>

            <blockquote>
              "A melhor ferramenta financeira é aquela que você esquece que
              existe — porque ela trabalha nos bastidores e só aparece quando
              tem algo importante a dizer."
            </blockquote>

            <h2>O que vem agora</h2>
            <p>
              A próxima fronteira não é automação — é antecipação. Em vez de
              relatar o que aconteceu, o software financeiro do futuro avisa o
              que vai acontecer e sugere o melhor caminho. É exatamente isso que
              construímos no Pluto: um assistente que pensa com você, não apenas
              registra pra você.
            </p>

            <p>
              Se você ainda gasta mais de 30 minutos por mês gerenciando
              finanças, repense. A tecnologia já está pronta. Falta só adotar.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Continue lendo</h2>
            <div className="articles-grid">
              {related.map((a) => (
                <Link key={a.slug} to={`/recursos/${a.slug}`} className="card article-card">
                  <div className="article-card-media" aria-hidden="true" />
                  <div className="article-card-body">
                    <span className="badge">{a.category}</span>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBand />
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
