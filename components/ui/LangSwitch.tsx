"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { langs, ui } from "@/lib/content";

export function LangSwitch() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="relative flex shrink-0 items-center gap-0.5 rounded-full border hair bg-panel/90 p-0.5"
      role="group"
      aria-label="Language"
    >
      {langs.map((option) => {
        const selected = option === lang;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={selected}
            aria-label={ui.langNames[option]}
            className={`relative rounded-full px-3 py-1 t-mono transition-colors ${
              selected ? "text-ink" : "text-muted hover:text-text"
            }`}
          >
            {selected && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-acid"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{ui.langLabels[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
