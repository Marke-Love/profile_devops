"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ui, type Pipeline as PipelineData } from "@/lib/content";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * The counterpart to BeforeAfter for cases whose result is a process
 * rather than a number: the stages light up in order, like a pipeline
 * run, and the last one stays lit as the place the change lands.
 */
export function Pipeline({ pipeline }: { pipeline: PipelineData }) {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const step = reduced ? 0 : 0.22;
  const last = pipeline.stages.length - 1;

  return (
    <div ref={ref} className="rounded-lg border hair bg-panel/60 p-5">
      <p className="t-mono mb-5 text-muted">{t(pipeline.caption)}</p>

      <ol className="relative">
        {/* The rail fills top to bottom as the run progresses. */}
        <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-panel-2" />
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-3 w-px origin-top bg-acid"
          style={{ bottom: "0.75rem" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: inView ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : step * last, ease: "linear" }}
        />

        {pipeline.stages.map((stage, index) => (
          <li key={stage} className="relative flex items-center gap-4 py-1.5">
            <motion.span
              aria-hidden
              className="relative z-10 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border"
              initial={{ borderColor: "#2b323c", backgroundColor: "#07090c" }}
              animate={
                inView
                  ? { borderColor: "#d2f94b", backgroundColor: index === last ? "#d2f94b" : "#07090c" }
                  : undefined
              }
              transition={{ duration: 0.2, delay: index * step }}
            >
              {index === last && !reduced && inView ? (
                <span className="absolute inset-0 animate-ping rounded-full bg-acid opacity-40" />
              ) : null}
            </motion.span>
            <motion.span
              className="font-mono text-sm"
              initial={{ color: "#79838f" }}
              animate={inView ? { color: index === last ? "#d2f94b" : "#e8ecef" } : undefined}
              transition={{ duration: 0.2, delay: index * step }}
            >
              {stage}
            </motion.span>
          </li>
        ))}
      </ol>

      <p className="t-mono mt-5 border-t hair pt-4 text-acid">
        {pipeline.stages.length} {t(ui.cases.stages)} · ✓
      </p>
    </div>
  );
}
