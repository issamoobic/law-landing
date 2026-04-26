import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import reviews from "@/data/reviews.json";
import { cn } from "@/lib/cn";

export function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const next = () => setI((v) => (v + 1) % reviews.length);

  return (
    <section id="reviews" className="bg-paper-50 py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label text-gold-600">Репутация</span>
            <h2 className="mt-3 font-display text-3xl text-law-900 sm:text-4xl md:text-5xl">Отзывы клиентов</h2>
            <p className="mt-3 max-w-xl text-law-800/70">Реальные сценарии с анонимизацией персональных данных.</p>
          </div>
          <div className="text-sm text-law-800/50">Средняя оценка 4.9 / 5</div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={r.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="relative"
              >
                <Quote className="absolute -left-1 -top-2 h-12 w-12 text-gold/30" />
                <p className="relative pl-2 font-display text-2xl leading-snug text-law-900 md:text-3xl">«{r.text}»</p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-law-900 font-display text-lg text-gold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-law-900">{r.name}</div>
                    <div className="text-xs uppercase tracking-wider text-law-800/50">{r.role}</div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-6 flex items-center gap-2">
              <button type="button" onClick={prev} className="grid h-11 w-11 place-items-center rounded-full border border-paper-200" aria-label="Назад">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-paper-200" aria-label="Вперёд">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="grid gap-3 lg:col-span-5">
            {reviews.map((rev, idx) => (
              <button
                key={rev.id}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition",
                  idx === i ? "border-gold/50 bg-paper-100" : "border-paper-200/90 hover:border-gold/30",
                )}
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="mt-2 text-sm text-law-800/80 line-clamp-2">{rev.text}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
