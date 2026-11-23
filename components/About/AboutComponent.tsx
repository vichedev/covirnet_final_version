import { HeartHandshake, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Calidad y confiabilidad",
    text: "Desde nuestro inicio nos hemos dedicado a ofrecer servicios de internet de alta calidad y confiabilidad.",
  },
  {
    icon: Rocket,
    title: "Nuestra misión",
    text: "Darte el acceso a internet que necesitas para mantenerte conectado con el mundo, en casa, en la oficina o en movimiento.",
  },
  {
    icon: HeartHandshake,
    title: "Tu satisfacción primero",
    text: "Un equipo de atención al cliente dedicado y accesible. Tu satisfacción y comodidad son nuestra prioridad número uno.",
  },
];

export default function AboutComponent() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Tu proveedor de internet de confianza
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Bienvenido a Covirnet. Estamos comprometidos a brindarte una experiencia de conexión
            excepcional, diseñada para satisfacer tus necesidades y superar tus expectativas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-amber to-brand-red text-white shadow-lg shadow-brand-orange/30 transition-transform group-hover:scale-110">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
