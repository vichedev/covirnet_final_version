"use client";

import Hero from "@/components/Hero/Hero";
import ChooseUsComponent from "@/components/About/ChooseUs";
import AboutComponent from "@/components/About/AboutComponent";

export default function Home() {
  return (
    <>
      <Hero title="COVIRNET" />
      <AboutComponent />
      <ChooseUsComponent />
    </>
  );
}
