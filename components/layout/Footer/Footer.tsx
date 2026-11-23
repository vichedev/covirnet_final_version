import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigationLinks } from "@/constants/navigation";
import { linksInteres } from "@/constants/links_interes";
import { contactInfo } from "@/constants/contact";
import { Logo } from "../Header/NavigationMenu";

const linkClass = "text-sm text-white/65 transition-colors hover:text-brand-amber";

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden />
      <div className="wrap relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            <strong className="font-semibold text-white">¡La velocidad que necesitas!</strong>{" "}
            No lo pienses más, Covirnet es tu mejor opción.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Links rápidos</h3>
          <ul className="space-y-2.5">
            {navigationLinks.map((item) => (
              <li key={item.id}>
                <Link href={item.path} className={linkClass}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Links de interés</h3>
          <ul className="space-y-2.5">
            {linksInteres.map((item) => (
              <li key={item.id}>
                <a href={item.path} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
          <ul className="space-y-3">
            <li>
              <a href={contactInfo.phoneHref} className={`${linkClass} flex items-center gap-2`}>
                <Phone className="h-4 w-4 text-brand-amber" /> Ventas y soporte
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.salesEmail}`} className={`${linkClass} flex items-center gap-2`}>
                <Mail className="h-4 w-4 text-brand-amber" /> Correo ventas
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.supportEmail}`} className={`${linkClass} flex items-center gap-2`}>
                <Mail className="h-4 w-4 text-brand-amber" /> Correo soporte
              </a>
            </li>
            <li>
              <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center gap-2`}>
                <MapPin className="h-4 w-4 text-brand-amber" /> Dirección
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <p className="wrap text-center text-xs text-white/45">
          © {new Date().getFullYear()} Covirnet · Desarrollado por Inigualitysoft
        </p>
      </div>
    </footer>
  );
}
