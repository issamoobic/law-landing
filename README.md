# Поможем — лендинг для адвокатов / юрбюро

Лендинг адвокатского бюро «Поможем» (Vite, React, Tailwind).

### Контент для клиента

- Живые данные грузятся с **`/content/*.json`** (папка `public/content/`).
- Без кода: открыть **`/admin.html`**, ввести пароль из `public/admin.html` (`ADMIN_PIN`) — **на самой странице** написано простыми шагами; то же в `COOKKUMBER/docs/редактирование-контента.md`.
- Разработчик: после правок в `src/data/` выполнить `npm run content:sync`, закоммитить `public/content/`.

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

## Telegram-бот

Отдельный пакет в папке **`telegram-bot/`**: команды `/start`, `/contacts`, `/site`, кнопки на лендинг и форму заявки. См. `telegram-bot/README.md` — токен от @BotFather, `npm install` и `npm run dev` внутри этой папки.

## Логотип

Файл `public/logo.png` — фирменный знак «Поможем» (сердце и руки). Замените PNG при смене бренда, сохраните имя `logo.png` или обновите пути в `Navbar.tsx` и `Footer.tsx`.

## Что менять под клиента

- `src/data/site.json` — бренд, телефон, email, город, метрики
- `src/data/services.json` — практики
- `src/data/faq.json`, `src/data/reviews.json` — вопросы и отзывы
- `src/sections/Lead.tsx` — подключить отправку на email/Telegram/CRM (сейчас `console.info`)

## Юридический ассистент (чат)

Виджет чата отвечает по **готовой базе** частых вопросов (без нейросети): логика в `src/lib/assistantKnowledge.ts`, вызов из `src/lib/assistantApi.ts`. Работает **и на `npm run dev`** (браузер), без ключа API.

Опционально: эндпоинт `api/assistant.ts` с теми же ответами — для внешних вызовов; переписи: `vercel.json`. Секреты OpenAI **не** нужны.

## Сборка

```bash
npm run build
```

Папка `dist/` — для деплоя на любой хостинг.
