import { motion } from "framer-motion";
import { Scale, Shield, Briefcase, Users, ArrowUpRight } from "lucide-react";
import services from "@/data/services.json";
import { cn } from "@/lib/cn";

const iconMap = {
  scale: Scale,
  shield: Shield,
  briefcase: Briefcase,
  users: Users,
} as const;

type Svc = (typeof services)[number];

function IconFor({ s }: { s: Svc }) {
  const I = iconMap[s.icon as keyof typeof iconMap] ?? Scale;
  return <I className="h-5 w-5" />;
}

export function Services() {
  return (
    <section id="services" className="bg-paper-50 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="label text-gold-600">Практики</span>
          <h2 className="mt-3 font-display text-3xl text-law-900 sm:text-4xl md:text-5xl">
            Сильные направления <span className="text-accent">и понятные шаги</span>
          </h2>
          <p className="mt-4 text-law-800/70 md:text-lg">
            Выбирайте направление — на консультации развернём в стратегию: доказательная база, риски, срок, гонорар.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href="#lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "group card relative overflow-hidden p-6 transition",
                "hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-law-900 text-gold">
                  <IconFor s={s} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-law-800/30 transition group-hover:text-gold" />
              </div>
              <h3 className="mt-5 font-display text-xl text-law-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-law-800/70">{s.subtitle}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold-600">Обсудить кейс →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
