"use client";

import { focus, person, preferences, ui } from "@/lib/content";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        eyebrow={t(ui.about.eyebrow)}
        meta={`${t(person.role)} · ${t(person.tenure)}`}
      >
        {t(ui.about.heading)}
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-balance text-xl leading-relaxed text-text sm:text-2xl">
              {t(person.summary)}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted sm:text-lg">
              {t(person.summary2)}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <dl className="divide-y divide-[var(--color-line)] border-y hair">
              {preferences.map((item) => (
                <div key={item.label.en} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="t-mono shrink-0 text-muted">{t(item.label)}</dt>
                  <dd className="text-right text-sm text-text">{t(item.value)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* What a hiring manager is screening for, one claim per card. */}
      <div className="mt-20 sm:mt-24">
        <Reveal>
          <p className="t-mono mb-6 text-acid">{t(ui.about.focus)}</p>
        </Reveal>
        <ul className="grid gap-px overflow-hidden rounded-lg border hair bg-line sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((item, index) => (
            <li
              key={item.id}
              className={`bg-ink ${index === focus.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <Reveal delay={(index % 3) * 0.06} className="h-full">
                <div className="group h-full p-6 transition-colors hover:bg-panel">
                  <p className="t-num text-xs text-line-strong">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-lg leading-snug text-text transition-colors group-hover:text-acid">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.text)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
