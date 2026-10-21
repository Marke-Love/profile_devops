"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * One shared IntersectionObserver for every reveal on the page, and a
 * plain CSS transition to do the moving. The previous version created a
 * framer-motion instance per element — around thirty of them — each with
 * its own observer and animation loop.
 */
let observer: IntersectionObserver | null = null;
const pending = new Map<Element, () => void>();

function watch(el: Element, onSeen: () => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        pending.get(entry.target)?.();
        pending.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "-12% 0px -12% 0px" },
  );

  pending.set(el, onSeen);
  observer.observe(el);

  return () => {
    pending.delete(el);
    observer?.unobserve(el);
  };
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return watch(el, () => el.setAttribute("data-reveal", "in"));
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={
        {
          "--reveal-y": `${y}px`,
          "--reveal-delay": `${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
