"use client";

import { useMemo, useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { pdfRoutes } from "@/constants/pdf";
import Reveal from "../ui/Reveal";

export default function DocumentComponent() {
  const [query, setQuery] = useState("");

  const documents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? pdfRoutes.filter((d) => d.title.toLowerCase().includes(q)) : pdfRoutes;
  }, [query]);

  return (
    <section className="section">
      <div className="wrap">
        <div className="relative mx-auto max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar documento..."
            aria-label="Buscar documento"
            className="h-14 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-base shadow-sm outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-amber/20"
          />
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          {documents.length} {documents.length === 1 ? "documento" : "documentos"}
        </p>

        {documents.length === 0 ? (
          <p className="mt-16 text-center text-slate-500">No se encontraron documentos para “{query}”.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.07} y={16}>
                <article className="card group flex h-full flex-col gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/60 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <FileText className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-sans text-base font-semibold leading-snug text-navy-900">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">PDF</p>
                    </div>
                  </div>
                  <a
                    href={encodeURI(item.path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="btn-dark mt-auto !py-2.5"
                  >
                    <Download className="h-4 w-4" /> Descargar
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
