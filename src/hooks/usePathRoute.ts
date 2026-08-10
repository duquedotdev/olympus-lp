import { useEffect, useState } from "react";

function current(): string {
  // Normalize: strip leading slashes and a single trailing slash so that
  // "/privacy", "/privacy/" and "privacy" all resolve to "privacy".
  return window.location.pathname.replace(/^\/+/, "").replace(/\/+$/, "").split("?")[0];
}

export function usePathRoute(): string {
  const [route, setRoute] = useState(current);
  useEffect(() => {
    const onChange = () => setRoute(current());
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);
  return route;
}
