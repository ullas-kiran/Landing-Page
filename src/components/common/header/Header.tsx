import Logo from "@/assets/svg/Logo"
import { useEffect, useState } from "react";


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 50);
    };

    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${isScrolled?"bg-[#fff] scrollbg border-b border-[#dbd9d2]":""} sticky top-0 w-full z-[102] left-[0px] nav-header before:content-['']] before:absolute before:bg-[#fff] before:left-[0px] before:top-[0px] before:w-full before:h-full before:opacity-0 before:z-[-3] xl:hover:before:opacity-100 header-wrap false xl:pt-[7px] xl:pb-[2px]`}
    >
      <div className="relative">
        <div className="w-[88%] mx-auto md:max-w-[1300px]">
          <nav className="flex items-center justify-between pt-[8px] pb-[8px] min-h-[65px] transition-all duration-[0.3s] ease-linear xl:min-h-[unset] navbar">
            <a
              className="inline-block max-w-[121px] relative z-[100] xl:z-[102] xl:mt-[5px] xl:mb-[auto]"
              aria-label="Hexnode"
              href="https://www.hexnode.com/"
            >
              <Logo />
            </a>
            <div
              style={{ paddingBottom: "unset", top: "unset" }}
              className="w-full flex justify-between items-center opacity-0 xl:opacity-100 nav-bar_mob-nav-sidebar__rucOk   "
            >
              <div className="w-full flex justify-start items-center opacity-0 ml-[30px] xl:justify-between xl:opacity-100 nav-bar_mob-nav-sidebar-inner__8BhrY">
                <div
                  style={{ minHeight: "0" }}
                  className="text-[18px] leading-[24px] border-b-[1px] border-solid border-[#dbd9d2] bg-white flex items-center max-w-[100%] px-[30px] mt-[0px] ml-auto sticky top-0 z-[104] w-full xl:hidden py-[32px]"
                ></div>
                <ul className="text-[16px] text-[#BFC0C1] leading-[13px] list-none flex justify-between m-0 px-0 flex-col w-full xl:flex-row xl:w-[unset]"></ul>
                <div className="bg-white max-w-[100%] ml-auto px-[30px] pt-[30px] pb-[20px] w-full xl:max-w-[unset] xl:w-[unset] xl:ml-[unset] xl:bg-[transparent] xl:p-[unset]">
                  <a
                    target="_self"
                    rel="nofollow"
                    role="link"
                    aria-label="14 Day Free Trial"
                    className="flex btn btn-common justify-center items-center nav-bar_trial-btn-ctrl__PvsGY btn-nav text-[15px] leading-[24px] text-[#fff] uppercase whitespace-nowrap min-w-[unset] min-h-[unset] rounded-[3px] p-[10px_26px] m-0 transition duration-[0.2s] ease-linear relative z-[1] bg-[#bb022a] hover:text-[#fff] hover:decoration-[none] active:bg-[#bb022a] active:text-[#fff] active:decoration-[none] focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff] target:decoration-[none]  "
                    href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                  >
                    14 Day Free Trial
                  </a>
                  <div className="flex justify-center items-center mt-[20px] mb-[10px] xl:hidden">
                    <a
                      target="_self"
                      rel="nofollow"
                      role="link"
                      aria-label="Login"
                      className="inline-block nav-bar_login-btn-ctrl__4QBMi  "
                      href="https://www.hexnode.com/mobile-device-management/sign-in/"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center xl:hidden">
              <div className="w-full border-b-[1px] border-solid border-[#dbd9d2] bg-[#fff] opacity-0 invisible fixed translate-y-[-10px] left-[0px] top-[67px] z-[-1] sm:border-0 sm:border-[transparent] sm:bg-[transparent] sm:mr-[50px] sm:relative sm:top-[0px] xl:hidden trial-nav-btn nav-bar_mob-nav-btn-view__HMJDe "></div>
              <button className="hamburger--btn relative z-[101] self-end sm:self-center">
                <span className="border-0 w-[24px] h-[18px] bg-[transparent] flex relative z-[199] m-0 cursor-pointer before:absolute  before:content-[''] before:w-[100%] before:h-[3px] before:rounded-[100px] before:left-[0px] before:bg-[#fff] after:absolute after:content-[''] after:w-[100%] after:h-[3px] after:rounded-[100px] after:left-[0px] after:bg-[#fff] before:bottom-[0px] after:top-[0px] after:mt-[0px] nav-bar_menu__eM2RY">
                  <span className="w-[100%] h-[3px] bg-[#fff] rounded-[100px] visible mb-[0px] mt-[-2px] opacity-[1] absolute left-[0px] top-[50%] translate-y-[25%]"></span>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header