import Header from "@/components/common/header/Header"
import { Outlet } from "react-router-dom"


const MainLayout:React.FunctionComponent = ():JSX.Element => {
  return (
    <div className="">
        <Header/>
        <main><Outlet/></main>
        <footer>outlet footer</footer>
    </div>
  )
}

export default MainLayout