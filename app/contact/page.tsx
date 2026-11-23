import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactComponent from "@/components/Contact/ContactComponent";

export const metadata: Metadata = { title: "Contacto" };

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="¿Tienes alguna duda? Escríbenos y te responderemos lo antes posible."
      />
      <ContactComponent />
    </>
  );
}
