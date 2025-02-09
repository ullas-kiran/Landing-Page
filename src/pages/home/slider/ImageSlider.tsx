import NextArrow from "@/assets/svg/NextArrow"
import PrevArrow from "@/assets/svg/PrevArrow"

import Profile1 from "@/assets/images/Profile1.webp"
import Profile2 from "@/assets/images//Profile2.webp"
import Profile3 from "@/assets/images/Profile3.webp"
import { useEffect, useState } from "react";

const profileData = [
  {
    src: Profile1,
    quote: "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
  },
  {
    src: Profile2,
    quote: "An amazing product that truly simplifies device management for enterprises.",
    name: "John Doe",
    company: "TechCorp Inc.",
  },
  {
    src: Profile3,
    quote: "An amazing product that truly simplifies device management for enterprises.",
    name: "John Doe",
    company: "TechCorp Inc.",
  },
];


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profileData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + profileData.length) % profileData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profileData.length);
  };

  return (
    <div className="pb-[30px] pt-[60px] lg:pt-[120px] md:pb-[60px] bg-[#F7F7F7]">
         <div className="w-[88%] mx-auto max-w-[1300px]">
           <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
           Why should you choose Hexnode?
           </h2>
           <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0">
               <ul className="cusreviewslider_slider-wrapper__VBzwn">
                  <div className="slick-slider slick-initialized" dir="ltr">
                       <button onClick={prevSlide} className=" flex items-center justify-center bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] lg:bottom-[50%] cursor-not-allowed group translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px]">
                         <PrevArrow/>
                       </button>
                       <div className="slick-list" style={{height:"320px"}}>
                        <div className="slick-track" >
                           <div  data-index="0" className="slick-slide slick-active slick-current" aria-hidden="false">
                            <div>
                              <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group ">
                               <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden ">
                                    <img src={profileData[currentIndex].src} className="object-cover align-middle" alt="profile" />
                               </div>
                               <div className="max-w-[640px] bg-[#ffffff] flex justify-center flex-col grow md:min-h-[310px]">
                                <div className="md:max-h-[125px] md:overflow-scroll px-[20px] md:pl-[60px] md:pr-[55px] pt-[20px] pb-[25px] md:py-0 md:mt-[40px] md:mb-[20px] no-scrollbar">
                                <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold text-center md:text-left antialiased ">"{profileData[currentIndex].quote}"</h4>
                                </div>
                                <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:py-0 flex flex-col justify-center items-center md:min-h-[120px]">
                                  <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]"></span>
                                  <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold ">{profileData[currentIndex].name}</p>
                                  <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 "></small>
                                  <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">  {profileData[currentIndex].company}</small>
                                  </div>
                                </div> 
                              </div>
                            </div>
                           </div>
                        </div>
                       </div>
                       <button onClick={nextSlide} className=" flex items-center justify-center cursor-pointer bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] lg:bottom-[50%] group translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px]">
                        <NextArrow/>
                       </button>
                  </div>
               </ul>
           </div>
         </div>
    </div>
  )
}

export default ImageSlider