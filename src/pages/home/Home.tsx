import Achievements from "@/pages/home/achievements/Achievements";
import HeroSection from "@/pages/home/banner/HeroSection";
import KioskModes from "@/pages/home/tabs/KioskModes";
import VerticalSlider from "@/pages/home/slider/VericalSlider";
import ImageSlider from "@/pages/home/slider/ImageSlider";
import BrandSlider from "@/pages/home/slider/BrandSlider";
import PlatformList from "@/pages/home/platform/PlatformList";
import EmailSignup from "@/pages/home/signUp/EmailSignup";



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
      <EmailSignup/>
    </>
  );
};

export default Home;
