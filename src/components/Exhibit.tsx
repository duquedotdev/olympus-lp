import type { Deity } from "../data/content.ts";

export function Exhibit({ deity, index }: { deity: Deity; index: number }) {
  return (
    <article
      className={`exhibit exhibit--${deity.status}`}
      id={deity.id}
      data-reveal
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <header className="exhibit__head">
        <span className="exhibit__glyph" aria-hidden="true">{deity.glyph}</span>
        <span className={`chip chip--${deity.status}`}>
          {deity.statusLabel} · {deity.eta}
        </span>
      </header>

      <p className="exhibit__domain mono">{deity.domain.toUpperCase()}</p>
      <h3 className="exhibit__name">{deity.name}</h3>
      <p className="exhibit__tagline">{deity.tagline}</p>
      <p className="exhibit__desc">{deity.description}</p>

      <footer className="exhibit__foot">
        <span className="exhibit__platforms mono">{deity.platforms}</span>
      </footer>
    </article>
  );
}
