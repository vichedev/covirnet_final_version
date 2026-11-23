import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-brand-amber/20 blur-3xl" aria-hidden />
      <div className="wrap relative py-14 sm:py-20">
        <nav aria-label="breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-white/60">
          <Link href="/" className="hover:text-white">Inicio</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white/90">{title}</span>
        </nav>
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          {title}
          <span className="text-gradient">.</span>
        </h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
