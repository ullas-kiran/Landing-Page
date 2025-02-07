import Tick from "@/assets/svg/Tick";
import Achievements from "@/pages/home/achievements/Achievements";
import HeroSection from "@/pages/home/banner/HeroSection";
import slider1 from "@/assets/images/slider1.webp"

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <div className="py-[60px] flex justify-center items-center text-center flex-col lg:py-[120px]">
        <div className="mx-auto max-w-[1300px] w-[88%]">
          <h2 className="text-center mx-auto text-[#020a19] text-[28px] leading-[1.25] antialiased font-[700] sm:text-[36px] max-w-[900px]">
            Specific kiosk modes for unique use cases
          </h2>
          <div className="pt-[40px] sm:pt-[60px] ">
            <div className="relative hidden sm:block ">
              <div className="flex bg-white justify-center relative">
                {/* child-head */}
                <div className="w-full relative border border-solid border-[#f7f7f7] rounded-t-[4px] overflow-hidden overflow-x-auto scroll-smooth">
                  <div className="w-full scroll-smooth overflow-x-scroll relative inline-block no-scrollbar">
                    <div
                      className="h-[80px] transition-all duration-[600ms] z-2 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] bg-[#020a19] rounded-[4px] opacity-1 absolute bottom-0"
                      style={{ width: "260px", left: "0px" }}
                    ></div>
                    <ul className="flex duration-300 ease-in justify-between items-center scroll-smooth whitespace-nowrap cursor-pointer">
                      {[
                        "Single App Kiosk",
                        "Multi-App Kiosk",
                        "Web-based Kiosk",
                        "Digital Signages",
                        "ASAM Kiosk",
                      ].map((tab, index) => (
                        <li
                          key={index}
                          className="flex-1 min-h-[80px] w-full px-[30px] relative text-center whitespace-normal transition-all duration-[400ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] before:content-[''] before:absolute before:left-0 before:w-[2px] before:h-full before:z-1 before:bg-[#f7f7f7]"
                        >
                          <p
                            className={`p-[26px_0] max-w-[240px] h-[80px] w-full flex justify-center items-center text-[22px] whitespace-nowrap font-[600] leading-[24px] relative z-3 duration-[400ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
                              index === 0 ? "text-[#fff]" : "text-[#020a19]/50"
                            }`}
                          >
                            <span>{tab}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* child-head */}
              </div>
              <div className="p-[40px] bg-[#f7f7f7] overflow-hidden ">
                     <div className=" featuresTabSlider_animate-right__27mcW lg:flex-row justify-between flex flex-col-reverse ">
                            <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px]">
                                    <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased max-w-[670px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">Explore the new way to manage web apps and websites</h3>
                                    <ul className="block">
                                      <li className="relative mb-[10px] lg:mb-[25px] last:mb-0">
                                        <span className="absolute left-0 top-[8px] featuresTabSlider_single-list-center-icon__4k2Fq">
                                        <Tick/>
                                        </span>
                                        <p className="text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]">
                                        Provision the devices to run one specialized application, with limited functionalities.
                                        </p>
                                      </li>
                                    </ul>
                            </div>

                            <div className="group    w-full max-sm:h-[210px] max-w-[308px] flex-1 max-sm:mt-[15px] mb-[20px] lg:mb-0 sm:max-w-[460px]">
                              <div className="rounded-[10px] overflow-hidde">
                                <figure>
                                  <img src={slider1} alt="slider1" />
                                </figure>
                                </div>   
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
