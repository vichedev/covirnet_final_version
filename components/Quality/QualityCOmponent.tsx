"use client";

// SHADCN
import { Card, CardTitle, CardContent } from "../ui/card";

// CONFIGS
import { qualityParams } from "@/constants/quality";

export default function QualityComponent() {
  return (
    <Card className="w-full px-5 py-5">
      <CardTitle className="text-center text-2xl">
        PARÁMETROS DE CALIDAD (RESOLUCIÓN 216-09-CONATEL-2009)
      </CardTitle>
      <CardContent>
        <div className="overflow-x-auto bg-white dark:bg-neutral-700">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-4">
                  Porcentaje
                </th>
              </tr>
            </thead>

            <tbody>
              {qualityParams && qualityParams.length > 0 ? (
                qualityParams.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  >
                    <th scope="row" className="px-6 py-4">
                      {item.description}
                    </th>
                    <td className="px-6 py-4">{item.percent}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td scope="No" className="px-6 py-4 text-center">
                    No hay datos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
