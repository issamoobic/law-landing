import { motion } from "framer-motion";
import { FileText, Gavel, Handshake, Phone } from "lucide-react";

const steps = [
  {
    title: "Бриф 15–20 минут",
    text: "Коротко фиксируем факты, сроки и что уже сделано. Без «продажи страха» — только варианты хода.",
    icon: Phone,
  },
  {
    title: "Аналитика и стратегия",
    text: "Оценка перспектив, доказательств, рисков. Вам — понятные сценарии и прогноз по этапам.",
    icon: FileText,
  },
  {
    title: "Переговоры / процесс",
    text: "Работаем в досудебной плоскости или в суде — с единой линией и контролем сроков.",
    icon: Handshake,
  },
  {
    title: "Результат",
    text: "Закрепляем итог: мировое, решение, соглашение или понятный план апелляции.",
    icon: Gavel,
  },
];

export function Process() {
  return (
    <section id="process" className="bg-law-900 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="label text-gold-400">Прозрачность</span>
          <h2 className="mt-3 font-display text-3xl text-paper-50 sm:text-4xl md:text-5xl">Как мы ведём дело</h2>
          <p className="mt-4 text-paper-200/75 md:text-lg">
            Четырёхшаговая схема — удобно и для частного клиента, и для бизнеса. На каждом этапе — отчёт и доступ к
            документообороту.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-paper-200/10 bg-law-800/50 p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-paper-200/50">
                  Шаг {i + 1} / 4
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl text-paper-50">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-200/75">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
