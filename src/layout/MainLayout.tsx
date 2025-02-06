import { Outlet } from "react-router-dom"


const MainLayout:React.FunctionComponent = ():JSX.Element => {
  return (
    <div className="">
        <header>outlet header</header>
        <main><Outlet/></main>
        <footer>outlet footer</footer>
    </div>
  )
}

export default MainLayout