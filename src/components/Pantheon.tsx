import { deities } from "../data/content.ts";
import { Exhibit } from "./Exhibit.tsx";

export function Pantheon() {
  return (
    <section className="pantheon" id="pantheon">
      <div className="section-head">
        <p className="eyebrow" data-reveal>II · O Panteão</p>
        <h2 className="section-title" data-reveal>
          Forças distintas.<br /><em>Uma só vontade. A sua.</em>
        </h2>
        <p className="section-lede" data-reveal>
          Na mitologia, cada divindade tem seu domínio. Aqui, cada agente tem
          sua especialidade. Dinheiro, tempo e intenção — em sintonia.
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
