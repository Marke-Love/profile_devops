"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { langs, type L, type Lang } from "@/lib/content";

const STORAGE_KEY = "profile-lang";

/**
 * The stored preference is an external store, so the server can render
 * Russian and the client can pick up a saved choice without a
 * setState-in-effect round trip.
 */
function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readStored(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (langs.includes(stored as Lang)) return stored as Lang;
  } catch {
    // Storage is unavailable in private mode; fall through to the locale.
  }
  const locale = navigator.language.toLowerCase();
  if (locale.startsWith("ru")) return "ru";
  if (locale.startsWith("ka")) return "ka";
  return "en";
}

type LanguageValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  /** Resolve a translated string to the active language. */
  t: (value: L) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, readStored, (): Lang => "ru");
  const [chosen, setChosen] = useState<Lang | null>(null);
  const lang = chosen ?? stored;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setChosen(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice simply won't persist.
    }
  }, []);

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, t: (v: L) => v[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
