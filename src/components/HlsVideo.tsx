import { useEffect, useRef } from "react";
import Hls from "hls.js";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Player de vídeo de fundo com suporte a HLS (Safari usa HLS nativo;
 demais browsers usam hls.js). Mudo, em loop, autoplay, sem controles.
 */
export function HlsVideo({ src, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari / iOS — suporte nativo a HLS
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    const tryPlay = () => video.play().catch(() => {});
    video.addEventListener("loadedmetadata", tryPlay);
    tryPlay();

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      if (hls) hls.destroy();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
