import type { ReactNode } from "react";
import { interiorScenes } from "../data/interior-scenes.ts";
import { OlympusLandscape } from "./olympus-landscape.tsx";
import { MythicSeal } from "./mythic-seal.tsx";

export function InteriorHero({ id, children, product = false }: { id: string; children: ReactNode; product?: boolean }) {
  const scene = interiorScenes[id] ?? interiorScenes.notfound;
  return (
    <section className={`interior-hero ${product ? "product-hero" : "page-hero"}`} id={id} data-scene={scene.symbol}>
      <OlympusLandscape />
      <div className="interior-hero__grid">
        <div className="interior-hero__copy">
          <p className="eyebrow interior-hero__chapter">{scene.chapter}</p>
          {children}
        </div>
        <figure className={`mythic-art mythic-art--${scene.symbol}`}>
          <div className="mythic-art__orbit" aria-hidden="true" />
          <div className="mythic-art__niche">
            {product && id === "zeus" ? (
              <img className="mythic-art__marble" src="/zeus.png" alt="" width="1792" height="2390" />
            ) : (
              <MythicSeal symbol={scene.symbol} />
            )}
            <span className="mythic-art__inscription" aria-hidden="true">{scene.inscription}</span>
          </div>
          <div className="mythic-art__pedestal" aria-hidden="true" />
          <figcaption>{scene.caption}</figcaption>
        </figure>
      </div>
      <div className="interior-hero__frieze" aria-hidden="true"><span>OLYMPKUS AI</span><span>MITOLOGIA ENCONTRA INTELIGÊNCIA</span></div>
    </section>
  );
}
