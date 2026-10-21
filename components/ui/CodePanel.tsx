"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { snippets, ui } from "@/lib/content";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * YAML and HCL colouring, deliberately small. The alternation order is the
 * precedence: strings first, so a `#` or `$` inside quotes stays a string.
 * A YAML key is a word right before ": "; an HCL key is a word that opens
 * a line or an object and is followed by a single "=" (not "==" or "=>").
 */
const TOKEN =
  /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(#[^\n]*)|(\$\{?[\w.]+\}?)|([\w./-]+(?::[\w./-]+)*(?=:(?:\s|$))|(?<=(?:^|[{,])\s*)[\w-]+(?=\s*=(?![=>])))|\b(module|output|resource|variable|for|in|true|false|null)\b|\b(\d+(?:\.\d+)?(?:m|Mi|Gi)?)\b/g;

const CLASS = [
  "text-text", // string
  "text-line-strong italic", // comment
  "text-amber/80", // variable
  "text-acid", // key
  "text-acid/70", // keyword
  "text-amber", // number
];

function highlight(line: string) {
  const parts: { text: string; className: string }[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(line))) {
    if (match.index > last) {
      parts.push({ text: line.slice(last, match.index), className: "text-muted" });
    }
    const group = match.slice(1).findIndex(Boolean);
    parts.push({ text: match[0], className: CLASS[group] ?? "text-muted" });
    last = match.index + match[0].length;
  }
  if (last < line.length) parts.push({ text: line.slice(last), className: "text-muted" });
  return parts;
}

export function CodePanel() {
  const { t } = useLang();
  const [active, setActive] = useState(snippets[0].file);
  const snippet = snippets.find((s) => s.file === active) ?? snippets[0];
  const lines = snippet.code.split("\n");

  return (
    <div className="rounded-xl border hair bg-panel/80 p-4">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <span className="t-mono text-muted">{t(ui.hero.codeTitle)}</span>
        <span className="t-mono text-line-strong">{snippet.lang}</span>
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {snippets.map((item) => {
          const on = item.file === active;
          return (
            <button
              key={item.file}
              type="button"
              onClick={() => setActive(item.file)}
              aria-pressed={on}
              className={`rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                on
                  ? "border-acid/50 bg-acid/10 text-acid"
                  : "hair text-muted hover:border-line-strong hover:text-text"
              }`}
            >
              {item.file}
            </button>
          );
        })}
      </div>

      {/* Only opacity changes between tabs — nothing here animates layout. */}
      <div className="overflow-x-auto rounded-lg bg-ink/60 p-2.5">
        <AnimatePresence mode="wait">
          <motion.pre
            key={snippet.file}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="font-mono text-[11px] leading-[1.6] sm:text-[11.75px]"
          >
            {lines.map((line, index) => (
              <div key={index} className="flex gap-3">
                <span className="w-4 shrink-0 select-none text-right text-line-strong">
                  {index + 1}
                </span>
                <span className="whitespace-pre">
                  {line === "" ? " " : highlight(line).map((part, i) => (
                    <span key={i} className={part.className}>
                      {part.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </motion.pre>
        </AnimatePresence>
      </div>

      <p className="mt-3 border-t hair pt-2.5 text-xs leading-snug text-muted">
        {t(snippet.note)}
      </p>
    </div>
  );
}
