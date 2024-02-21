import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"


const Write = () => {
  return (
    <div >
        <Header />
        <Outlet />
    </div>
  )
}

export default Write
