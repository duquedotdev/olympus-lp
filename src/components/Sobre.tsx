import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

const TEAM_CARDS = [
  "[A PREENCHER — foto e bio do fundador]",
  "[A PREENCHER — foto e bio do fundador]",
  "[A PREENCHER — foto e bio do fundador]",
  "[A PREENCHER — foto e bio do fundador]",
];

const CONTACT_EMAILS: { label: string; address: string }[] = [
  { label: "Geral", address: "[A PREENCHER]" },
  { label: "Imprensa", address: "imprensa@olympkus.ai" },
  { label: "Privacidade", address: "privacidade@olympkus.ai" },
  { label: "Legal", address: "legal@olympkus.ai" },
];

const SOCIAL: { label: string; href: string }[] = [
  { label: "Discord", href: "https://discord.gg/Y5GxgEY8Zt" },
  { label: "LinkedIn", href: "https://linkedin.com/company/olympkusai" },
  { label: "Instagram", href: "https://instagram.com/olympkus" },
  { label: "TikTok", href: "https://tiktok.com/@olympkus" },
];

export function Sobre() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="sobre">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <p className="eyebrow"><span className="eyebrow__dot" />SOBRE</p>
          <h1 className="page-hero__title">Construímos o oposto do que a tecnologia prometeu.</h1>
          <p className="page-hero__lede">
            A tecnologia prometeu tempo livre e entregou mais telas para vigiar.
            A Olympkus AI constrói agentes que agem por você — silenciosos,
            responsáveis e sob o seu comando.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="prose__inner">
          <h2>Por que existimos</h2>
          <p>
            Usamos três apps para organizar a vida e ainda assim sentimos que
            administramos ferramentas em vez de viver. A tecnologia deveria
            devolver atenção, não consumi-la. A Olympkus existe para resolver
            essa contradição: delegar, não mais operar.
          </p>

          <h2>História</h2>
          <p>
            A Olympkus AI foi fundada em [A PREENCHER] por [A PREENCHER].
            [A PREENCHER — marco relevante, motivação inicial].
          </p>

          <h2>Time</h2>
          <p>
            Fundadores e liderança com foto e bio curta.
            [A PREENCHER — nomes, cargos, bios].
          </p>
          <div style={teamGridStyle}>
            {TEAM_CARDS.map((placeholder, i) => (
              <div key={i} style={teamCardStyle}>
                <div style={teamPhotoStyle} aria-hidden="true" />
                <p style={teamPlaceholderStyle}>{placeholder}</p>
              </div>
            ))}
          </div>

          <h2>O que construímos</h2>
          <p>
            Uma suíte de agentes de IA chamada Panteão. Cada agente é especializado
            em um domínio da vida pessoal — <a href="/pluto">Pluto</a> cuida do
            dinheiro, <a href="/aion">Aion</a> do tempo, <a href="/zeus">Zeus</a>
            orquestra tudo. Você aprova a intenção; eles cuidam da execução.
          </p>

          <h2>Como somos diferentes</h2>
          <p>
            A mensagem que mais nos diferencia não é "agente que move seu dinheiro"
            — isso outros já fazem. É <em>um agente por domínio, sob um só comando</em>.
            A autonomia isolada está sendo comoditizada; a orquestração de agentes
            especializados é o que nenhum concorrente oferece.
          </p>
          <p>
            Nosso modelo é "você aprova, o agente executa" — controle, não apenas
            automação. É o oposto explícito de produtos que executam sem sua permissão.
          </p>

          <h2>Onde estamos</h2>
          <p>
            A Olympkus AI é uma empresa brasileira. O primeiro produto, Pluto, está
            previsto para lançar em janeiro de 2027. A lista de espera está aberta —
            os primeiros da fila entram como membros fundadores, com condições
            especiais no lançamento.
          </p>

          <h2>Princípios</h2>
          <ol>
            <li><strong>Você define a intenção.</strong> Nada acontece fora dos limites que você traça.</li>
            <li><strong>O agente executa.</strong> Um agente que opera por você, não mais um app para você operar.</li>
            <li><strong>Tudo permanece seu.</strong> Seus dados sob seu controle, com transparência sobre cada ação.</li>
          </ol>

          <h2>Contato</h2>
          <ul style={contactListStyle}>
            {CONTACT_EMAILS.map((c) => (
              <li key={c.label} style={contactRowStyle}>
                <span className="mono" style={contactLabelStyle}>{c.label}</span>
                {c.address.includes("@") ? (
                  <a href={`mailto:${c.address}`} style={contactLinkStyle}>{c.address}</a>
                ) : (
                  <span style={contactLinkStyle}>{c.address}</span>
                )}
              </li>
            ))}
          </ul>
          <p>
            <a href="/contato">Todos os canais em /contato</a>
          </p>
          <p style={socialWrapStyle}>
            {SOCIAL.map((s, i) => (
              <span key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                {i < SOCIAL.length - 1 && <span style={socialSepStyle}> · </span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ---------- Inline styles ---------- */
const teamGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "clamp(16px, 2vw, 24px)",
  margin: "1.6rem 0 0.5rem",
};

const teamCardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  padding: "1.2rem",
  background: "var(--raised)",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius)",
};

const teamPhotoStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: "var(--radius)",
  background: "var(--onyx-2)",
  border: "1px dashed var(--line-strong)",
};

const teamPlaceholderStyle: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "0.72rem",
  letterSpacing: "0.06em",
  color: "var(--stone-dim)",
  lineHeight: 1.5,
  textAlign: "center",
};

const contactListStyle: React.CSSProperties = {
  listStyle: "none",
  margin: "0 0 1.2rem",
  padding: 0,
};

const contactRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "120px 1fr",
  gap: "1rem",
  padding: "0.6rem 0",
  borderBottom: "1px solid var(--line)",
};

const contactLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  color: "var(--stone-dim)",
  textTransform: "uppercase",
};

const contactLinkStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--bronze-soft)",
};

const socialWrapStyle: React.CSSProperties = {
  marginTop: "0.4rem",
};

const socialSepStyle: React.CSSProperties = {
  color: "var(--stone-dim)",
};
