import { useEffect } from "react";
import { deities } from "../data/content.ts";
import { CtaBand } from "./CtaBand.tsx";
import { InteriorHero } from "./interior-hero.tsx";
import { DivineEmblem } from "./divine-emblem.tsx";

export function Panteao() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <InteriorHero id="panteao">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <h1 className="page-hero__title">Três domínios. Três agentes. Um só comando.</h1>
          <p className="page-hero__lede">
            A Olympkus constrói um agente especializado para cada domínio da vida
            pessoal — dinheiro, tempo e corpo. Cada um é excelente no que faz.
            Você delega, não integra.
          </p>
        </div>
      </InteriorHero>

      <section className="panteao-grid">
        {deities.map((d) => (
          <a key={d.id} href={`/${d.id}`} className="panteao-card panteao-card--deity" data-deity={d.id} data-reveal>
            <div className="panteao-card__art"><DivineEmblem domain={d.id} /></div>
            <div className="panteao-card__head">
              <span className="panteao-card__glyph">{d.glyph}</span>
              <span className={`chip chip--${d.status}`}>{d.statusLabel} {d.eta}</span>
            </div>
            <p className="panteao-card__domain mono">{d.domain.toUpperCase()}</p>
            <h2 className="panteao-card__name">{d.name}</h2>
            <p className="panteao-card__tagline">{d.tagline}</p>
            <p className="panteao-card__desc">{d.description}</p>
            <span className="panteao-card__more mono">EXPLORAR →</span>
          </a>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
