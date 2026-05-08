import Hero from "@/components/Hero";
import ConceptSection from "@/components/ConceptSection";
import FeaturedShots from "@/components/FeaturedShots";
import HappyHourBanner from "@/components/HappyHourBanner";
import FloquetSection from "@/components/FloquetSection";
import PressSection from "@/components/PressSection";
import FindUsSection from "@/components/FindUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <FeaturedShots />
      <HappyHourBanner />
      <FloquetSection />
      <PressSection />
      <FindUsSection />
      <Footer />
    </>
  );
}
