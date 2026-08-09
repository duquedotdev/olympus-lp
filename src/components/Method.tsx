import { principles } from "../data/content.ts";

export function Method() {
  return (
    <section className="method" id="method">
      <div className="section-head">
        <p className="eyebrow" data-reveal>Método</p>
        <h2 className="section-title" data-reveal>
          Agêntico significa que ele age. Sob as suas regras.
        </h2>
      </div>

      <ol className="method__list">
        {principles.map((p) => (
          <li className="method__item" key={p.k} data-reveal>
            <span className="method__k mono">{p.k}</span>
            <div className="method__body">
              <h3 className="method__title">{p.title}</h3>
              <p className="method__text">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
