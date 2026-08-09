import { faqs } from "../data/content.ts";

export function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <p className="eyebrow" data-reveal>Perguntas</p>
        <h2 className="section-title" data-reveal>
          O que você precisa saber.
        </h2>
      </div>

      <div className="faq__list">
        {faqs.map((item, i) => (
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
  );
}
