import { useEffect } from "react";
import { deities } from "../data/content.ts";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { title: string; body: string; icon: string };
type FeatureGroup = { label: string; features: Feature[] };
type Plan = { name: string; price: string; period: string; description: string; features: string[]; highlight?: boolean };

const productDetails: Record<string, {
  hero: string;
  featureGroups: FeatureGroup[];
  plans: Plan[];
  faq: { q: string; a: string }[];
}> = {
  pluto: {
    hero: "Pluto é o agente de finanças pessoais da Olympkus. Dashboard completa, transações inteligentes com categorização por IA, orçamentos, metas, dívidas, investimentos e um assistente de IA que raciocina — tudo num só app, no celular e no desktop.",
    featureGroups: [
      {
        label: "Visão geral",
        features: [
          { icon: "◎", title: "Dashboard financeira", body: "Saldo, receitas, despesas e poupança num só lugar. Cards de balanço, saúde financeira, gastos por categoria e faturas próximas — atualizados em tempo real." },
          { icon: "◉", title: "Gráficos interativos", body: "Donut de gastos por categoria, sparklines de fluxo semanal, barras de comparação mensal e medidor de saúde financeira (sun gauge)." },
          { icon: "◈", title: "Multi-conta", body: "Cadastre todas as suas contas — banco, carteira, investimento. Arquive as que não usa mais. Veja transações por conta ou consolidadas." },
          { icon: "⬗", title: "Transações completas", body: "Crie, edite e estorne transações com poucos toques. Filtre por conta, categoria e período. Cada transação tem descrição, categoria, conta e data — tudo editável." },
        ],
      },
      {
        label: "Inteligência",
        features: [
          { icon: "✦", title: "Assistente de IA com raciocínio", body: "Chat streaming que mostra o raciocínio passo a passo antes de responder. Markdown renderizado, anexo de arquivos, histórico de conversas agrupado por data. Sugestões prontas: analisar gastos, orçamento, metas e dicas." },
          { icon: "✧", title: "Categorização inteligente", body: "Pluto sugere a categoria correta para cada transação com 96% de confiança. Você aprova com um toque — não precisa categorizar tudo manualmente." },
          { icon: "★", title: "Insights e quick wins", body: "Auditoria de assinaturas, caminho para quitar dívidas, projeção de metas e oportunidades de economia — gerados automaticamente a partir dos seus dados." },
          { icon: "☆", title: "Histórico de conversas", body: "Cada conversa com a IA fica salva e agrupada por data — hoje, ontem, última semana, últimos 30 dias. Volte a qualquer conversa anterior e continue de onde parou." },
        ],
      },
      {
        label: "Controle",
        features: [
          { icon: "▣", title: "Orçamentos por categoria", body: "Crie orçamentos semanais, mensais, trimestrais ou anuais por categoria. Acompanhe quanto já gastou e receba alertas ao se aproximar do limite." },
          { icon: "◆", title: "Metas financeiras", body: "Reserva de emergência, quitar dívida, investir, poupar para uma viagem. Acompanhe progresso, contribuições e projeção de quando vai chegar lá." },
          { icon: "▼", title: "Dívidas e parcelamentos", body: "Acompanhe dívidas ativas e quitadas, simule cenários de aceleração de pagamento e veja quanto economiza antecipando parcelas. Controle parcelamentos com vencimento agrupado." },
          { icon: "◐", title: "Recorrências", body: "Assinaturas e contas fixas num só lugar. Veja quanto gasta por mês com recorrências e identifique assinaturas esquecidas." },
          { icon: "▲", title: "Investimentos", body: "Aportes, resgates, lucros e dividendos. Calculadora de valor futuro com juros compostos para projetar o crescimento da carteira." },
          { icon: "◇", title: "Lista de desejos", body: "Guarde o que quer comprar com preço, categoria e data alvo. Pluto acompanha quanto você já juntou e te avisa quando pode comprar — sem comprometer o orçamento." },
        ],
      },
      {
        label: "Plataforma",
        features: [
          { icon: "⬆", title: "Importação de extratos", body: "Importe extratos bancários em CSV ou OFX. Pluto lê o arquivo, categoriza as transações e importa tudo — sem digitar linha por linha." },
          { icon: "⬇", title: "Offline-first", body: "Funciona sem internet. Suas ações vão para uma fila e sincronizam automaticamente quando a conexão volta. Banner de status sempre visível." },
          { icon: "⬌", title: "5 idiomas", body: "Português, inglês, espanhol, francês e chinês. O app inteiro traduzido — não só o menu, todas as telas." },
          { icon: "◐", title: "Notificações push", body: "Lembretes de recorrência e vencimento de parcelas. Notificações no celular e no desktop." },
          { icon: "◑", title: "Temas e acessibilidade", body: "Modo claro e escuro, cor de destaque personalizável e configurações de acessibilidade. O app se adapta a você." },
          { icon: "⚿", title: "Segurança e auditoria", body: "Login com Google, tokens em secure storage criptografado e tela de auditoria que registra cada ação tomada no app. Você vê o histórico de tudo." },
        ],
      },
    ],
    plans: [
      {
        name: "Free",
        price: "R$ 0",
        period: "",
        description: "Para começar a organizar suas finanças",
        features: [
          "Dashboard financeira completa",
          "Transações manuais",
          "Categorização inteligente",
          "1 conta bancária",
          "Importação de extratos (CSV/OFX)",
        ],
      },
      {
        name: "Pro",
        price: "R$ 29",
        period: "/mês",
        description: "Para quem quer mais controle",
        features: [
          "Tudo do Free, mais:",
          "Análise avançada de gastos",
          "Metas e objetivos ilimitados",
          "Orçamentos ilimitados",
          "Sugestões de economia com IA",
          "Contas ilimitadas",
          "Backup automático",
          "Suporte prioritário",
        ],
        highlight: true,
      },
      {
        name: "Premium",
        price: "R$ 49",
        period: "/mês",
        description: "Máximo controle e insights",
        features: [
          "Tudo do Pro, mais:",
          "Previsões financeiras com IA",
          "Análise de investimentos detalhada",
          "Planejamento de aposentadoria",
          "Consultoria financeira via chat 24/7",
          "Contas compartilhadas em família",
          "Ofertas exclusivas de parceiros",
          "Suporte VIP",
        ],
      },
    ],
    faq: [
      { q: "Pluto move meu dinheiro sozinho?", a: "Não. Pluto é um agente de finanças que organiza, categoriza e analisa — mas não executa transferências ou pagamentos sem sua ação. Você aprova cada intenção. É delegação com controle, não piloto automático." },
      { q: "Pluto funciona com meu banco?", a: "Pluto importa extratos bancários em CSV e OFX — formatos suportados por todos os bancos brasileiros. A integração direta via Open Finance está no roadmap. A lista completa de bancos será publicada no lançamento." },
      { q: "Preciso dar minha senha do banco?", a: "Não. Você importa o extrato que seu banco gera, ou lança transações manualmente. A Olympkus nunca pede nem armazena suas credenciais bancárias." },
      { q: "O assistente de IA realmente raciocina?", a: "Sim. O chat mostra o raciocínio passo a passo antes de responder — cada etapa do chain of thought é exibida com o ícone do nó que a gerou. Você vê como o Pluto chegou à conclusão, não só a resposta." },
      { q: "Pluto funciona offline?", a: "Sim. O app mobile é offline-first: suas ações vão para uma fila local e sincronizam automaticamente quando a conexão volta. Um banner de status mostra se você está online ou offline." },
      { q: "Quais idiomas o Pluto suporta?", a: "Português (BR), inglês, espanhol, francês e chinês. O app inteiro é traduzido — todas as telas, não só o menu." },
      { q: "Pluto tem versão desktop?", a: "Sim. Pluto roda no iOS, Android, macOS, Windows e Linux. O desktop é um app nativo Tauri com a mesma base de features do mobile, mais analytics avançados (cenários de dívida, projeção de metas, quick wins)." },
      { q: "Qual a diferença entre Pro e Premium?", a: "Pro (R$ 29/mês) desbloqueia metas, orçamentos e contas ilimitadas, além de sugestões de economia com IA. Premium (R$ 49/mês) adiciona previsões financeiras, análise de investimentos detalhada, planejamento de aposentadoria, consultoria via chat 24/7 e contas compartilhadas em família." },
    ],
  },
  cronos: {
    hero: "Cronos é a próxima fronteira do Panteão: um agente que devolve o seu tempo. Calendário, tarefas e projetos num só lugar — negociando horários, protegendo seu foco e acabando com o trabalho de organizar o trabalho. Em concepção.",
    featureGroups: [],
    plans: [],
    faq: [
      { q: "O que o Cronos vai fazer?", a: "A visão é um agente de gestão de tempo que substitui a pilha de apps que você usa para se organizar. Calendário, tarefas e projetos consolidados num só lugar, com IA que negocia horários e protege seu foco. O escopo exato será definido com o que aprendermos com o Pluto." },
      { q: "Quando o Cronos vai lançar?", a: "Ainda em concepção. O Cronos será desenvolvido depois que o Pluto estiver no ar e tivermos dados reais de uso para informar o design. Não vamos lançar às cegas." },
    ],
  },
  zeus: {
    hero: "Zeus é a visão final do Panteão: um orquestrador que coordena todos os agentes sob um só comando. Um único pedido, executado através de tudo — finanças, tempo e o que vier depois. Em concepção.",
    featureGroups: [],
    plans: [],
    faq: [
      { q: "O que o Zeus vai fazer?", a: "A visão é um orquestrador: você dá um comando e Zeus coordena os agentes especializados — Pluto, Cronos e o que vier depois — para executar tudo em sequência. Um pedido, múltiplos domínios, um só resultado. O escopo exato será definido com dados reais de uso dos outros agentes." },
      { q: "Quando o Zeus vai lançar?", a: "Ainda em concepção. Zeus só faz sentido quando há agentes reais para orquestrar e dados reais para aprender com eles. Vai nascer do que o Pluto e o Cronos ensinarem — não de um PowerPoint." },
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

      {details.featureGroups.length > 0 && details.featureGroups.map((group, gi) => (
        <section className="product-features" key={gi}>
          <div className="section-head">
            <p className="eyebrow" data-reveal>{group.label}</p>
            <h2 className="section-title" data-reveal>{gi === 0 ? "Recursos" : group.label}</h2>
          </div>
          <div className="product-features__grid">
            {group.features.map((f, i) => (
              <article className="product-feature" key={i} data-reveal>
                <span className="product-feature__icon" aria-hidden="true">{f.icon}</span>
                <h3 className="product-feature__title">{f.title}</h3>
                <p className="product-feature__body">{f.body}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      {details.plans.length > 0 && (
        <section className="product-pricing">
          <div className="section-head" style={{ textAlign: "center" }}>
            <p className="eyebrow eyebrow--center" data-reveal>Planos</p>
            <h2 className="section-title" data-reveal style={{ textAlign: "center" }}>Escolha o seu</h2>
          </div>
          <div className="pricing-grid">
            {details.plans.map((plan, i) => (
              <div className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`} key={i} data-reveal>
                {plan.highlight && <span className="pricing-card__badge mono">RECOMENDADO</span>}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__price">
                  {plan.price}<span className="pricing-card__period">{plan.period}</span>
                </p>
                <p className="pricing-card__desc">{plan.description}</p>
                <ul className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <li key={j} className={f.endsWith(":") ? "pricing-card__sep" : ""}>{f}</li>
                  ))}
                </ul>
                <a href="#access" className={`btn ${plan.highlight ? "btn--solid" : "btn--ghost"} pricing-card__cta`}>
                  Entrar para a lista
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

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
