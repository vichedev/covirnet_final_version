import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/constants/contact";
import Reveal from "../ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-amber via-brand-orange to-brand-red px-6 py-14 text-center shadow-2xl shadow-brand-orange/30 sm:px-12">
            <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                ¿Listo para una mejor conexión?
              </h2>
              <p className="mt-3 text-lg text-white/90">
                Revisa nuestros planes o escríbenos y te ayudamos a elegir el ideal para tu hogar.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/pricing" className="btn bg-white text-navy-900 shadow-lg hover:-translate-y-0.5">
                  Revisar planes <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink("Hola, quiero conocer más sobre sus planes")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-navy-900 text-white shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
