"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Gauge,
  Headphones,
  HeartHandshake,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import { whatsappLink } from "@/constants/contact";

const WORDS = ["hogar", "familia", "estudio", "trabajo"];

const MARQUEE_ITEMS = [
  { icon: Zap, text: "Alta velocidad" },
  { icon: Headphones, text: "Soporte técnico" },
  { icon: BadgeDollarSign, text: "Planes desde $10" },
  { icon: HeartHandshake, text: "Atención cercana" },
  { icon: Wifi, text: "Conexión estable" },
  { icon: Sparkles, text: "Planes para cada hogar" },
];

/* Nodos de la "red" decorativa de fondo (coordenadas en viewBox 1440x720) */
const NODES: [number, number][] = [
  [90, 120], [260, 300], [180, 520], [420, 160], [520, 430], [700, 90],
  [820, 330], [980, 150], [1100, 420], [1260, 200], [1350, 520], [640, 600],
];
const LINKS: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 5], [1, 4], [4, 6], [5, 6], [6, 7], [7, 9],
  [6, 8], [8, 10], [9, 10], [4, 11], [8, 11],
];

function SpeedCounter({ to }: { to: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 2.2,
      delay: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to]);
  return <>{value}</>;
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
      {WORDS.map((word, i) => {
        const prev = (index - 1 + WORDS.length) % WORDS.length;
        const state =
          i === index
            ? "translate-y-0 opacity-100"
            : i === prev
              ? "-translate-y-full opacity-0"
              : "translate-y-full opacity-0";
        return (
          <span
            key={word}
            aria-hidden={i !== index}
            className={`text-gradient col-start-1 row-start-1 transition-all duration-500 ease-out ${state}`}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

export default function Hero() {
  /* Tilt 3D según la posición del mouse */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 110, damping: 14 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 110, damping: 14 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* ---------- FONDO ---------- */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-orange/35 blur-[110px] animate-aurora" />
        <div className="absolute -bottom-52 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand-amber/25 blur-[110px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-navy-500/40 blur-[110px] animate-aurora [animation-delay:-11s]" />
        <div className="absolute inset-0 bg-grid" />

        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="link" x1="0" x2="1">
              <stop offset="0" stopColor="#FFA800" stopOpacity="0.5" />
              <stop offset="1" stopColor="#FF4B14" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a][0]}
              y1={NODES[a][1]}
              x2={NODES[b][0]}
              y2={NODES[b][1]}
              stroke="url(#link)"
              strokeWidth="1"
            />
          ))}
          {NODES.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="3" fill="#FFC20A" />
              <circle
                cx={x}
                cy={y}
                r="9"
                fill="none"
                stroke="#FFA800"
                strokeOpacity="0.5"
                className="animate-pulse"
                style={{ animationDelay: `${(i % 6) * 0.45}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ---------- CONTENIDO ---------- */}
      <div className="wrap relative grid items-center gap-14 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_1fr] lg:pb-32 lg:pt-24">
        {/* Texto */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 text-xs font-medium text-white/85 backdrop-blur"
          >
            <span className="relative grid h-5 w-5 place-items-center">
              <span className="absolute h-5 w-5 rounded-full bg-brand-amber/50 animate-pulse-ring" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
            </span>
            Internet de alta velocidad para tu hogar
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[2.6rem] xl:text-[3.1rem]"
          >
            <span className="block">Conéctate sin límites</span>
            <span className="block">
              en tu <RotatingWord />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Con Covirnet disfruta de un servicio estable, rápido y con atención cercana.
            Elige el plan que se adapta a ti y mantente conectado con lo que más importa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href={whatsappLink("Hola, quiero conocer más sobre sus precios")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group relative !px-8 !py-4 text-base overflow-hidden"
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30 blur-sm animate-shine"
                aria-hidden
              />
              <span className="relative">Contratar ahora</span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/pricing" className="btn-ghost !px-8 !py-4 text-base">
              Ver planes
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-4 backdrop-blur"
          >
            {[
              ["5", "Planes"],
              ["$10", "Desde / mes"],
              ["30", "Mbps máx."],
            ].map(([value, label]) => (
              <div key={label} className="px-4 text-center first:text-left sm:px-6">
                <dd className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</dd>
                <dt className="text-[11px] uppercase tracking-wider text-white/50">{label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          className="relative mx-auto flex w-full max-w-xl items-center justify-center py-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* Radar */}
          <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden>
            {[0, 1.5, 3].map((d) => (
              <span
                key={d}
                className="absolute aspect-square w-[92%] rounded-full border border-brand-amber/60 animate-radar"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
            <span className="absolute aspect-square w-[108%] rounded-full border border-dashed border-white/15 animate-spin-slow" />
            <span className="absolute aspect-square w-[78%] rounded-full bg-gradient-to-br from-brand-amber/30 via-brand-orange/20 to-transparent blur-2xl" />
          </div>

          {/* Tarjeta principal con tilt */}
          <div className="relative w-full animate-float">
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: "preserve-3d" }}
              className="relative rounded-[2rem] p-[2px] shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-yellow via-brand-orange to-brand-red" />
              <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-white p-7 sm:p-10">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-amber/25 blur-2xl" aria-hidden />
                <Image
                  src="/images/Hero/logo.png"
                  alt="Covirnet"
                  width={1200}
                  height={578}
                  priority
                  unoptimized
                  className="relative h-auto w-full"
                />
                <div className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Servicio activo
                  </span>
                  <span>La velocidad que necesitas</span>
                </div>
              </div>

              {/* Tarjeta velocidad */}
              <div
                className="absolute -bottom-7 left-2 w-48 rounded-2xl border border-white/20 bg-navy-900/90 p-4 text-white shadow-2xl backdrop-blur-xl sm:-left-10"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Gauge className="h-4 w-4 text-brand-amber" /> Velocidad
                </div>
                <div className="mt-1 flex items-end justify-between">
                  <p className="font-display text-3xl font-extrabold leading-none">
                    <SpeedCounter to={30} />
                    <span className="ml-1 text-sm font-semibold text-brand-amber">Mbps</span>
                  </p>
                  <div className="flex h-8 items-end gap-1" aria-hidden>
                    {[0, 0.2, 0.4, 0.1, 0.3].map((d, i) => (
                      <span
                        key={i}
                        className="h-full w-1.5 origin-bottom rounded-full bg-gradient-to-t from-brand-red to-brand-yellow animate-bars"
                        style={{ animationDelay: `${d}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Chip precio */}
              <div
                className="absolute right-2 top-8 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-navy-900 shadow-xl backdrop-blur sm:-right-8"
                style={{ transform: "translateZ(50px)" }}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-amber to-brand-red text-white">
                  <BadgeDollarSign className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">Desde</span>
                  <span className="block font-display text-lg font-extrabold">$10/mes</span>
                </span>
              </div>

              {/* Chip soporte */}
              <div
                className="absolute -bottom-5 right-2 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur-xl sm:-right-4"
                style={{ transform: "translateZ(40px)" }}
              >
                <Headphones className="h-5 w-5 text-brand-amber" />
                <span className="text-sm font-semibold">Soporte técnico</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ---------- CINTA DE BENEFICIOS ---------- */}
      <div className="relative border-y border-white/10 bg-white/[0.04] py-4 backdrop-blur">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-12 pr-12">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              ({ icon: Icon, text }, i) => (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/70"
                >
                  <Icon className="h-4 w-4 text-brand-amber" />
                  {text}
                  <span className="ml-9 h-1 w-1 rounded-full bg-brand-orange" />
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
