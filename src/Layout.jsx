import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Team from './components/Team/Team'


const Layout = () => {
  return (
    <div >
        <Header />
        <Outlet />
        <Team />

    </div>


  )
}

export default Layout