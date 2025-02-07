import Achievements from "@/pages/home/achievements/Achievements";
import HeroSection from "@/pages/home/banner/HeroSection";
import KioskModes from "./tabs/KioskModes";


const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <KioskModes/> 
      <div className="pb-[60px] lg:pb-[120px]">
            <div className="w-[88%] max-w-[1300px] mx-auto">
               <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-w-[340px] sm:max-w-[800px] mx-auto">
               What additional possibilities does the Kiosk mode offer?
               </h2>
               <div className="flex items-center justify-between md:mt-[40px] transition-all duration-300 ease-out">
                   <div className="md:w-1/2 md:max-w-[545px] max-h-[545px] relative mr-[20px] transition-all duration-300 ease-out">

                   </div>
                   <div className="md:w-1/2 lg:w-[60%] max-w-[725px] relative">

                   </div>
               </div>
            </div>
      </div>
    </>
  );
};

export default Home;
