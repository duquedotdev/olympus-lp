import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBand } from "../components/CtaBand";

const researchSchema = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Olympkus AI Research",
  description: "Pesquisa em IA aplicada a finanças pessoais no Brasil",
};

const AREAS = [
  {
    title: "Finanças pessoais com LLMs",
    status: "Em andamento",
    desc: "Como modelos de linguagem podem raciocinar sobre dados financeiros individuais sem alucinar. Desenvolvemos técnicas de grounded reasoning que mantêm cada resposta ancorada nos números reais do usuário — não em média de mercado.",
  },
  {
    title: "Categorização automática de transações",
    status: "Em produção",
    desc: "98% de precisão hoje. Pesquisamos como chegar em 99.5% com few-shot learning e feedback implícito. O objetivo: zero confirmação do usuário, zero erro.",
  },
  {
    title: "Projeções financeiras personalizadas",
    status: "Em andamento",
    desc: "Modelos de séries temporais que aprendem o padrão de cada usuário — não do mercado. Quanto você vai gastar em dezembro? Quando sua reserva fica pronta? Respostas com intervalo de confiança, não promessas.",
  },
  {
    title: "Agentes financeiros autônomos",
    status: "Explorando",
    desc: "E se o Pluto pudesse agir, não só recomendar? Pesquisamos agentes que executam ações com aprovação do usuário — investir automaticamente, quitar dívidas, rebalancear portfólio. O humano no controle, a IA no trabalho pesado.",
  },
  {
    title: "Educação financeira adaptativa",
    status: "Explorando",
    desc: "A IA que ensina finanças no contexto real do usuário. Não um curso genérico — explicações personalizadas baseadas nos seus gastos, suas metas, seus erros. Aprender fazendo, com a IA como tutor.",
  },
  {
    title: "Privacidade diferencial em finanças",
    status: "Em andamento",
    desc: "Como treinar modelos com dados financeiros de milhões de usuários sem nunca expor um único dado individual. Pesquisamos técnicas de privacidade diferencial e federated learning aplicadas a finanças.",
  },
];

const ROADMAP = [
  { phase: "Hoje", title: "Pluto — assistente financeiro", desc: "IA conversacional, categorização, metas, orçamentos, investimentos. Disponível em web, iOS e Android." },
  { phase: "2026", title: "API pública Pluto", desc: "Desenvolvedores integram o Pluto em seus próprios produtos. Webhooks, SDKs e documentação aberta." },
  { phase: "2027", title: "Agentes autônomos", desc: "Pluto executa ações financeiras com aprovação do usuário. Investimento automático, quitação de dívidas, rebalanceamento." },
  { phase: "Futuro", title: "Inteligência financeira universal", desc: "Uma IA que entende sua vida financeira inteira — pessoal, empresarial, investimentos, impostos — e trabalha a seu favor em todos os fronts." },
];

export function Pesquisa() {
  return (
    <>
      <Seo
        path="/pesquisa"
        title="Pesquisa — Olympkus AI"
        description="Pesquisamos IA aplicada a finanças pessoais: LLMs grounded, categorização automática, projeções personalizadas, agentes autônomos e privacidade diferencial."
        jsonLd={[researchSchema]}
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="badge">Pesquisa</span>
          <h1>Pesquisamos a fronteira da <span className="gradient-text">IA financeira</span></h1>
          <p className="section-lead">
            A IA que existe hoje é o começo. Pesquisamos como chegar num futuro
            onde gerenciar dinheiro não é mais uma tarefa — é algo que a IA faz
            por você, com você no controle. Estas são as direções que exploramos.
          </p>
          <div className="home-hero-cta">
            <Link to="/tecnologia" className="btn btn-primary btn-lg">Ver a tecnologia</Link>
            <Link to="/manifesto" className="btn btn-ghost btn-lg">Nosso manifesto</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Áreas de pesquisa</span>
            <h2 className="section-title">O que estamos explorando agora</h2>
          </div>
          <div className="research-areas">
            {AREAS.map((a) => (
              <article key={a.title} className="card research-area">
                <div className="research-area-head">
                  <h3>{a.title}</h3>
                  <span className={`research-status ${a.status === "Em produção" ? "is-live" : a.status === "Explorando" ? "is-soon" : ""}`}>
                    {a.status}
                  </span>
                </div>
                <p>{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Roadmap</span>
            <h2 className="section-title">Onde estamos. Para onde vamos.</h2>
          </div>
          <div className="roadmap">
            {ROADMAP.map((r, i) => (
              <div key={r.title} className="roadmap-item">
                <div className="roadmap-marker">
                  <span className="roadmap-dot" />
                  {i < ROADMAP.length - 1 && <span className="roadmap-line" />}
                </div>
                <div className="roadmap-body">
                  <span className="roadmap-phase">{r.phase}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Pesquisa é trabalho em andamento, não promessa"
        desc="Quer colaborar ou saber mais? Fala com nosso time de pesquisa."
        primary={{ label: "Falar com pesquisa", to: "/contato" }}
        secondary={{ label: "Ver tecnologia", to: "/tecnologia" }}
      />
    </>
  );
}
