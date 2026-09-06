import { useEffect, useRef, useState } from "react";

export function useCinematicScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [paused, setPaused] = useState(false);
  const playing = !reducedMotion && !paused;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const video = videoRef.current;
    if (!scene || !video) return;
    if (!playing) {
      video.pause();
      scene.style.setProperty("--scene-shift", "0px");
      return;
    }

    const desktop = window.matchMedia("(min-width: 901px)");
    let visible = false;
    let frame = 0;
    const update = () => {
      frame = 0;
      const shift = desktop.matches ? Math.max(0, -scene.getBoundingClientRect().top) : 0;
      scene.style.setProperty("--scene-shift", `${shift}px`);
    };
    const onScroll = () => {
      if (visible && !frame) frame = window.requestAnimationFrame(update);
    };
    const syncPlayback = () => {
      if (visible && !document.hidden) {
        void video.play().catch(() => {});
        onScroll();
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(scene);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", syncPlayback);
    desktop.addEventListener("change", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", syncPlayback);
      desktop.removeEventListener("change", update);
      window.cancelAnimationFrame(frame);
      video.pause();
    };
  }, [playing]);

  return { sceneRef, videoRef, playing, reducedMotion, toggleMotion: () => setPaused((value) => !value) };
}
