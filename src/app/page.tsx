import WhyIsItImportant from "@/components/WhyIsItImportant";
import { Hero } from "../components/Hero";
import HowToAccess from "@/components/HowToAccess";
import AccessBottomSection from "@/components/AccessBottom";
import MainCharacterSection from "@/components/MainCharacter";
import FinalOfferSection from "@/components/FinalOffer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhyIsItImportant />
      <HowToAccess />
      <AccessBottomSection />
      <MainCharacterSection />
      <FinalOfferSection />
      <Footer />
    </div>
  );
}
