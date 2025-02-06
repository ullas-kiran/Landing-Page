import Logo from "@/assets/svg/Logo"


const Header = () => {
  return (
    <header className="w-full z-[102] left-0 nav-header relative top-0 xl:pt-[7px] xl:pb-[2px]">
    <div className="relative">
      <div className="w-[88%] mx-auto md:max-w-[1300px]">
        <nav className="flex items-center justify-between pt-[8px] pb-[8px] min-h-[65px] transition-all duration-300 ease-linear xl:min-h-[unset]">
          <a
            className="inline-block max-w-[121px] relative z-[100] xl:z-[102] xl:mt-[5px]"
            aria-label="Hexnode"
            href="https://www.hexnode.com/"
          >
            <Logo />
          </a>
          <div className="hidden xl:flex items-center">
            <a
              href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
              className="btn btn-common text-white uppercase p-[10px_26px] rounded-[3px] transition duration-200 ease-linear hover:bg-[#bb022a]"
            >
              14 Day Free Trial
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header