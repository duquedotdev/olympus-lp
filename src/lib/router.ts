// Client-side path router helpers.
// Intercepts clicks on internal <a href="/..."> links so navigation happens
// via the History API instead of a full page reload.

export function navigate(path: string): void {
  const next = path || "/";
  const cur = window.location.pathname + window.location.search + window.location.hash;
  if (next === cur) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", next);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function scrollToHash(hash: string): void {
  if (!hash) return;
  const id = hash.slice(1);
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function setupLinkInterceptor(): void {
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const anchor = (e.target as HTMLElement | null)?.closest("a");
    if (!anchor) return;
    if (anchor.target === "_blank") return;

    const href = anchor.getAttribute("href");
    if (!href) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
    // Pure in-page hash anchors (e.g. "#access") — let the browser scroll natively.
    if (href.startsWith("#")) return;

    let url: URL;
    try {
      url = new URL(href, window.location.origin);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;

    e.preventDefault();
    navigate(url.pathname + url.search + url.hash);
    // After client-side render, jump to the requested section (if any).
    if (url.hash) {
      setTimeout(() => scrollToHash(url.hash), 80);
    }
  });
}
