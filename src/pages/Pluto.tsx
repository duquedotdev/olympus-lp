import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";
import { CtaBand } from "../components/CtaBand";
import { STATS, TESTIMONIALS } from "../data/content";

const BANKS = [
  { slug: "nubank", name: "Nubank" },
  { slug: "itau", name: "Itaú" },
  { slug: "bradesco", name: "Bradesco" },
  { slug: "caixa", name: "Caixa" },
  { slug: "inter", name: "Inter" },
  { slug: "xp", name: "XP" },
  { slug: "btgpactual", name: "BTG Pactual" },
  { slug: "bancodobrasil", name: "Banco do Brasil" },
  { slug: "santander", name: "Santander" },
  { slug: "c6bank", name: "C6 Bank" },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pluto — Assistente financeiro com IA",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  publisher: { "@type": "Organization", name: "Olympkus AI" },
  featureList: [
    "Assistente de IA conversacional",
    "Categorização automática de transações",
    "Metas e projeções inteligentes",
    "Orçamentos por categoria",
    "Investimentos e analytics",
    "Import de extratos em segundos",
  ],
};

const STEPS = [
  { n: "01", title: "Importe seus extratos", desc: "Baixe o extrato do seu banco ou corretora e importe em segundos. Sem senha, sem compartilhar dados. Você no controle." },
  { n: "02", title: "A IA organiza tudo", desc: "Transações categorizadas, padrões detectados. Sua vida financeira inteira numa tela — sem você mover um dedo." },
  { n: "03", title: "Converse com o Pluto", desc: "Pergunte o que quiser. Respostas, projeções e alertas — baseados nos seus números reais." },
  { n: "04", title: "Decida com clareza", desc: "Metas, investimentos e planejamento guiados por dados. Não por achismo." },
];

const PILLAR_FEATURES = [
  { icon: "chat", title: "Pergunte em português", desc: "\"Quanto posso investir este mês?\" \"Onde estou gastando mais?\" O Pluto responde com base nos seus dados reais." },
  { icon: "spark", title: "Projeções que se cumprem", desc: "Baseadas no seu histórico, não em média de mercado. Veja onde vai estar em 6 meses antes de chegar lá." },
  { icon: "bell", title: "Alertas antes do erro", desc: "O Pluto avisa quando você vai estourar o orçamento, quando uma cobrança vence, quando uma meta sai da rota." },
];

const ORG_FEATURES = [
  { icon: "layers", title: "Categorização 98%", desc: "Modelos de linguagem + regras determinísticas. Melhor que humano com planilha — e nunca pede confirmação." },
  { icon: "sync", title: "Todos seus bancos num lugar", desc: "Importe extratos de Nubank, Itaú, XP, BTG e qualquer instituição. Tudo numa única tela." },
  { icon: "upload", title: "Import em segundos", desc: "CSV, OFX ou PDF. O Pluto lê, categoriza e organiza. Sem digitar nada, sem perder tempo." },
];

const GOAL_FEATURES = [
  { icon: "target", title: "Metas que chegam lá", desc: "Defina um objetivo. O Pluto traça o caminho, avisa quando você desvia e comemora quando você chega." },
  { icon: "pie", title: "Orçamentos que funcionam", desc: "Por categoria, por período. Progresso em tempo real e alertas antes de estourar — não depois." },
  { icon: "repeat", title: "Recorrências no controle", desc: "Assinaturas, contas fixas e parcelamentos. O Pluto mapeia tudo e mostra o que pesa no seu mês." },
];

const INV_FEATURES = [
  { icon: "trend", title: "Portfólio claro", desc: "Alocação, lucros, dividendos e contribuições num painel só. Sem pular entre apps de corretora." },
  { icon: "chart", title: "Analytics que ensinam", desc: "Advisor de IA, cenários de quitação de dívidas, projeção de metas e quick wins personalizados." },
  { icon: "wallet", title: "Dívidas sob plano", desc: "Total, parcelas, juros estimados e cenários de payoff. Saiba exatamente quando fica livre." },
];

const SECURITY_POINTS = [
  "Criptografia de nível bancário (AES-256, TLS 1.3)",
  "LGPD em cada etapa — seus dados são seus",
  "Sem compartilhar senhas com terceiros",
  "Nunca vendemos seus dados — não é nosso modelo",
];

export function Pluto() {
  return (
    <>
      <Seo
        path="/pluto"
        title="Pluto — Seu copiloto financeiro com IA"
        description="O Pluto é o assistente de IA da Olympkus. Converse com seu dinheiro, organize tudo automaticamente e tome decisões com clareza. Comece grátis."
        jsonLd={[productSchema]}
      />

      {/* ===== Hero ===== */}
      <section className="page-hero pluto-hero">
        <div className="pluto-hero-glow" aria-hidden="true" />
        <div className="container page-hero-inner">
          <span className="badge">Produto</span>
          <h1>
            <span className="gradient-text">Pluto</span>, seu copiloto financeiro
          </h1>
          <p className="section-lead">
            Converse com seu dinheiro. O Pluto organiza tudo automaticamente,
            responde qualquer pergunta e te ajuda a decidir com clareza — sem
            planilha, sem complicação, sem perder tempo.
          </p>
          <div className="home-hero-cta">
            <Link to="/precos" className="btn btn-primary btn-lg">Começar grátis</Link>
            <a href="#como-funciona" className="btn btn-ghost btn-lg">Como funciona</a>
          </div>
        </div>
      </section>

      {/* ===== Bank logos ===== */}
      <section className="pluto-banks">
        <div className="container">
          <p className="pluto-banks-label">Importe extratos dos principais bancos e corretoras do Brasil:</p>
          <div className="hero-logos">
            {BANKS.map((b) => (
              <img
                key={b.slug}
                src={`/banks/${b.slug}.svg`}
                alt={b.name}
                className="hero-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="section pluto-stats">
        <div className="container">
          <div className="pluto-stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="pluto-stat">
                <span className="pluto-stat-value gradient-text">{s.value}</span>
                <span className="pluto-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pilar 1 — IA conversacional (showcase chat) ===== */}
      <section className="section pluto-showcase">
        <div className="container">
          <div className="pluto-showcase-grid">
            <div className="pluto-showcase-text">
              <span className="eyebrow">Assistente de IA</span>
              <h2 className="section-title">Pergunte. O Pluto sabe a resposta.</h2>
              <p className="section-lead">
                "Quanto posso investir este mês?" "Onde estou gastando mais que
                no ano passado?" "Posso comprar um carro em 6 meses?" O Pluto
                responde com base nos seus dados reais — não em palpite.
              </p>
              <ul className="pluto-bullets">
                {PILLAR_FEATURES.map((f) => (
                  <li key={f.title}>
                    <Icon name={f.icon} size={18} />
                    <span>
                      <strong>{f.title}.</strong> {f.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pluto-chat-card card">
              <div className="pluto-chat-head">
                <Icon name="spark" size={16} />
                <span>Pluto</span>
                <span className="pluto-chat-status">online</span>
              </div>
              <div className="pluto-chat-body">
                <div className="chat-bubble ai">
                  Oi! Analisei seu mês. Você tem R$ 1.840 livres pra investir. Quer que eu sugira uma divisão?
                </div>
                <div className="chat-bubble user">Sim, mas quero manter a reserva de emergência</div>
                <div className="chat-bubble ai">
                  Boa. Sugiro: R$ 600 na reserva (Tesouro Selic), R$ 740 num ETF diversificado e R$ 500 pra sua viagem. Quer que eu configure?
                </div>
                <div className="chat-bubble user">Configura a reserva e o ETF</div>
                <div className="chat-bubble ai">
                  Pronto! Reserva e ETF criados. Vou monitorar e te avisar quando bater as metas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pilar 2 — Organização automática (alternado) ===== */}
      <section className="section pluto-showcase pluto-showcase-reverse">
        <div className="container">
          <div className="pluto-showcase-grid">
            <div className="pluto-visual-card card" aria-hidden="true">
              <div className="pluto-visual-mock">
                <div className="mock-row">
                  <span className="mock-cat" style={{ background: "var(--accent)" }} />
                  <span className="mock-desc">Supermercado — Fresh Market</span>
                  <span className="mock-amt">−R$ 640</span>
                </div>
                <div className="mock-row">
                  <span className="mock-cat" style={{ background: "var(--gold)" }} />
                  <span className="mock-desc">Salário — Vega Studio</span>
                  <span className="mock-amt mock-in">+R$ 8.500</span>
                </div>
                <div className="mock-row">
                  <span className="mock-cat" style={{ background: "#3aa7c2" }} />
                  <span className="mock-desc">Transporte — App</span>
                  <span className="mock-amt">−R$ 180</span>
                </div>
                <div className="mock-row">
                  <span className="mock-cat" style={{ background: "#a24ac2" }} />
                  <span className="mock-desc">Streaming bundle</span>
                  <span className="mock-amt">−R$ 65</span>
                </div>
                <div className="mock-row">
                  <span className="mock-cat" style={{ background: "var(--accent-3)" }} />
                  <span className="mock-desc">Tesouro Selic</span>
                  <span className="mock-amt mock-in">→R$ 1.200</span>
                </div>
                <div className="mock-tag">98% categorizado automaticamente</div>
              </div>
            </div>
            <div className="pluto-showcase-text">
              <span className="eyebrow">Organização automática</span>
              <h2 className="section-title">Chega de planilha. A IA faz o trabalho pesado.</h2>
              <p className="section-lead">
                Cada transação é categorizada sozinha. A IA detecta padrões,
                identifica gastos invisíveis e mostra para onde seu dinheiro vai —
                sem você mover um dedo.
              </p>
              <ul className="pluto-bullets">
                {ORG_FEATURES.map((f) => (
                  <li key={f.title}>
                    <Icon name={f.icon} size={18} />
                    <span>
                      <strong>{f.title}.</strong> {f.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pilar 3 — Metas & orçamentos ===== */}
      <section className="section pluto-showcase">
        <div className="container">
          <div className="pluto-showcase-grid">
            <div className="pluto-showcase-text">
              <span className="eyebrow">Metas & orçamentos</span>
              <h2 className="section-title">Planos que você cumpre. Não planos que você abandona.</h2>
              <p className="section-lead">
                Defina um objetivo e o Pluto traça o caminho. Projeções
                realistas, alertas quando você sai da rota, comemoração quando
                chega. Suas metas, com inteligência.
              </p>
              <ul className="pluto-bullets">
                {GOAL_FEATURES.map((f) => (
                  <li key={f.title}>
                    <Icon name={f.icon} size={18} />
                    <span>
                      <strong>{f.title}.</strong> {f.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pluto-visual-card card" aria-hidden="true">
              <div className="pluto-visual-goals">
                <div className="goal-mock">
                  <div className="goal-mock-head">
                    <span>Reserva de emergência</span>
                    <span className="goal-mock-pct gradient-text">65%</span>
                  </div>
                  <div className="goal-mock-bar"><div className="goal-mock-fill" style={{ width: "65%" }} /></div>
                  <span className="goal-mock-meta">R$ 6.500 de R$ 10.000 · 2 contribuições p/ 70%</span>
                </div>
                <div className="goal-mock">
                  <div className="goal-mock-head">
                    <span>Viagem ao Japão</span>
                    <span className="goal-mock-pct gradient-text">52%</span>
                  </div>
                  <div className="goal-mock-bar"><div className="goal-mock-fill" style={{ width: "52%" }} /></div>
                  <span className="goal-mock-meta">R$ 5.200 de R$ 10.000 · no caminho certo</span>
                </div>
                <div className="goal-mock">
                  <div className="goal-mock-head">
                    <span>Quitar cartão</span>
                    <span className="goal-mock-pct gradient-text">88%</span>
                  </div>
                  <div className="goal-mock-bar"><div className="goal-mock-fill" style={{ width: "88%" }} /></div>
                  <span className="goal-mock-meta">R$ 2.640 de R$ 3.000 · quase lá</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pilar 4 — Investimentos & analytics ===== */}
      <section className="section pluto-showcase pluto-showcase-reverse">
        <div className="container">
          <div className="pluto-showcase-grid">
            <div className="pluto-visual-card card" aria-hidden="true">
              <div className="pluto-visual-inv">
                <div className="inv-mock-head">
                  <span>Portfólio</span>
                  <span className="inv-mock-total gradient-text">R$ 48.400</span>
                </div>
                <div className="inv-mock-alloc">
                  <div className="alloc-bar">
                    <span style={{ width: "45%", background: "var(--accent)" }} />
                    <span style={{ width: "30%", background: "var(--gold)" }} />
                    <span style={{ width: "15%", background: "#3aa7c2" }} />
                    <span style={{ width: "10%", background: "#a24ac2" }} />
                  </div>
                </div>
                <div className="inv-mock-legend">
                  <span><i style={{ background: "var(--accent)" }} /> Index Funds 45%</span>
                  <span><i style={{ background: "var(--gold)" }} /> Renda Fixa 30%</span>
                  <span><i style={{ background: "#3aa7c2" }} /> Ações 15%</span>
                  <span><i style={{ background: "#a24ac2" }} /> Cripto 10%</span>
                </div>
                <div className="inv-mock-row"><Icon name="trend" size={16} /> <span>Lucro realizado</span> <span className="mock-in">+R$ 565</span></div>
                <div className="inv-mock-row"><Icon name="chart" size={16} /> <span>Dividendos (mês)</span> <span className="mock-in">+R$ 385</span></div>
              </div>
            </div>
            <div className="pluto-showcase-text">
              <span className="eyebrow">Investimentos & analytics</span>
              <h2 className="section-title">Seu dinheiro inteiro num só painel.</h2>
              <p className="section-lead">
                Portfólio, rebalanceamento, dividendos e oportunidades analisados
                pela IA. Dívidas com plano de quitação. Decisões melhores, menos
                ansiedade.
              </p>
              <ul className="pluto-bullets">
                {INV_FEATURES.map((f) => (
                  <li key={f.title}>
                    <Icon name={f.icon} size={18} />
                    <span>
                      <strong>{f.title}.</strong> {f.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pilar 5 — Segurança (full-width statement) ===== */}
      <section className="section pluto-security">
        <div className="container">
          <div className="pluto-security-inner">
            <span className="eyebrow">Segurança & privacidade</span>
            <h2 className="section-title">Seus dados protegidos como se fossem nosso dinheiro.</h2>
            <p className="section-lead">
              Você conecta suas contas importando extratos — sem compartilhar
              senhas, sem abrir mão do controle. Criptografia de nível bancário e
              LGPD em cada etapa. Nunca vendemos seus dados.
            </p>
            <div className="pluto-security-grid">
              {SECURITY_POINTS.map((p) => (
                <div key={p} className="pluto-security-item">
                  <Icon name="shield" size={20} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Como funciona ===== */}
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

      {/* ===== Depoimentos ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Quem usa, sente a diferença</span>
            <h2 className="section-title">A vida fica leve. O dinheiro fica claro.</h2>
          </div>
          <div className="pluto-testimonials">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card pluto-testimonial">
                <blockquote>"{t.quote}"</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Sua vida financeira começa a ficar leve hoje"
        desc="Grátis pra começar. Sem cartão de crédito, sem fidelidade."
      />
    </>
  );
}
