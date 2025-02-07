
import BannerImg from "@/assets/images/hexnode-kiosk.webp";

const HeroSection = () => {
  return (
    <section className="p-[90px_0_30px] xl:p-[120px_0_0px] bg-[#020A19]">
    <div className="w-[88%] max-w-[1300px] !m-auto">
      <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
        <div className=" flex flex-col max-w-full sm:max-w-[550px] xl:max-w-[498px] order-2 xl:order-1">
          <div>
            <div className="mb-[20px] md:mb-[40px]">
              <h1 className="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">
                Turn your devices into kiosks in a few minutes with Hexnode
                UEM
              </h1>
            </div>
          </div>
          <div className="banner_footer">
            <form className="p-0 m-0">
              <div className="flex justify-between flex-col items-center sm:flex-row solutions_wrapper__6y5DU">
                <div className="w-full">
                  <input type="text" />
                </div>
                <div className="w-full">
                  <button className="text-[16px] leading-[20px] uppercase text-white font-normal bg-[#dd0735] w-full border-0 flex justify-center items-center transition-all ease-in-out cursor-pointer hover:text-white hover:bg-[#bb022a] hover:no-underline focus:text-white focus:bg-[#bb022a] focus:no-underline SignupStripe_btn-label__U_7uu">
                    GET STARTED NOW!
                  </button>
                </div>
              </div>
            </form>
            <div>
              <span>error</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full md:max-w-[597px] order-1 xl:order-2">
          <div className="w-full max-w-full md:max-w-[597px]  max-[420px]:max-h-[258px] max-[420px]:mb-[40px]">
            <img src={BannerImg} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection