import { motion } from "framer-motion";
import { Award, Lock, Scale } from "lucide-react";
import site from "@/data/site.json";

const icons = {
  0: <Scale className="h-5 w-5" />,
  1: <Award className="h-5 w-5" />,
  2: <Lock className="h-5 w-5" />,
};

export function Trust() {
  return (
    <section className="border-y border-paper-200/80 bg-paper-100/80">
      <div className="container-x py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {site.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-law-900 text-gold">
                {icons[i as 0 | 1 | 2] ?? <Scale className="h-5 w-5" />}
              </div>
              <div>
                <div className="font-display text-3xl text-law-900 md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-law-800/70">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
