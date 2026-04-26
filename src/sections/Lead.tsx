import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Send } from "lucide-react";
import site from "@/data/site.json";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Как к вам обращаться?"),
  phone: z.string().min(10, "Нужен телефон для связи"),
  topic: z.string().min(3, "Коротко опишите тему"),
  consent: z.boolean().refine((v) => v === true, { message: "Нужно согласие" }),
});

type Form = z.infer<typeof schema>;

export function Lead() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

  function onSubmit(data: Form) {
    // Здесь подключается отправка на почту/CRM/телеграм
    // eslint-disable-next-line no-console
    console.info("[lead]", data);
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 5000);
  }

  return (
    <section id="lead" className="border-t border-paper-200/80 bg-paper-100 py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="label text-gold-600">Конверсия</span>
            <h2 className="mt-3 font-display text-3xl text-law-900 sm:text-4xl md:text-5xl">
              Бесплатный разбор ситуации
            </h2>
            <p className="mt-4 text-law-800/75 md:text-lg">
              Оставьте контакт и кратко опишите кейс. Перезвоним в рабочие часы, зафиксируем факты и предложим план —
              без давления и «скрытых» условий.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-law-800/80">
              <li className="flex gap-2">
                <Check className="h-5 w-5 shrink-0 text-gold" />
                WhatsApp / Telegram — по желанию (укажите в комментарии к звонку)
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 shrink-0 text-gold" />
                {site.hours} · {site.city}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card border-law-800/5 bg-paper-50 p-6 sm:p-8 md:p-10"
            >
              {done && (
                <div className="mb-4 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-law-800">
                  Заявка отправлена. Мы свяжемся с вами в ближайшее рабочее время.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-law-800/60">Имя</label>
                    <input
                      className="mt-1.5 w-full rounded-2xl border border-paper-200/90 bg-paper-50 px-4 py-3.5 text-law-900 outline-none ring-law-900/0 transition focus:ring-2 focus:ring-gold/30"
                      placeholder="Как вас зовут"
                      {...register("name")}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600/80">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-law-800/60">Телефон</label>
                    <input
                      type="tel"
                      className="mt-1.5 w-full rounded-2xl border border-paper-200/90 bg-paper-50 px-4 py-3.5 text-law-900 outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="+7"
                      inputMode="tel"
                      autoComplete="tel"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600/80">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-law-800/60">
                    Суть вопроса в 1–2 фразы
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1.5 w-full rounded-2xl border border-paper-200/90 bg-paper-50 px-4 py-3.5 text-law-900 outline-none focus:ring-2 focus:ring-gold/30"
                    placeholder="Например: спор с подрядчиком, задержка сделки, угроза проверки…"
                    {...register("topic")}
                  />
                  {errors.topic && <p className="mt-1 text-sm text-red-600/80">{errors.topic.message}</p>}
                </div>
                <label className="flex items-start gap-3 text-sm text-law-800/80">
                  <input type="checkbox" className="mt-1 h-5 w-5 accent-gold" {...register("consent")} />
                  <span>
                    Соглашаюсь с обработкой персональных данных и{" "}
                    <a className="font-semibold text-law-900 underline" href="#policy">
                      политикой конфиденциальности
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && <p className="text-sm text-red-600/80">{errors.consent.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary w-full !py-4 text-base",
                    isSubmitting && "pointer-events-none opacity-60",
                  )}
                >
                  Получить разбор
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-law-800/50">Нажимая кнопку, вы не обязываете себя к оплате</p>
              </form>
            </motion.div>
          </div>
        </div>

        <div id="policy" className="mt-12 rounded-2xl border border-paper-200/80 bg-paper-50 p-6 text-sm text-law-800/80 md:p-8">
          <h3 className="font-display text-lg text-law-900">Политика конфиденциальности (кратко)</h3>
          <p className="mt-2">
            Данные формы (имя, телефон, описание) используются только для связи по заявке. Передача третьим лицам — только
            с вашего согласия или по закону. Срок хранения — до достижения цели обработки либо до отзыва согласия. Запросы
            субъекта ПД: по контактам компании: {site.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
