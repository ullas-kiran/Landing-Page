
import platform1  from "@/assets/svg/platform1.svg"
import platform2  from "@/assets/svg/platform2.svg"
import platform3  from "@/assets/svg/platform3.svg"
import platform4  from "@/assets/svg/platform4.svg"
import platform5  from "@/assets/svg/platform5.svg"
import platform6  from "@/assets/svg/platform6.png"

const platforms = [platform1, platform2, platform3, platform4, platform5, platform6];


const PlatformList = () => {
  return (
    <div className="pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px] flex justify-center items-center text-center flex-col">
        <div className="mx-auto max-w-[1300px] w-[88%]">
           <h2 className="text-center mb-[40px] text-[#020a19] text-[32px] leading-[40px] antialiased font-[700] md:mb-[60px] sm:text-[40px] sm:leading-[1.3]">Platforms supported</h2>
         <div className="flex items-center flex-wrap">
          {platforms.map((item,index)=>{
            return (
            <div key={index} className="block shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc(100%_/_6)] rounded-[10px] mb-[25px] sm:mb-[15px] px-[12px] max-xs:even:pr-0 max-xs:odd:pl-0">
            <div className="flex items-center justify-center shrink-0 relative mx-auto max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] rounded-[10px] group hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <img src={item} width={190} height={72} alt="platform" />
            </div>
            </div>
            )
          })}
         </div>
        </div>
    </div>
  )
}

export default PlatformList