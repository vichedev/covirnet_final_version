import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DocumentComponent from "@/components/Documents/DocumentsComponent";

export const metadata: Metadata = { title: "Documentos" };

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="Documentos"
        subtitle="Normativa, reglamentos y guías útiles para conocer tus derechos como abonado."
      />
      <DocumentComponent />
    </>
  );
}
