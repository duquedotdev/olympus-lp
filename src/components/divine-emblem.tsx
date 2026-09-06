export function DivineEmblem({ domain }: { domain: string }) {
  return (
    <svg className={`divine-emblem divine-emblem--${domain}`} viewBox="0 0 240 200" fill="none" aria-hidden="true">
      <ellipse className="divine-emblem__orbit" cx="120" cy="100" rx="100" ry="68" />
      <circle cx="120" cy="100" r="72" strokeDasharray="1 9" />
      <circle cx="120" cy="100" r="57" />
      <path className="divine-emblem__axis" d="M120 8v28m0 128v28M18 100h28m148 0h28" />
      {domain === "pluto" ? (
        <g className="divine-emblem__symbol">
          <path d="m120 57 32 43-32 43-32-43Z" />
          <path d="m120 57 11 43-11 43-11-43Zm-32 43h64" />
          <path d="M78 140c-18-18-20-46-8-67m92 67c18-18 20-46 8-67" />
        </g>
      ) : domain === "aion" ? (
        <g className="divine-emblem__symbol">
          <path d="M95 60h50m-50 80h50M99 60c0 28 42 52 42 80m0-80c0 28-42 52-42 80" />
          <path d="m107 72 13 17 13-17m-26 56 13-17 13 17" />
          <circle cx="120" cy="100" r="5" />
        </g>
      ) : (
        <g className="divine-emblem__symbol">
          <path d="m131 48-39 61h27l-10 43 41-65h-29Z" />
          <path d="m79 68-10-9m92 73 10 9m-96-18-13 4m103-50 13-4" />
        </g>
      )}
      <path d="m120 19 4 5-4 5-4-5Zm0 152 4 5-4 5-4-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
