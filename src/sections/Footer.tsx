import { MapPin, Phone, Mail, Clock } from "lucide-react";
import site from "@/data/site.json";

export function Footer() {
  return (
    <footer className="bg-law-900 text-paper-200/80">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt=""
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 object-contain"
                draggable={false}
              />
              <div className="font-display text-2xl text-paper-50">
                {site.brand} <span className="text-gold">·</span> {site.tagline}
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper-200/60">
              Шаблон лендинга для юрбюро. Замените бренд, реквизиты и отзывы под конкретного адвоката. Не является
              публичной офертой.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:col-span-7">
            <div className="space-y-3 text-sm">
              <div className="label !text-gold-400/90">Контакты</div>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" />
                {site.email}
              </a>
            </div>
            <div className="space-y-3 text-sm">
              <div className="label !text-gold-400/90">Режим</div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-gold" />
                {site.hours}
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                {site.city}, очный и онлайн формат
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper-200/10 pt-6 text-xs text-paper-200/45 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {site.brand}. Макет для коммерческой передачи.</span>
          <a href="#lead" className="text-gold hover:underline">
            Заявка на консультацию
          </a>
        </div>
      </div>
    </footer>
  );
}
