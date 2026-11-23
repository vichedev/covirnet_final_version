import { qualityParams } from "@/constants/quality";
import Reveal from "../ui/Reveal";

export default function QualityComponent() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="border-b border-slate-100 bg-navy-900 px-6 py-6 sm:px-8">
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                Parámetros de calidad
              </h2>
              <p className="mt-1 text-sm text-white/60">Resolución 216-09-CONATEL-2009</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 sm:px-8">Descripción</th>
                    <th scope="col" className="px-6 py-4 text-right sm:px-8">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {qualityParams.length > 0 ? (
                    qualityParams.map((item) => (
                      <tr key={item.id} className="transition-colors hover:bg-brand-amber/5">
                        <th scope="row" className="px-6 py-4 font-medium text-navy-900 sm:px-8">
                          {item.description}
                        </th>
                        <td className="px-6 py-4 text-right sm:px-8">
                          <span className="inline-block min-w-[3.5rem] rounded-full bg-brand-amber/15 px-3 py-1 text-center font-semibold text-brand-orange">
                            {item.percent.trim()}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="px-6 py-8 text-center text-slate-500">
                        No hay datos disponibles.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
