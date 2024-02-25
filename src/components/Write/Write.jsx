import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


const Write = () => {
  return (
    <div >
        <Header />
        <Outlet />
    </div>
  )
}

export default Write
