# Поможем — лендинг для адвокатов / юрбюро

Готовый коммерческий шаблон: сильная конверсия, спокойная «юридическая» эстетика, адаптив, анимации.

## Стек

- Vite + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- react-hook-form + zod (форма заявки)

## Запуск

```bash
cd law-landing
npm install
npm run dev
```

Сайт: `http://127.0.0.1:5174`

## Логотип

Файл `public/logo.png` — фирменный знак «Поможем» (сердце и руки). Замените PNG при смене бренда, сохраните имя `logo.png` или обновите пути в `Navbar.tsx` и `Footer.tsx`.

## Что менять под клиента

- `src/data/site.json` — бренд, телефон, email, город, метрики
- `src/data/services.json` — практики
- `src/data/faq.json`, `src/data/reviews.json` — вопросы и отзывы
- `src/sections/Lead.tsx` — подключить отправку на email/Telegram/CRM (сейчас `console.info`)

## Сборка

```bash
npm run build
```

Папка `dist/` — для деплоя на любой хостинг.
