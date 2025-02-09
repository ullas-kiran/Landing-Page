import { useState } from "react";
import Slider1 from "@/assets/images/tabSlider1.webp";
import Slider2 from "@/assets/images/tabSlider2.webp";
import Slider3 from "@/assets/images/tabSlider3.webp";
import Slider4 from "@/assets/images/tabSlider4.webp";
import Slider5 from "@/assets/images/tabSlider5.webp";
import RightArrow from "@/assets/svg/RightArrow";
import GreenTick from "@/assets/svg/GreenTick";

const sliderData = [
  {
    image: Slider1,
    title: "Effortless kiosk deployment & management",
    description:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App...",
  },
  {
    image: Slider2,
    title: "Customized interface for brand visibility",
    description:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression...",
  },
  {
    image: Slider3,
    title: "Enhanced security and compliance",
    description:
      "Ensure devices meet security and compliance standards with remote management and real-time monitoring.",
  },
  {
    image: Slider4,
    title: "Seamless remote troubleshooting",
    description:
      "Troubleshoot device issues remotely without disrupting user experience, reducing downtime and improving efficiency.",
  },
  {
    image: Slider5,
    title: "Optimized device performance",
    description:
      "Improve device longevity and performance with automatic updates, resource monitoring, and performance analytics.",
  },
];

const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <div className="pb-[60px] lg:pb-[120px]">
    <div className="w-[88%] max-w-[1300px] mx-auto">
       <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-w-[340px] sm:max-w-[800px] mx-auto">
       What additional possibilities does the Kiosk mode offer?
       </h2>
       <div className="flex flex-col md:flex-row items-center justify-between md:mt-[40px] transition-all duration-300 ease-out">
           <div className="md:w-1/2 md:max-w-[545px] max-h-[545px] relative mr-[20px] transition-all duration-300 ease-out">
             <div className="slick-slider tabSlider slick-vertical slick-initialized">
               <div className="slick-list">
                 <div className="slick-track">
                  <div className="slick-slide slick-active slick-current" data-index="0" aria-hidden="false">
                    <div>
                      <div className="group/tabImg relative max-w-full block transition-all duration-300 ease-out opacity-100">
                      <div className="md:max-w-[calc(100%_-_25px)] rounded-[10px] overflow-hidden transition-all duration-300 ease-out">
                        <img src={sliderData[activeIndex].image} alt="img"  className="w-full h-auto object-cover transition-all duration-300" decoding="async" />
                      </div>
                      </div>
                    </div>
                  </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="md:w-1/2 lg:w-[60%] max-w-[725px] relative">
              
              {sliderData.map((item,index)=>{
                return (
                    <div key={index} className="relative border-b border-[#F7F7F7] border-solid last:border-b-0 py-[20px] lg:py-[25px] first:pt-0 last:pb-0">
                    <h3  onClick={() => setActiveIndex(index)} className="text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left">{item.title}</h3>
                    <div className={`block relative  overflow-hidden transition-all duration-300 ease-out ${activeIndex === index ? "h-auto opacity-100 py-2" : "h-0 opacity-0"}`}>
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
                )
              })}
           </div>
       </div>
    </div>
</div>
    </>
);
};

export default VerticalSlider;
