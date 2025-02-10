

const Footer = () => {
  return (
    <footer>
        <nav>
            <div className="bg-[#f2f2f2] p-[30px_0] sm:p-[20px_0]">
                 <div className="w-[88%] mx-auto md:max-w-[1300px]">
                     <div className="flex flex-col flex-wrap justify-center items-center w-full sm:flex-row sm:justify-between">
                        <div className="flex flex-col sm:flex-row">
                            <div className="m-[0_0_20px] order-1 sm:m-0 sm:order-2">
                                <ul className="flex flex-row flex-wrap p-0 m-0 ">
                                    <li className="inline-block leading-none list-none after:content-['-'] after:text-[14px] after:leading-none after:inline-flex after:px-[5px] after:opacity-80 last:after:hidden">
                                        <a role="link" className="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]" href="https://www.hexnode.com/legal/terms-of-use/">Terms of Use</a>
                                    </li>
                                    <li className="inline-block leading-none list-none after:content-['-'] after:text-[14px] after:leading-none after:inline-flex after:px-[5px] after:opacity-80 last:after:hidden">
                                        <a role="link" className="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]" href="https://www.hexnode.com/legal/terms-of-use/">Privacy</a>
                                    </li>
                                    <li className="inline-block leading-none list-none after:content-['-'] after:text-[14px] after:leading-none after:inline-flex after:px-[5px] after:opacity-80 last:after:hidden">
                                        <a role="link" className="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]" href="https://www.hexnode.com/legal/terms-of-use/">Cookies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex order-3">
                            <p className="text-[12px] leading-[24px] text-text-default font-medium m-0">Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
                        </div>
                     </div>
                 </div>
            </div>
        </nav>
    </footer>
  )
}

export default Footer