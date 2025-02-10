import Footer from "@/components/common/footer/Footer"
import Header from "@/components/common/header/Header"
import { Outlet } from "react-router-dom"


const MainLayout:React.FunctionComponent = ():JSX.Element => {
  return (
    <div className="">
        <Header/>
        <main><Outlet/></main>
        <Footer/>
    </div>
  )
}

export default MainLayout