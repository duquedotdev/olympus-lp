import { useEffect, useState } from "react";

const REF_KEY = "olympkus_ref";
const CODE_KEY = "olympkus_code";

export function useReferral() {
  const [savedCode, setSavedCode] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const ref = url.searchParams.get("ref");
    if (ref) {
      localStorage.setItem(REF_KEY, ref);
      url.searchParams.delete("ref");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }
    setSavedCode(localStorage.getItem(CODE_KEY));
  }, []);

  const rememberCode = (code: string) => {
    localStorage.setItem(CODE_KEY, code);
    setSavedCode(code);
  };

  const getRef = () => localStorage.getItem(REF_KEY);

  return { savedCode, rememberCode, getRef };
}
