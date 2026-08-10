export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={`logo ${className ?? ""}`} aria-label="Olympkus AI — início">
      <img src="/logo.png" alt="Olympkus AI" className="logo__mark" />
    </a>
  );
}
