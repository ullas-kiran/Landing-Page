import Achievements from "@/pages/home/achievements/Achievements";
import HeroSection from "@/pages/home/banner/HeroSection";
import KioskModes from "./tabs/KioskModes";

import Slider1 from "@/assets/images/tabSlider1.webp"
import Slider2 from "@/assets/images/tabSlider2.webp"
import Slider3 from "@/assets/images/tabSlider3.webp"
import Slider4 from "@/assets/images/tabSlider4.webp"
import Slider5 from "@/assets/images/tabSlider5.webp"
import RightArrow from "@/assets/svg/RightArrow";
import Tick from "@/assets/svg/Tick";



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
                     <div className="slick-slider tabSlider slick-vertical slick-initialized">
                       <div className="slick-list" style={{height: "552px"}}>
                         <div className="slick-track" style={{opacity:1,transform:"translate3d(0px, 0px, 0px)",height:"3864"}}>
                          <div className="slick-slide slick-active slick-current" data-index="0" aria-hidden="false" style={{outline:"none",width:"545px"}}>
                            <div>
                              <div className="group/tabImg relative max-w-full block transition-all duration-300 ease-out inline-block opacity-100" style={{width:"100%",display:"inline-block"}}>
                              <div className="md:max-w-[calc(100%_-_25px)] rounded-[10px] overflow-hidden transition-all duration-300 ease-out">
                                <img src={Slider1} alt="img" width={600} height={565} decoding="async" />
                              </div>
                              </div>
                            </div>
                          </div>
                          <div className="slick-slide" data-index="1" aria-hidden="true" style={{outline:"none",width:"545px"}}>
                             <div>
                                <div className="group/tabImg relative max-w-full block transition-all duration-300 ease-out !opacity-0">
                                  <div className="md:max-w-[calc(100%_-_25px)] rounded-[10px] overflow-hidden transition-all duration-300 ease-out">
                                    <img src={Slider2} alt="slider2" width={600} height={565} />
                                  </div>
                                  <div className="absolute right-0 -translate-y-1/2 flex flex-col items-start justify-center py-[15px] pl-[25px] overflow-hidden" style={{top:"80%"}}>
                                  <p className="relative text-left shrink-0 mb-[10px] last:mb-[0px] translate-y-0 group-hover/tabImg:-translate-y-[5px] border border-solid backdrop-blur-xl bg-white/90 border-[#F2F2F2] rounded-[8px] py-[15px] pr-[30px] 
                                 pl-[35px] sm:pl-[50px] transition-all duration-300 ease-out">
                                  <span className="absolute max-sm:w-[15px] max-sm:h-[15px] left-[8px] top-[17px] sm:left-[15px] kioskModeAccordion_acc-overlay-icon__US_oZ">
                                    <Tick/>
                                  </span>
                                  <span className="text-[14px] leading-[22px] sm:text-[18px] sm:leading-[26px] text-[#020A19] font-semibold kioskModeAccordion_acc-overlay-text__vfCae">
                                  Brand visibility
                                  </span>
                                 </p>
                                  </div>
                                </div>
                             </div>
                          </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="md:w-1/2 lg:w-[60%] max-w-[725px] relative">
                      <div className="relative border-b border-[#F7F7F7] border-solid last:border-b-0 py-[20px] lg:py-[25px] first:pt-0 last:pb-0">
                        <h3 className="text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left">Effortless kiosk deployment & management</h3>
                        <div className="block relative h-0 overflow-hidden transition-all duration-300 ease-out" style={{height:"138px"}}>
                              <div>
                                <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[20px]">Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs. </p>
                                <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/" rel="noreferrer" className="group/tabLink inline-flex items-center justify-start mt-[10px]">
                                <span className="uppercase text-[18px] leading-[23px] text-[#DD0735] font-semibold">Try for free</span>
                                <div className="relative z-1">
                                 <RightArrow/>
                                </div>
                                </a>
                              </div>
                        </div>
                      </div>
                      <div className="relative border-b border-[#F7F7F7] border-solid last:border-b-0 py-[20px] lg:py-[25px] first:pt-0 last:pb-0">
                        <h3 className="text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left">Customized interface for brand visibility</h3>
                        <div className="block relative h-0 overflow-hidden transition-all duration-300 ease-out" style={{height:"0"}}>
                          <div>
                            <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[20px]">Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.</p>
                            <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/" target="_blank" rel="noreferrer" className="group/tabLink inline-flex items-center justify-start mt-[10px]">
                            <span className="uppercase text-[18px] leading-[23px] text-[#DD0735] font-semibold">Try for free</span>
                            <div className="relative z-1">
                              <RightArrow/>
                            </div>
                            </a>
                          </div>
                        </div>
                      </div>
                   </div>
               </div>
            </div>
      </div>
    </>
  );
};

export default Home;
