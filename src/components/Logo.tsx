export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={`logo ${className ?? ""}`} aria-label="Olympkus AI — início">
      <img src="/logo.svg" alt="" className="logo__mark" aria-hidden="true" />
      <span className="logo__word">Olympkus<span className="logo__ai"> AI</span></span>
    </a>
  );
}
