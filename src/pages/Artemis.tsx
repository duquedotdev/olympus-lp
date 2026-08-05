import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Artemis — Agenda e tarefas com IA",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  publisher: { "@type": "Organization", name: "Olympkus AI" },
};

const FEATURES = [
  { icon: "chat", title: "Calendário em linguagem natural", desc: "Digite \"almoço com a Ana amanhã às 12\" e a Artemis cria o evento, define a duração, sugere o lembrete. Sem formulário, sem cliques, sem friction." },
  { icon: "layers", title: "Tarefas que se organizam sozinhas", desc: "A IA prioriza com base em prazos, energia mental e contexto. Ela sabe que \"revisar contrato\" pesa mais que \"responder email\" e distribui no seu dia de forma inteligente." },
  { icon: "bolt", title: "Pomodoro integrado", desc: "Toque único e você está em foco profundo. 25 minutos de trabalho, 5 de descanso, repetição automática. A Artemis bloqueia notificações e registra seu progresso." },
  { icon: "sync", title: "Sincronização total", desc: "Google Calendar, iCloud, Outlook — tudo num só lugar. Mudou num lugar, mudou em todos. Sem conflito, sem duplicação, sem dor de cabeça." },
  { icon: "bell", title: "Lembretes contextuais", desc: "A Artemis sabe onde você está e o que precisa fazer. \"Comprar pão\" aparece quando você passa na padaria. \"Ligar para o cliente\" quando você está no escritório." },
  { icon: "chart", title: "Insights de produtividade", desc: "Quanto tempo você gastou em cada tarefa? Que horas você é mais produtivo? A Artemis responde e sugere o melhor horário para o que importa." },
];

const STEPS = [
  { n: "01", title: "Digite em português", desc: "\"Reunião de equipe sexta 14h\" — a Artemis entende e cria tudo. Sem formulário, sem cliques." },
  { n: "02", title: "A IA organiza seu dia", desc: "Tarefas priorizadas por contexto, energia e prazo. Seu dia pronto antes de você pensar nele." },
  { n: "03", title: "Entre em foco", desc: "Um toque e você está em pomodoro. Notificações bloqueadas, tempo registrado, resultado real." },
  { n: "04", title: "Acompanhe seu ritmo", desc: "Insights de produtividade mostram quando você rende mais. A Artemis sugere o melhor horário para o que importa." },
];

export function Artemis() {
  return (
    <>
      <Seo
        path="/artemis"
        title="Artemis — Agenda e tarefas com IA"
        description="Calendário em linguagem natural, tarefas que se organizam sozinhas e pomodoro integrado. A Artemis é sua agenda, suas tarefas e seu tempo num só lugar."
        jsonLd={[productSchema]}
      />

      <section className="page-hero product-hero">
        <div className="container page-hero-inner">
          <span className="badge" style={{ background: "rgba(201, 162, 39, 0.14)", color: "#c9a227", borderColor: "rgba(201, 162, 39, 0.3)" }}>Agenda & Tarefas</span>
          <h1><span className="gradient-text">Artemis</span>. Sua agenda, suas tarefas, seu tempo.</h1>
          <p className="section-lead">
            Calendário em linguagem natural, tarefas que se organizam sozinhas e
            foco profundo com pomodoro integrado. A IA entende português e faz
            o trabalho pesado — você só diz o que precisa.
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
            <h2 className="section-title">Tudo que você precisa. Nada que você não precisa.</h2>
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
        title="Sua agenda nunca mais foi a mesma"
        desc="Grátis pra começar. Sem cartão de crédito, sem fidelidade."
        primary={{ label: "Começar grátis", to: "/precos" }}
        secondary={{ label: "Ver outros produtos", to: "/#produtos" }}
      />
    </>
  );
}
