import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Apolo — Notas e conhecimento com IA",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  publisher: { "@type": "Organization", name: "Olympkus AI" },
};

const FEATURES = [
  { icon: "layers", title: "Links bidirecionais", desc: "Conecte ideias e o Apolo cria o caminho de volta. Cada nota sabe quem aponta pra ela. Seu conhecimento vira uma rede, não uma pilha." },
  { icon: "brain", title: "Wiki com IA", desc: "Escreva uma ideia e a IA encontra as relacionadas, sugere conexões que você nem imaginava e organiza tudo em tópicos. Seu segundo cérebro pensa com você." },
  { icon: "search", title: "Busca semântica", desc: "Procure por conceito, não por palavra exata. \"Aquela ideia sobre retenção de clientes\" encontra a nota — mesmo que não tenha essas palavras." },
  { icon: "chart", title: "Graph de conhecimento", desc: "Veja suas ideias como uma rede visual. Conexões, clusters e lacunas ficam óbvios. Entenda o que você sabe — e o que falta saber." },
  { icon: "sync", title: "Sincronização instantânea", desc: "Web, iOS, Android. Escreve num lugar, aparece em todos. Offline-first: funciona sem internet e sincroniza quando volta." },
  { icon: "lock", title: "Seu conhecimento é seu", desc: "Markdown puro, exportável, sem lock-in. Criptografia ponta a ponta opcional. Suas ideias nunca saem do seu controle." },
];

const STEPS = [
  { n: "01", title: "Escreva livremente", desc: "Sem estrutura, sem template. Digite o que estiver na sua cabeça. O Apolo cuida do resto." },
  { n: "02", title: "Conecte com [[colchetes]]", desc: "Use [[assim]] para linkar ideias. O Apolo cria a nota, o link bidirecional e a conexão no graph." },
  { n: "03", title: "A IA sugere conexões", desc: "Enquanto você escreve, a IA encontra notas relacionadas e sugere links. Você aceita ou ignora." },
  { n: "04", title: "Busque por conceito", desc: "Não lembra o título? Procure pela ideia. A busca semântica encontra — mesmo sem as palavras exatas." },
];

export function Apolo() {
  return (
    <>
      <Seo
        path="/apolo"
        title="Apolo — Notas e conhecimento com IA"
        description="Notas com links bidirecionais, wiki pessoal com IA e busca semântica. O Apolo é seu segundo cérebro — conectado, rápido e seu."
        jsonLd={[productSchema]}
      />

      <section className="page-hero product-hero">
        <div className="container page-hero-inner">
          <span className="badge" style={{ background: "rgba(58, 167, 194, 0.14)", color: "#3aa7c2", borderColor: "rgba(58, 167, 194, 0.3)" }}>Notas & Conhecimento</span>
          <h1><span className="gradient-text">Apolo</span>. Seu segundo cérebro.</h1>
          <p className="section-lead">
            Notas que se conectam sozinhas, wiki pessoal com IA e busca
            semântica. Escreva uma ideia e o Apolo encontra as relacionadas,
            sugere conexões e organiza tudo — pra você nunca perder uma ideia.
          </p>
          <div className="home-hero-cta">
            <Link to="/precos" className="btn btn-primary btn-lg">Começar grátis</Link>
            <a href="#como-funciona" className="btn btn-ghost btn-lg">Como funciona</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recursos</span>
            <h2 className="section-title">Seu conhecimento, conectado.</h2>
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

      <section className="section" id="como-funciona">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2 className="section-title">Do caos à clareza em 4 passos</h2>
          </div>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Suas ideias merecem um lugar melhor"
        desc="Grátis pra começar. Sem cartão de crédito, sem fidelidade."
        primary={{ label: "Começar grátis", to: "/precos" }}
        secondary={{ label: "Ver outros produtos", to: "/#produtos" }}
      />
    </>
  );
}
