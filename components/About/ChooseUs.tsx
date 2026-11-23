import Image from "next/image";
import Reveal from "../ui/Reveal";

const reasons = [
  {
    id: 1,
    img: "/images/motivo1.png",
    title: "Servicio confiable y rápido",
    description:
      "Entendemos que la velocidad y la confiabilidad son fundamentales cuando se trata de tu conexión a internet.",
  },
  {
    id: 2,
    img: "/images/motivo2.png",
    title: "Atención al cliente excepcional",
    description:
      "Nos preocupamos por la satisfacción de nuestros clientes y nos esforzamos por brindar una atención excepcional.",
  },
  {
    id: 3,
    img: "/images/motivo3.png",
    title: "Opciones flexibles",
    description:
      "Cada cliente es único y tiene necesidades diferentes. Por eso ofrecemos una variedad de servicios y planes.",
  },
];

export default function ChooseUsComponent() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" aria-hidden />
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ventajas</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-colors hover:border-brand-amber/50 hover:bg-white/10">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-amber/40">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-brand-amber">
                  Motivo #{item.id}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
