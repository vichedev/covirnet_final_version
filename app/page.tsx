import Hero from "@/components/Hero/Hero";
import AboutComponent from "@/components/About/AboutComponent";
import ChooseUsComponent from "@/components/About/ChooseUs";
import CtaBanner from "@/components/Home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutComponent />
      <ChooseUsComponent />
      <CtaBanner />
    </>
  );
}
