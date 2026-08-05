import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";
import { PRODUCTS } from "../data/content";

const techSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Tecnologia Olympkus AI",
  about: "A tecnologia por trás do ecossistema Olympkus — IA, segurança, sincronismo e integração",
};

const PILLARS = [
  {
    icon: "brain",
    title: "IA que entende português",
    tag: "Inteligência",
    desc: "Não é um modelo gringo traduzido. Construímos IA que entende português real, gírias, contexto tributário brasileiro e a forma como você fala sobre dinheiro, agenda, notas e hábitos. Pergunte em português. Responda em português.",
  },
  {
    icon: "sync",
    title: "Sincronismo instantâneo",
    tag: "Sync",
    desc: "Abra o Pluto no iPhone, mude um orçamento. Abra a Artemis no Mac, veja a reunião que você acabou de criar. Tudo sincroniza em milissegundos — sem loading, sem conflito, sem \"qual versão é a certa?\". Offline-first: funciona sem internet e sincroniza quando volta.",
  },
  {
    icon: "layers",
    title: "Integração nativa",
    tag: "Integração",
    desc: "Cinco produtos, uma só conta, uma só IA. O Pluto sabe que você tem uma reunião na Artemis e sugere revisar o orçamento antes. O Hermes sabe que você está em foco e silencia as notificações do Apolo. Eles se entendem. Trabalham juntos.",
  },
  {
    icon: "shield",
    title: "Segurança em cada camada",
    tag: "Segurança",
    desc: "Criptografia AES-256 em repouso, TLS 1.3 em trânsito, autenticação multifator. Dados nunca saem do Brasil. LGPD não é checkbox — é arquitetura. Nunca vendemos dados. Não é nosso modelo.",
  },
];

const DETAILS = [
  {
    title: "Sincronismo que você não percebe",
    desc: "Conflict-free Replicated Data Types (CRDTs) garantem que suas mudanças apareçam em todos os dispositivos instantaneamente. Sem botão \"sincronizar\". Sem versões conflitantes. Sem dor de cabeça. Você abre, usa, fecha. A tecnologia cuida do resto.",
    points: ["Offline-first", "Sync em milissegundos", "Zero conflito", "Todas as plataformas"],
  },
  {
    title: "Integração que parece mágica",
    desc: "Os produtos compartilham contexto através da IA. Não é uma integração forçada — é uma inteligência que entende sua vida inteira. O Hermes sabe seu foco. A Artemis sabe sua agenda. O Pluto sabe suas finanças. Juntos, cuidam de você.",
    points: ["Contexto compartilhado", "IA que conecta tudo", "Uma conta, cinco apps", "Notificações inteligentes"],
  },
  {
    title: "Segurança que você não precisa pensar",
    desc: "Tudo criptografado por padrão. Biometria no mobile, 2FA opcional na web. Seus dados são seus — sempre. Backup automático, recuperação segura, zero rastreamento para anúncios. Privacidade não é recurso. É fundação.",
    points: ["AES-256 + TLS 1.3", "Biometria nativa", "Zero rastreamento", "Backup automático"],
  },
];

const PLATFORMS = [
  { name: "iPhone", desc: "Nativo, biometria, widgets, push.", status: "Disponível" },
  { name: "iPad", desc: "Layout adaptado, Apple Pencil, split view.", status: "Disponível" },
  { name: "Mac", desc: "Atalhos de teclado, menu bar, sync total.", status: "Disponível" },
  { name: "Apple Watch", desc: "Lembretes, streaks, pomodoro no pulso.", status: "Em breve" },
  { name: "Android", desc: "Material You, widgets, biometria.", status: "Disponível" },
  { name: "Web", desc: "Qualquer navegador. Rápido, leve, completo.", status: "Disponível" },
];

export function Tecnologia() {
  return (
    <>
      <Seo
        path="/tecnologia"
        title="Tecnologia — Olympkus AI"
        description="IA que entende português, sincronismo instantâneo entre dispositivos, integração nativa entre cinco produtos e segurança em cada camada."
        jsonLd={[techSchema]}
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="badge">Tecnologia</span>
          <h1>IA que entende você. <span className="gradient-text">Tecnologia que some.</span></h1>
          <p className="section-lead">
            Cinco produtos. Uma só inteligência. Tudo sincroniza, tudo se
            conecta, tudo funciona — sem você precisar pensar na tecnologia
            por trás. É assim que deveria ser.
          </p>
          <div className="home-hero-cta">
            <Link to="/#produtos" className="btn btn-primary btn-lg">Ver os produtos</Link>
            <Link to="/pesquisa" className="btn btn-ghost btn-lg">Nossa pesquisa</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tech-layers">
            {PILLARS.map((p, i) => (
              <article key={p.title} className={`tech-layer ${i % 2 === 1 ? "is-reverse" : ""}`}>
                <div className="tech-layer-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="tech-layer-body">
                  <span className="tech-layer-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="tech-layer-icon" aria-hidden="true">
                  <Icon name={p.icon} size={32} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2 className="section-title">Detalhes que fazem a diferença.</h2>
          </div>
          <div className="tech-details">
            {DETAILS.map((d) => (
              <article key={d.title} className="card tech-detail-card">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <div className="tech-detail-points">
                  {d.points.map((pt) => (
                    <span key={pt} className="tech-detail-point">
                      <Icon name="check" size={14} /> {pt}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Plataformas</span>
            <h2 className="section-title">Onde você estiver. Tudo com você.</h2>
          </div>
          <div className="tech-platforms">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="tech-platform">
                <div className="tech-platform-head">
                  <h3>{p.name}</h3>
                  <span className={`tech-platform-status ${p.status === "Disponível" ? "is-live" : "is-soon"}`}>
                    {p.status}
                  </span>
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ecossistema</span>
            <h2 className="section-title">Cinco produtos. Uma IA. Você no centro.</h2>
          </div>
          <div className="tech-ecosystem">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} to={`/${p.slug}`} className="tech-ecosystem-item">
                <span className="tech-ecosystem-icon" style={{ color: p.color }}>
                  <Icon name={p.icon} size={22} />
                </span>
                <span className="tech-ecosystem-name">{p.name}</span>
                <span className="tech-ecosystem-cat">{p.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tecnologia que some. Para que você apareça."
        desc="Experimente o ecossistema Olympkus. Grátis pra começar."
        primary={{ label: "Começar grátis", to: "/precos" }}
        secondary={{ label: "Ler nossa pesquisa", to: "/pesquisa" }}
      />
    </>
  );
}
