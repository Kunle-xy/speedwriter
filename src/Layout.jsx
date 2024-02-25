import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Team from './components/Team/Team'
import Products from './components/Products/Products'


const Layout = () => {
  return (
    <div >
        <Header />
        <Outlet />
        <Products />
        <Team />

    </div>


  )
}

export default Layout