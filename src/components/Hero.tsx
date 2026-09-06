import { OlympusLandscape } from "./olympus-landscape.tsx";
import { useCinematicScene } from "../hooks/use-cinematic-scene.ts";

export function Hero() {
  const { sceneRef, videoRef, playing, reducedMotion, toggleMotion } = useCinematicScene();

  return (
    <section className="hero" id="top" ref={sceneRef} data-motion={playing ? "running" : "paused"} aria-labelledby="hero-title">
      <OlympusLandscape />
      <div className="hero__grid">
        <div className="hero__lede">
          <p className="eyebrow hero__eyebrow"><span /> O futuro tem raízes eternas</p>
          <h1 className="hero__title" id="hero-title">
            <span className="reveal-line"><span>Seu tempo</span></span>
            <span className="reveal-line"><span>é <em>sagrado.</em></span></span>
          </h1>
          <p className="hero__overture">Seu próprio panteão de IA.</p>
          <p className="hero__sub">
            Pluto cuida do seu dinheiro. Aion do seu tempo. Zeus orquestra
            tudo. Você aprova a intenção; eles cuidam da execução.
          </p>
          <div className="hero__actions">
            <a href="#access" className="btn btn--solid">Entrar para a lista <span aria-hidden="true">↗</span></a>
            <a href="#pantheon" className="hero__explore">Conhecer o panteão <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero__availability"><span /> Lista aberta · Pluto previsto para jan. 2027</p>
        </div>

        <figure className="olympus-shrine">
          <div className="olympus-shrine__halo" aria-hidden="true"><span /><span /></div>
          <div className="olympus-shrine__column olympus-shrine__column--left" aria-hidden="true" />
          <div className="olympus-shrine__column olympus-shrine__column--right" aria-hidden="true" />
          <div className="olympus-shrine__arch">
            <video
              ref={videoRef}
              className="olympus-shrine__statue"
              poster="/zeus.png"
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
            >
              {!reducedMotion && <source src="/zeus.mp4" type="video/mp4" />}
            </video>
            <div className="olympus-shrine__veil" aria-hidden="true" />
          </div>
          <span className="olympus-shrine__inscription" aria-hidden="true">ΖΕΥΣ</span>
          <figcaption className="olympus-shrine__caption">
            <span className="olympus-shrine__number">III</span>
            <span>Zeus <small>O orquestrador do Panteão</small></span>
          </figcaption>
        </figure>
      </div>
      <div className="hero__horizon">
        <a href="#manifesto" className="hero__scroll"><span aria-hidden="true">↓</span> A jornada começa aqui</a>
        <span className="hero__coordinates">MONTE OLIMPO · 40°N 22°E</span>
        {!reducedMotion && (
          <button className="hero__motion" type="button" onClick={toggleMotion} aria-pressed={!playing}>
            {playing ? "Pausar movimento" : "Retomar movimento"}
          </button>
        )}
      </div>
    </section>
  );
}
