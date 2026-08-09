import { useEffect, useState } from "react";

function current(): string {
  return window.location.hash.replace(/^#/, "").split("?")[0];
}

export function useHashRoute(): string {
  const [route, setRoute] = useState(current);
  useEffect(() => {
    const onChange = () => setRoute(current());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
