import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import site from "@/data/site.json";

const bullets = [
  "Сначала — стратегия, потом — оплата",
  "Судебная и досудебная практика",
  "Переговоры с оппонентом и органами",
];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden bg-law-900 pt-[88px] md:pt-[104px]">
      <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12 md:items-center md:py-24 lg:py-28">
        <div className="md:col-span-7">
          <span className="label text-gold-400">Официальное бюро · {site.city}</span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-paper-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Юридическая защита, которая{" "}
            <span className="text-gold">снижает риски</span> до суда
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper-200/85 md:text-xl">
            Гражданские и уголовные дела, бизнес-споры и личные ситуации. Разбираем факты, строим линию защиты,
            ведём переговоры и представляем интересы в суде.
          </p>
          <ul className="mt-8 space-y-3 text-paper-200/90">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#lead" className="btn-primary inline-flex w-full sm:w-auto">
              Записаться на разбор
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary w-full sm:w-auto">
              Смотреть практику
            </a>
          </div>
          <p className="mt-4 text-xs text-paper-200/50">
            Отправляя заявку, вы соглашаетесь с политикой конфиденциальности. Первичный анализ — бесплатно, без
            обязательств.
          </p>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.2, duration: 0.6 }}
            className="card relative border-gold/20 bg-law-800/50 p-6 sm:p-8"
          >
            <div className="text-sm font-bold uppercase tracking-wider text-gold">Почему клиенты остаются</div>
            <p className="mt-3 font-display text-2xl text-paper-50">Результат, а не «процесс ради процесса»</p>
            <p className="mt-3 text-sm leading-relaxed text-paper-200/80">
              Мы не подписываем пустых обещаний. На вводе — понятные сроки, прозрачный гонорар и план, который
              можно защищать как в переговорах, так и в зале суда.
            </p>
            <div className="mt-6 grid gap-3 rounded-2xl border border-paper-200/10 bg-law-900/50 p-4 text-sm text-paper-200/80">
              <div className="flex items-center justify-between gap-2">
                <span>Средняя оценка</span>
                <span className="font-display text-2xl text-gold">4.9</span>
              </div>
              <div className="h-px bg-paper-200/10" />
              <div>Ответ в рабочий день — до 2 часов</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
