import WhyIsItImportant from "@/components/WhyIsItImportant";
import { Hero } from "../components/Hero";
import HowToAccess from "@/components/HowToAccess";
import AccessBottomSection from "@/components/AccessBottom";
import MainCharacterSection from "@/components/MainCharacter";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyIsItImportant />
      <HowToAccess />
      <AccessBottomSection />
      <MainCharacterSection />
    </>
  );
}
