import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CtaBand } from "../components/CtaBand";
import { STATS } from "../data/content";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Olympkus AI",
    foundingDate: "2025",
    foundingLocation: "São Paulo, Brasil",
    slogan: "AI at work. Life at ease.",
  },
};

const BELIEFS = [
  {
    n: "01",
    title: "Clareza é um direito, não privilégio",
    desc: "Entender para onde vai seu dinheiro não deveria exigir consultor, planilha ou formação em finanças. Todo mundo merece clareza. A IA democratiza isso.",
  },
  {
    n: "02",
    title: "A IA trabalha. O humano decide.",
    desc: "O Pluto organiza, projeta e recomenda. Mas a decisão é sempre sua. A IA é copiloto, não piloto automático. Autonomia não se delega — se empodera.",
  },
  {
    n: "03",
    title: "Dados são seus. Sempre.",
    desc: "Seus dados financeiros são extensão da sua identidade. Nunca vendemos, nunca compartilhamos sem consentimento, nunca usamos para treinar modelos sem anonimização. Não é nosso modelo de negócio. Não vai ser.",
  },
  {
    n: "04",
    title: "Simplicidade é respeito",
    desc: "Software financeiro não deveria ser um labirinto. Cada tela, cada interação, cada palavra — tudo passa por uma pergunta: isso deixa a vida mais clara ou mais confusa? Se confunde, cortamos.",
  },
  {
    n: "05",
    title: "Feito no Brasil. Para o Brasil.",
    desc: "PIX, DAS, IRPF, CNPJ, carnê, parcelamento, ouvidoria. Entendemos a realidade financeira brasileira porque vivemos ela. Nada adaptado de gringo. Tudo nativo.",
  },
  {
    n: "06",
    title: "O futuro é a IA trabalhando por você",
    desc: "Hoje o Pluto responde e organiza. Amanhã ele executa — com sua aprovação. O destino é uma IA que cuida das suas finanças como um chief financial officer pessoal, disponível 24/7.",
  },
];

export function Manifesto() {
  return (
    <>
      <Seo
        path="/manifesto"
        title="Manifesto — Olympkus AI"
        description="O que acreditamos: clareza é direito, a IA trabalha e o humano decide, dados são seus, simplicidade é respeito. Este é o manifesto da Olympkus AI."
        jsonLd={[orgSchema]}
      />

      <section className="page-hero manifesto-hero">
        <div className="container page-hero-inner">
          <span className="badge">Manifesto</span>
          <h1>AI at work. <span className="gradient-text">Life at ease.</span></h1>
          <p className="section-lead">
            A Olympkus AI existe para uma coisa: devolver seu tempo e sua
            clareza. A IA trabalha. Sua vida fica leve. Este é o que acreditamos
            e o que nos guia quando ninguém está olhando.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="manifesto-intro">
            <span className="eyebrow">O problema</span>
            <h2 className="section-title">
              Gerenciar dinheiro ainda é trabalho manual. Isso está errado.
            </h2>
            <p className="section-lead">
              Em 2026, você ainda abre uma planilha pra saber quanto sobra no mês.
              Ainda alterna entre cinco apps de banco pra entender para onde vai
              seu salário. Ato toma decisão financeira no escuro — compra,
              investe, endivida — sem clareza. A tecnologia evoluiu, mas suas
              finanças continuam no século passado. Nós existimos pra mudar isso.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">O que acreditamos</span>
            <h2 className="section-title">Seis princípios. Sem exceção.</h2>
          </div>
          <div className="manifesto-beliefs">
            {BELIEFS.map((b) => (
              <article key={b.n} className="manifesto-belief">
                <span className="manifesto-belief-n">{b.n}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="manifesto-stats">
            {STATS.map((s) => (
              <div key={s.label} className="manifesto-stat">
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="manifesto-closing">
            <span className="eyebrow">O futuro</span>
            <h2 className="section-title">
              Estamos construindo a IA que cuida das suas finanças. Para que você cuide da sua vida.
            </h2>
            <p className="section-lead">
              Hoje é o Pluto — um assistente que organiza e responde. Amanhã é
              uma IA que age por você, com sua aprovação. O destino é simples:
              você nunca mais pensa em gerenciar dinheiro. A IA pensa por você.
              Você vive.
            </p>
            <div className="home-hero-cta">
              <Link to="/pluto" className="btn btn-primary btn-lg">Conhecer o Pluto</Link>
              <Link to="/pesquisa" className="btn btn-ghost btn-lg">O que vem a seguir</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer fazer parte disso?"
        desc="Procuramos pessoas que acreditam no mesmo que a gente."
        primary={{ label: "Falar com a gente", to: "/contato" }}
        secondary={{ label: "Ver tecnologia", to: "/tecnologia" }}
      />
    </>
  );
}
