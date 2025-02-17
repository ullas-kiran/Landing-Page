import slider1 from "@/assets/images/slider1.webp";
import slider2 from "@/assets/images/slider2.webp";
import slider3 from "@/assets/images/slider3.webp";
import slider4 from "@/assets/images/slider4.webp";
import slider5 from "@/assets/images/slider5.webp";
import Arrow from "@/assets/svg/Arrow";
import Tick from "@/assets/svg/Tick";
import { useState, useRef, useEffect } from "react";

interface Tab {
  title: string;
  image: string;
  heading: string;
  descriptions: string[];
}

const tabs: Tab[] = [
  {
    title: "Single App Kiosk",
    image: slider1,
    heading: "Powerful Single-App Kiosk solutions for enhanced control",
    descriptions: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices."
    ]
  },
  {
    title: "Multi-App Kiosk",
    image: slider2,
    heading: "Manage multiple applications with ease",
    descriptions: [
      "Allow multiple apps to run securely in a managed environment.",
      "Restrict access to unauthorized applications and settings.",
      "Switch between applications seamlessly while maintaining security.",
      "Enhance productivity with a well-organized multi-app environment."
    ]
  },
  {
    title: "Web-based Kiosk",
    image: slider3,
    heading: "Secure and controlled web access",
    descriptions: [
      "Enable users to access only approved websites.",
      "Prevent unauthorized downloads and browsing activities.",
      "Ensure compliance with organizational security policies.",
      "Improve performance by limiting resource-heavy content."
    ]
  },
  {
    title: "Digital Signages",
    image: slider4,
    heading: "Seamless digital content management",
    descriptions: [
      "Display dynamic content efficiently with remote management.",
      "Update signage content in real-time for better engagement.",
      "Ensure 24/7 uptime with stable kiosk solutions.",
      "Integrate with existing content management systems easily."
    ]
  },
  {
    title: "ASAM Kiosk",
    image: slider5,
    heading: "Advanced Security and Access Management",
    descriptions: [
      "Implement strict access control with role-based permissions.",
      "Monitor and track device activities remotely.",
      "Ensure data privacy and security at all times.",
      "Enhance protection with multi-layer authentication mechanisms."
    ]
  }
];

const KioskModes: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", left: "0px" });

  useEffect(() => {
    if (tabRefs.current[activeIndex]) {
      const { offsetWidth, offsetLeft } = tabRefs.current[activeIndex] as HTMLLIElement;
      setIndicatorStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
    }
  }, [activeIndex]);

  return (
    <div className="py-[60px] flex justify-center items-center text-center flex-col lg:py-[120px]">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="text-center mx-auto text-[#020a19] text-[28px] leading-[1.25] antialiased font-[700] sm:text-[36px] max-w-[900px]">
          Specific kiosk modes for unique use cases
        </h2>
        <div className="pt-[40px] sm:pt-[60px]">

    {/* mobile view */}
          <div className="flex justify-between w-full border-b rounded-[4px] flex-col m-0 sm:hidden overflow-hidden ">
             <div>
              <div className="border-[1px] border-b-0 border-solid rounded-[4px] bg-white border-black/10">
              <span className="w-full text-left text-[18px] sm:text-[20px] leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer flex items-center justify-between p-[16px]">
              <span>Single App Kiosk</span>
              <span className="transform rotate-[-180deg] duration-300 h-[20px] origin-center">
                <Arrow/>
              </span>
              </span>
              </div>
              <div className=" max-h-0 flex px-[15px] sm:p-0 justify-between bg-[#f7f7f7] flex-col-reverse w-full transition-all duration-500 ease-in-out overflow-y-hidden"></div>
             </div>
          </div>
      {/* mobile view */}
      {/* desktop */}
          <div className="relative hidden sm:block">
            <div className="flex bg-white justify-center relative">
              <div className="w-full relative border border-solid border-[#f7f7f7] rounded-t-[4px] overflow-hidden overflow-x-auto scroll-smooth">
                <div className="w-full scroll-smooth overflow-x-scroll relative inline-block no-scrollbar">
                  <div
                    className="h-[80px] transition-all duration-[600ms] z-2 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] bg-[#020a19] rounded-[4px] absolute bottom-0"
                    style={indicatorStyle}
                  ></div>
                  <ul className="flex duration-300 ease-in justify-between items-center scroll-smooth whitespace-nowrap cursor-pointer">
                    {tabs.map((tab, index) => (
                      <li
                        key={index}
                        ref={(el) => (tabRefs.current[index] = el)}
                        className=" flex-1 min-h-[80px] w-full px-[30px] relative text-center whitespace-normal transition-all duration-[400ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] before:content-[''] before:absolute before:left-0 before:w-[2px] before:h-full before:z-1 before:bg-[#f7f7f7]"
                        onClick={() => setActiveIndex(index)}
                      >
                        <p className={`p-[26px_0] max-w-[240px] h-[80px] w-full flex justify-center items-center !whitespace-nowrap text-[22px] font-[600] leading-[24px] relative z-3 duration-[400ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${index === activeIndex ? "text-[#fff]" : "text-[#020a19]/50"}`}>
                          <span>{tab.title}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-[40px] bg-[#f7f7f7] overflow-hidden">
              <div className="lg:flex-row justify-between flex flex-col-reverse">
                <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px]">
                  <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased max-w-[670px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">
                    {tabs[activeIndex].heading}
                  </h3>
                  <ul className="block">
                  {tabs[activeIndex].descriptions.map((desc, i) => (
                    <li className="relative mb-[10px] lg:mb-[25px] last:mb-0" key={i}>
                      <span className="absolute left-0 top-[8px]">
                        <Tick />
                      </span>
                      <p className="text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]">
                        {desc}
                      </p>
                    </li>
                      ))}
                  </ul>
                </div>
                <div className="group w-full max-sm:h-[210px] max-w-[308px] flex-1 max-sm:mt-[15px] mb-[20px] lg:mb-0 sm:max-w-[460px]">
                  <div className="rounded-[10px] overflow-hidden">
                    <figure>
                      <img src={tabs[activeIndex].image} alt={tabs[activeIndex].title} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* desktop */}
        </div>
      </div>
    </div>
  );
};

export default KioskModes;
