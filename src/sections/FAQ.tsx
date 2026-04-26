import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import faq from "@/data/faq.json";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faq[0].id);

  return (
    <section id="faq" className="border-t border-paper-200/80 bg-paper-100 py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="label text-gold-600">FAQ</span>
          <h2 className="mt-3 font-display text-3xl text-law-900 sm:text-4xl">Частые вопросы</h2>
          <p className="mt-4 text-law-800/70">Не нашли ответ? Напишите в форме — подскажем по срокам и формату работы.</p>
        </div>
        <div className="space-y-3 md:col-span-8">
          {faq.map((f) => {
            const active = open === f.id;
            return (
              <div key={f.id} className="rounded-2xl border border-paper-200/90 bg-paper-50">
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : f.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg text-law-900">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-paper-200">
                    {active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-law-800/75">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
