"use client";

import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { formSchema } from "@/constants/validation";
import { contactInfo } from "@/constants/contact";
import Reveal from "../ui/Reveal";

interface ValuesProps {
  correo: string;
  mensaje: string;
}

const toastOptions = {
  position: "top-right" as const,
  autoClose: 5000,
  theme: "dark" as const,
  transition: Bounce,
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-4 focus:ring-brand-amber/20";

const infoItems = [
  { icon: Phone, label: "Ventas y soporte", value: contactInfo.phone, href: contactInfo.phoneHref },
  { icon: Mail, label: "Correo ventas", value: contactInfo.salesEmail, href: `mailto:${contactInfo.salesEmail}` },
  { icon: Mail, label: "Correo soporte", value: contactInfo.supportEmail, href: `mailto:${contactInfo.supportEmail}` },
  { icon: MapPin, label: "Dirección", value: "Ver en Google Maps", href: contactInfo.mapsUrl },
];

export default function ContactComponent() {
  async function handleSubmit(values: ValuesProps, resetForm: () => void) {
    try {
      await axios.post("/api/email", { values });
      toast.success("¡Mensaje enviado! Te responderemos pronto.", toastOptions);
      resetForm();
    } catch {
      toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.", toastOptions);
    }
  }

  return (
    <>
      <section className="section">
        <div className="wrap grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy-900 p-8 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/30 blur-3xl" aria-hidden />
              <h2 className="relative font-display text-2xl font-bold text-white">Hablemos</h2>
              <p className="relative mt-2 text-white/65">
                Estamos listos para ayudarte con tus consultas, contratación o soporte técnico.
              </p>
              <ul className="relative mt-8 space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-amber transition-colors group-hover:bg-brand-amber group-hover:text-navy-900">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-white/50">{item.label}</span>
                        <span className="block truncate font-medium">{item.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="card p-6 sm:p-8">
              <h2 className="text-2xl font-bold">¡Escríbenos si tienes alguna duda!</h2>
              <Formik
                initialValues={{ correo: "", mensaje: "" }}
                validationSchema={formSchema}
                onSubmit={async (values, { resetForm }) => {
                  await handleSubmit(
                    { correo: values.correo.trim(), mensaje: values.mensaje.trim() },
                    resetForm
                  );
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="mt-6 flex flex-col gap-5" noValidate>
                    <div>
                      <label htmlFor="correo" className="mb-1.5 block text-sm font-medium text-navy-900">
                        Tu correo
                      </label>
                      <Field
                        id="correo"
                        name="correo"
                        type="email"
                        autoComplete="email"
                        placeholder="mi_correo@gmail.com"
                        className={`${inputClass} ${errors.correo && touched.correo ? "!border-red-400" : ""}`}
                      />
                      <ErrorMessage name="correo" component="p" className="mt-1.5 text-sm text-red-500" />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-navy-900">
                        Mensaje
                      </label>
                      <Field
                        as="textarea"
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        placeholder="Escribe tu mensaje aquí."
                        className={`${inputClass} resize-y ${errors.mensaje && touched.mensaje ? "!border-red-400" : ""}`}
                      />
                      <ErrorMessage name="mensaje" component="p" className="mt-1.5 text-sm text-red-500" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto sm:self-start">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Enviar mensaje
                        </>
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="wrap">
          <Reveal>
            <h2 className="mb-6 text-center font-display text-3xl font-extrabold">¿Dónde encontrarnos?</h2>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                title="Ubicación de Covirnet"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d755.2812717488915!2d-80.42697401406828!3d-1.5533277730576114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzMnMTEuNCJTIDgwwrAyNSczNi4xIlc!5e0!3m2!1ses-419!2sec!4v1716329874891!5m2!1ses-419!2sec"
                className="block h-[360px] w-full border-0 sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
