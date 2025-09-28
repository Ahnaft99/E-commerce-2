import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import NavbarB from "./NavbarB"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
     <Navbar></Navbar>
     <NavbarB></NavbarB>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default Layout