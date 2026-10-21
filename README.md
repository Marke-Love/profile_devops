# Сайт-визитка DevOps-инженера — Александр Маркелов

Одностраничный профиль DevOps-инженера на трёх языках (RU / EN / KA).
Next.js + Tailwind CSS + framer-motion. Весь текст — в `lib/content.ts`.

## Запуск

```bash
npm install
npm run dev
```

Откроется на http://localhost:3000

## Проверки

```bash
npm run build
npx tsc --noEmit
npx eslint .
```

Перед деплоем задайте `NEXT_PUBLIC_SITE_URL` — адрес сайта для OG-метаданных.
