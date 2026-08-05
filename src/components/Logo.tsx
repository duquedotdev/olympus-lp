export function Logo({ size = 28 }: { size?: number }) {
  return (
    <img
      src="/logo.svg"
      width={size}
      height={size}
      alt="Olympkus AI"
      style={{ display: "block", borderRadius: 4 }}
    />
  );
}
