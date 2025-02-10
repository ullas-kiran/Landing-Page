import Achievements from "@/pages/home/achievements/Achievements";
import HeroSection from "@/pages/home/banner/HeroSection";
import KioskModes from "./tabs/KioskModes";
import VerticalSlider from "./slider/VericalSlider";
import ImageSlider from "./slider/ImageSlider";
import BrandSlider from "./slider/BrandSlider";
import PlatformList from "./platform/PlatformList";



const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <KioskModes/> 
      <VerticalSlider/>
      <ImageSlider/>
      <BrandSlider/>
      <PlatformList/>
    </>
  );
};

export default Home;
