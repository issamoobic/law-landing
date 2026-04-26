import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function StickyCta() {
  const [show, setShow] = useState(false);
  const [inLead, setInLead] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
      const el = document.getElementById("lead");
      if (el) {
        const r = el.getBoundingClientRect();
        setInLead(r.top < window.innerHeight * 0.5 && r.bottom > 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !inLead && (
        <motion.a
          href="#lead"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0"
        >
          <span className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-law-900 shadow-lift">
            <MessageCircle className="h-4 w-4" />
            Разбор ситуации — 0 ₽
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
