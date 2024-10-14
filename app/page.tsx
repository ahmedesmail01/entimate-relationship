import CrisesSec from "./components/CrisesSec";
import DrAhmed from "./components/DrAhmed";
import ForWhoSec from "./components/ForWhoSec";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import ProgramContent from "./components/ProgramContent";
import WhySec from "./components/WhySec";
import TechSec from "./components/TechSec";
import SubscribeSec from "./components/SubscribeSec";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#ffffff] ">
      <Header />
      <HeroSec />
      <ProgramContent />
      <WhySec />
      <CrisesSec />
      <DrAhmed />
      <ForWhoSec />
      <TechSec />
      <SubscribeSec />
      <Footer />
    </main>
  );
}
