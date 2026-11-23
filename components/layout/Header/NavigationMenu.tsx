"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Wifi, X } from "lucide-react";
import { navigationLinks } from "@/constants/navigation";
import { whatsappLink } from "@/constants/contact";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Covirnet - Inicio">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-amber to-brand-red text-white shadow-md shadow-brand-orange/40">
        <Wifi className="h-5 w-5" />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        COVIR<span className="text-brand-orange">NET</span>
      </span>
    </Link>
  );
}

export default function NavigationMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/85 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-white"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navigationLinks.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-navy-900" : "text-slate-500 hover:text-navy-900"
                }`}
              >
                {item.title}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-amber to-brand-red"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Hola, quiero contratar un plan de Covirnet")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex"
          >
            Contratar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-navy-900 hover:bg-slate-100 lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="wrap flex flex-col gap-1 py-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    pathname === item.path
                      ? "bg-brand-amber/15 text-navy-900"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <a
                href={whatsappLink("Hola, quiero contratar un plan de Covirnet")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
              >
                Contratar por WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
