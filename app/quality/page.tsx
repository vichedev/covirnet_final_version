import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import QualityComponent from "@/components/Quality/QualityCOmponent";

export const metadata: Metadata = { title: "Calidad del servicio" };

export default function Quality() {
  return (
    <>
      <PageHeader
        title="Calidad"
        subtitle="Transparencia en los indicadores de calidad de nuestro servicio."
      />
      <QualityComponent />
    </>
  );
}
