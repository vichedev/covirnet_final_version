import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PricingComponent from "@/components/Pricing/PricingComponent";

export const metadata: Metadata = { title: "Planes y precios" };

export default function Pricing() {
  return (
    <>
      <PageHeader
        title="Planes"
        subtitle="Elige la velocidad que necesitas. Planes para cada hogar, con precios accesibles."
      />
      <PricingComponent />
    </>
  );
}
