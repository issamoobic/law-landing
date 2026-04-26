import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import site from "@/data/site.json";

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#lead", label: "Консультация" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-law-900/90 shadow-lift backdrop-blur-xl" : "bg-law-900/40 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-3 md:h-[80px]">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center md:h-11 md:w-11">
            <img
              src="/logo.png"
              alt={site.brand}
              width={44}
              height={44}
              className="h-10 w-10 object-contain md:h-11 md:w-11"
              draggable={false}
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base text-paper-50 md:text-lg">{site.brand}</div>
            <div className="hidden truncate text-[9px] uppercase tracking-[0.25em] text-paper-200/60 sm:block">
              {site.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-paper-200/80 transition hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm text-paper-100">
            <Phone className="h-4 w-4 text-gold" />
            {site.phone}
          </a>
          <a href="#lead" className="btn-primary !min-h-11 !px-5 !text-xs md:!text-sm">
            Бесплатный разбор
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="#lead" className="btn-primary !min-h-10 !px-4 !text-xs">
            Заявка
          </a>
          <button
            type="button"
            aria-label={open ? "Закрыть" : "Меню"}
            className="grid h-11 w-11 place-items-center text-paper-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-paper-200/10 bg-law-900 lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-paper-100/90"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 px-3 text-gold"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
