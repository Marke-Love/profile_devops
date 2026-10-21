import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { SiteChrome } from "@/components/ui/SiteChrome";
import "./globals.css";

/** The page renders Russian first, so those subsets are worth preloading. */
const PRELOAD_FONTS = [
  "/fonts/unbounded-cyrillic.woff2",
  "/fonts/golos-text-cyrillic.woff2",
  "/fonts/jetbrains-mono-cyrillic.woff2",
];

/** Set NEXT_PUBLIC_SITE_URL once the site has its real address. */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const TITLE = "Александр Маркелов — DevOps-инженер";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description:
    "DevOps-инженер, 4+ года опыта: GitLab CI, Kubernetes, Helm, Terraform, Ansible, Prometheus, Grafana, ELK. Диагностика инцидентов 3 ч → 45 мин, задержка между сервисами 800 → 450 мс.",
  keywords: [
    "DevOps", "Kubernetes", "Helm", "Docker", "GitLab CI", "GitHub Actions", "Terraform",
    "Ansible", "Prometheus", "Grafana", "ELK", "Linux", "Санкт-Петербург",
  ],
  authors: [{ name: "Александр Маркелов", url: "https://t.me/Mrklv001" }],
  openGraph: {
    type: "profile",
    locale: "ru_RU",
    alternateLocale: ["en_US", "ka_GE"],
    title: TITLE,
    description:
      "4+ года опыта. CI/CD, Kubernetes, Terraform, Ansible, Prometheus + Grafana. Диагностика инцидентов 3 ч → 45 мин.",
    siteName: "Александр Маркелов",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "CI/CD, Kubernetes, Terraform, Prometheus. Диагностика инцидентов 3 ч → 45 мин.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Александр Маркелов",
  jobTitle: "DevOps Engineer",
  email: "mailto:mrklv001@yandex.ru",
  telephone: "+7 921 650-49-35",
  address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
  url: SITE,
  sameAs: ["https://t.me/Mrklv001"],
  knowsLanguage: ["ru", "en"],
  knowsAbout: [
    "Kubernetes", "Helm", "Docker", "GitLab CI", "GitHub Actions", "Terraform", "Ansible",
    "Prometheus", "Grafana", "ELK", "Linux", "Nginx", "PostgreSQL", "RabbitMQ", "Python",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Университет ИТМО" },
    { "@type": "CollegeOrUniversity", name: "СПбГЭУ" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="antialiased">
      <head>
        {PRELOAD_FONTS.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
        <noscript>
          {/* Reveals start hidden and are shown by script; without it, show everything. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <SiteChrome />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
