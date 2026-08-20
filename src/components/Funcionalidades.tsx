import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type FeatureCard = {
  icon: string;
  title: string;
  desc: string;
  href: string;
};

const cards: FeatureCard[] = [
  {
    icon: "✦",
    title: "Assistente de IA",
    desc: "Chat com raciocínio visível, categorização com 96% de confiança, insights e quick wins gerados a partir dos seus dados.",
    href: "/funcionalidades/ia-metis",
  },
  {
    icon: "▣",
    title: "Orçamentos",
    desc: "Orçamentos por categoria que se montam sozinhos. Semanal, mensal, trimestral ou anual — com alertas de limite.",
    href: "/funcionalidades/orcamentos",
  },
  {
    icon: "▼",
    title: "Dívidas & Parcelamentos",
    desc: "Dívidas ativas e quitadas, simulação de cenários de aceleração, parcelamentos com vencimento agrupado. O maior diferencial do Pluto.",
    href: "/funcionalidades/dividas-parcelas",
  },
  {
    icon: "◆",
    title: "Metas",
    desc: "Reserva de emergência, quitar dívida, investir, poupar para uma viagem. Progresso visível e projeção de quando chega lá.",
    href: "/funcionalidades/metas",
  },
  {
    icon: "◐",
    title: "Recorrências & Assinaturas",
    desc: "Streaming, academia, software, contas fixas — tudo numa tela. Pluto soma o total mensal e identifica assinaturas esquecidas.",
    href: "/funcionalidades/recorrencias",
  },
  {
    icon: "⚿",
    title: "Segurança & Auditoria",
    desc: "Login com Google, dados sensíveis protegidos com criptografia e tela de auditoria que registra cada ação. Você vê o histórico de tudo.",
    href: "/pluto",
  },
];

export function Funcionalidades() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="funcionalidades">
        <div className="page-hero__inner">
          <a href="/pluto" className="blog-back">← Pluto</a>
          <p className="eyebrow"><span className="eyebrow__dot" />FUNCIONALIDADES</p>
          <h1 className="page-hero__title">Tudo o que o Pluto faz — e por que importa.</h1>
          <p className="page-hero__lede">
            Cada área do Pluto resolve uma dor real de quem tenta controlar o
            próprio dinheiro. Não é lista de features — é o que muda no seu dia
            quando você para de planilhar e começa a delegar.
          </p>
        </div>
      </section>

      <section className="panteao-grid">
        {cards.map((c) => (
          <a key={c.href} href={c.href} className="panteao-card" data-reveal>
            <div className="panteao-card__head">
              <span className="panteao-card__glyph">{c.icon}</span>
            </div>
            <h2 className="panteao-card__name">{c.title}</h2>
            <p className="panteao-card__desc">{c.desc}</p>
            <span className="panteao-card__more mono">VER DETALHES →</span>
          </a>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
