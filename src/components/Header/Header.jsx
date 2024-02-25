import { Link } from "react-router-dom"
import logo from "/assets/logo.svg"
import menu from "/assets/menu.svg"
import close from "/assets/close.svg"
import { ValueContext } from "../../context/Context"


const Header = () => {
  const {toggle, setToggle} = ValueContext();

  return (
    <header className="shadow sticky top-0 font-sans font-semibold text-xl">
      <nav className="bg-gray-200 p-2 py-2.5 flex justify-between items-center">
          <Link to="/" >
            <img src={logo} className=" object-contain h-[70px] " alt="logo" />
          </Link>
        <div className="hidden sm:flex">
            <ul className="space-x-4 text-black ">
              <a href='#about' className="">About</a>
              <a href='#contact' >Contact</a>
              <a href='#portfolio'>Products</a>
              <a href='#tutorials' >Tutorials</a>
              <a href='#team' >Team</a>

            </ul>
        </div>
        <div className="sm:hidden">
            <ul className="flex space-x-4 text-black items-center ">

                <div className="md:hidden flex-1">
                  <img src={!toggle ? menu : close} alt="menu" className="invert-[5] h-[20px]"
                  onClick={() => setToggle((prev) => !prev)} />
                </div>
                <div>
                  {toggle && <div className=" flex flex-col justify-center items-center absolute top-[100px] right-[2%] h-[200px]
                  font-semibold min-w-[100px] text-white bg-gray-500 bg-opacity-[70%]" >
                  <a href='#about' className="">About</a>
                  <a href='#contact' >Contact</a>
                  <a href='#portfolio'>Products</a>
                  <a href='#tutorials' >Tutorials</a>
                  <a href='#team' >Team</a>

                  </div>}
                  </div>

            </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header