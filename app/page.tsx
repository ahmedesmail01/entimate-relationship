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
// import PartComp from "./components/PartComp";

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
      {/* <div className="w-full h-[500px]">
        <PartComp />
      </div> */}
    </main>
  );
}
