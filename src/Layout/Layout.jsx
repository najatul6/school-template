import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout