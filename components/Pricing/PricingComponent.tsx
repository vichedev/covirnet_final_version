"use client";

import { motion } from "framer-motion";
import { Check, Flame, MessageCircle } from "lucide-react";
import { pricing } from "@/constants/pricing";
import { whatsappLink } from "@/constants/contact";

export default function PricingComponent() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="flex flex-wrap justify-center gap-6">
          {pricing.map((plan, i) => {
            const popular = plan.legend === "Popular";
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative flex w-full flex-col overflow-hidden rounded-3xl p-8 md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] ${
                  popular
                    ? "bg-navy-900 text-white shadow-2xl shadow-navy-900/30 ring-2 ring-brand-amber"
                    : "border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-navy-900/10"
                }`}
              >
                {popular && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-amber to-brand-red px-3 py-1 text-xs font-bold uppercase text-white">
                    <Flame className="h-3.5 w-3.5" /> Popular
                  </span>
                )}

                <h3 className={`text-lg font-bold ${popular ? "text-white" : ""}`}>{plan.title}</h3>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className={`font-display text-6xl font-extrabold ${popular ? "text-white" : "text-navy-900"}`}>
                    {plan.megas}
                  </span>
                  <span className="text-lg font-semibold text-brand-orange">Mbps</span>
                </div>

                <p className={`mt-1 text-sm ${popular ? "text-white/70" : "text-slate-500"}`}>
                  <span className={`text-2xl font-bold ${popular ? "text-brand-amber" : "text-navy-900"}`}>
                    ${plan.price}
                  </span>{" "}
                  / mensual
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-amber/20 text-brand-orange">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className={popular ? "text-white/80" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Quiero conocer más sobre el plan: ${plan.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 ${popular ? "btn-primary" : "btn-dark"}`}
                >
                  <MessageCircle className="h-4 w-4" /> Contratar plan
                </a>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Los precios se muestran en dólares americanos. Consulta condiciones y cobertura por WhatsApp.
        </p>
      </div>
    </section>
  );
}
