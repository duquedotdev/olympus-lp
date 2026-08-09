import { deities } from "../data/content.ts";
import { Exhibit } from "./Exhibit.tsx";

export function Pantheon() {
  return (
    <section className="pantheon" id="pantheon">
      <div className="section-head">
        <p className="eyebrow" data-reveal>O Panteão</p>
        <h2 className="section-title" data-reveal>
          Três domínios. Três agentes. Um só comando.
        </h2>
        <p className="section-lede" data-reveal>
          Autonomia isolada virou commodity. A diferença é ter um agente
          especializado por domínio — e Zeus para reger todos eles.
        </p>
      </div>

      <div className="pantheon__grid">
        {deities.map((d, i) => (
          <Exhibit key={d.id} deity={d} index={i} />
        ))}
      </div>

      <p className="pantheon__note mono" data-reveal>
        Datas previstas e sujeitas a alteração.
      </p>
    </section>
  );
}
