import { useEffect, useRef } from "react";
import brand1 from "@/assets/svg/brand1.svg";
import brand2 from "@/assets/svg/brand2.svg";
import brand3 from "@/assets/svg/brand3.svg";
import brand4 from "@/assets/svg/brand4.webp";
import brand5 from "@/assets/svg/brand5.svg";
import brand6 from "@/assets/svg/brand6.svg";
import brand7 from "@/assets/svg/brand7.svg";
import brand8 from "@/assets/svg/brand8.svg";
import brand9 from "@/assets/svg/brand9.svg";
import brand10 from "@/assets/svg/brand10.svg";

const brands: string[] = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8,brand9,brand10];
const duplicatedBrands: string[] = [...brands, ...brands];

const BrandSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame: number;

    const animateSlider = () => {
      if (slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animateSlider);
    };

    animationFrame = requestAnimationFrame(animateSlider);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="pb-[60px] pt-[10px] lg:pb-[120px] md:pt-[20px] bg-[#F7F7F7]">
      <div className="w-[88%] mx-auto md:max-w-[1300px] relative">
        {/* Gradient Fades */}
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute left-0 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute right-0 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]a"></div>
        
        <div ref={sliderRef} className="flex space-x-10 overflow-hidden whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <figure key={index} className="block max-w-[130px] sm:max-w-[200px] w-full flex-shrink-0">
              <img src={brand} alt="brand" width={260} height={95} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
