import { useEffect } from "react";
import { deities } from "../data/content.ts";
import { CtaBand } from "./CtaBand.tsx";

const productDetails: Record<string, {
  hero: string;
  features: { title: string; body: string }[];
  pricing: string;
  faq: { q: string; a: string }[];
}> = {
  pluto: {
    hero: "Pluto é o agente de finanças pessoais da Olympkus. Ele lê suas contas, antecipa faturas e prepara pagamentos e transferências para a sua aprovação — sempre dentro dos limites que você define.",
    features: [
      { title: "Visão consolidada", body: "Pluto conecta às suas contas via Open Finance e mostra tudo num só lugar — gastos, receitas, faturas próximas e saldo real." },
      { title: "Aprovação, não automação cega", body: "Cada pagamento ou transferência passa pela sua aprovação. Você define quais categorias o agente pode executar sozinho e quais precisam de permissão." },
      { title: "Antecipação inteligente", body: "Pluto identifica faturas que vão vencer, contas duplicadas e oportunidades de economizar — e te avisa antes, não depois." },
      { title: "Criptografia ponta a ponta", body: "Seus dados financeiros são criptografados em trânsito e em repouso. A Olympkus não vê suas credenciais bancárias — a conexão acontece via infraestrutura certificada do Open Finance." },
    ],
    pricing: "Camada gratuita com visão de gastos (somente leitura). Camada paga com execução autônoma — prepara pagamentos e transferências para sua aprovação. Preço exato anunciado no lançamento.",
    faq: [
      { q: "Pluto move meu dinheiro sozinho?", a: "Não. Pluto prepara a ação e pede sua aprovação. Você define os limites — quais categorias o agente pode fazer sozinho, quais precisam de permissão. É delegação com controle, não piloto automático." },
      { q: "Pluto funciona com meu banco?", a: "Pluto se conecta via Open Finance, o padrão regulamentado pelo Banco Central. Bancos brasileiros que aderiram ao Open Finance são compatíveis. A lista completa será publicada no lançamento." },
      { q: "Preciso dar minha senha do banco?", a: "Não. A conexão acontece via infraestrutura certificada do Open Finance — a Olympkus nunca vê nem armazena suas credenciais bancárias." },
    ],
  },
  cronos: {
    hero: "Cronos é o agente de gestão de tempo da Olympkus. Substitui a pilha de apps que você usa para se organizar — calendário, tarefas e projetos num só agente. Cronos negocia horários, reorganiza a semana e protege o seu foco.",
    features: [
      { title: "Calendário unificado", body: "Cronos agrega seus calendários (Google, Apple, Outlook) num só lugar e entende seus compromissos, prazos e blocos de foco." },
      { title: "Negociação de horários", body: "Precisa remarcar uma reunião? Cronos propõe alternativas que funcionam para todos, respeitando suas prioridades e seus blocos de foco." },
      { title: "Tarefas e projetos num só lugar", body: "Chega de alternar entre Notion, Todoist, Trello e calendário. Cronos consolida tudo e sugere o que fazer agora, com base nas suas prioridades." },
      { title: "Proteção de foco", body: "Cronos defende seus blocos de foco — bloqueia notificações, recusa reuniões que cabem mal e te avisa quando está sobrecarregado." },
    ],
    pricing: "Camada gratuita com calendário unificado (sem automação plena). Camada paga com agendamento autônomo completo. Preço exato anunciado no lançamento.",
    faq: [
      { q: "Cronos substitui meu calendário?", a: "Sim. Cronos agrega Google Calendar, Apple Calendar e Outlook num só lugar. Você não precisa abandonar seu calendário — Cronos trabalha por cima dele." },
      { q: "Cronos marca reuniões por mim?", a: "Cronos propõe horários e negocia remanejamentos, mas você aprova antes de confirmar. Ele não envia convites sem sua permissão." },
      { q: "Cronos funciona com Notion/Todoist?", a: "Sim. Cronos se integra com as principais ferramentas de tarefas e projetos para consolidar tudo num só agente." },
    ],
  },
  zeus: {
    hero: "Zeus é o agente orquestrador da Olympkus. Ele delega ao Pluto e ao Cronos e executa comandos através de múltiplos serviços. Um único comando, executado através de tudo.",
    features: [
      { title: "Um comando, tudo executado", body: "Diga 'paga a fatura do cartão e bloqueia minha agenda amanhã' e Zeus coordena Pluto (pagamento) e Cronos (agenda) em sequência." },
      { title: "Delegação entre agentes", body: "Zeus sabe qual agente é especialista em quê. Ele não tenta fazer tudo — ele delega ao agente certo e orquestra o resultado." },
      { title: "Conexão com o mundo", body: "Zeus se conecta a serviços externos — APIs, automações, integrações — para executar comandos que vão além do Panteão." },
      { title: "Escopo em desenvolvimento", body: "Zeus é o agente mais ambicioso do Panteão e ainda está em desenvolvimento. O escopo final será definido com dados reais de uso do Pluto e do Cronos." },
    ],
    pricing: "Zeus não será vendido isoladamente no início. Será incluído como benefício de retenção para assinantes do bundle Panteão (Pluto + Cronos).",
    faq: [
      { q: "Quando o Zeus vai lançar?", a: "Zeus está em desenvolvimento. O escopo será definido com dados reais de uso do Pluto e do Cronos — não vamos lançar às cegas. Segundo semestre de 2027 é a janela atual." },
      { q: "Preciso assinar Pluto e Cronos para usar Zeus?", a: "No início, sim. Zeus será um benefício do bundle Panteão — não vendido isoladamente. Isso garante que Zeus tenha agentes reais para orquestrar." },
      { q: "Zeus é como o ChatGPT?", a: "Não. Zeus não responde perguntas genéricas — ele orquestra agentes especializados que já conhecem suas finanças (Pluto) e seu tempo (Cronos). A diferença é profundidade de domínio." },
    ],
  },
};

export function ProductPage({ id }: { id: string }) {
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const deity = deities.find((d) => d.id === id);
  if (!deity) return null;
  const details = productDetails[id];

  return (
    <>
      <section className="product-hero" id={id}>
        <div className="product-hero__inner">
          <a href="#panteao" className="blog-back">← Panteão</a>
          <p className="eyebrow"><span className="eyebrow__dot" />{deity.domain.toUpperCase()} · {deity.statusLabel} {deity.eta}</p>
          <h1 className="product-hero__title">{deity.name}</h1>
          <p className="product-hero__tagline">{deity.tagline}</p>
          <p className="product-hero__desc">{details.hero}</p>
          <p className="product-hero__platforms mono">{deity.platforms}</p>
        </div>
      </section>

      <section className="product-features">
        <div className="section-head">
          <p className="eyebrow" data-reveal>O que faz</p>
          <h2 className="section-title" data-reveal>Recursos</h2>
        </div>
        <div className="product-features__grid">
          {details.features.map((f, i) => (
            <article className="product-feature" key={i} data-reveal>
              <h3 className="product-feature__title">{f.title}</h3>
              <p className="product-feature__body">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-pricing">
        <div className="product-pricing__inner" data-reveal>
          <p className="eyebrow eyebrow--center">Preço</p>
          <p className="product-pricing__text">{details.pricing}</p>
        </div>
      </section>

      <section className="product-faq">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Perguntas</p>
          <h2 className="section-title" data-reveal>Sobre o {deity.name}</h2>
        </div>
        <div className="faq__list">
          {details.faq.map((item, i) => (
            <details className="faq__item" key={i} data-reveal>
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
