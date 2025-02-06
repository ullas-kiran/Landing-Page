import idc from "@/assets/images/idc.png"
import gartner from "@/assets/images/gartner.webp"
import forrester from "@/assets/images/forrester.png"
const Achievements:React.FunctionComponent = ():JSX.Element => {

    const achievementsList=[
        {
            id:1,
            img:idc,
            description:"Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024"
        },
        {
            id:2,
            img:gartner,
            description:"Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools."
        },
        {
            id:3,
            img:forrester,
            description:"Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."
        },
    ]
    
  return (
    <div className="bg-[#1A1C2B] md:!py-[30px]">
      <div className="w-[88%] max-w-[1300px] !m-auto">
        <div className="flex flex-col max-md:items-center md:flex-row  justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">

          {achievementsList.map((achievement) => {
            return (
              <>
                <a
                  href="http://"
                  target="_blank"
                  className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap__r_Utd"
                >
                  <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3">
                    <div className="flex mb-[15px]">
                      <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                        <img
                          src={achievement.img}
                          alt={achievement.description}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </a>
                <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
              </>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default Achievements