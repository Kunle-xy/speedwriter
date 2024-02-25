import logo from "/assets/logo.svg"
import agric from "/assets/agric.jpeg"

const Products = () => {
  return (
    <section id='portfolio' className="relative bg-black h-[550px]">
        <div className='text-4xl flex p-10 gap-40 justify-center items-center'>
            <div className="relative bg-white flex-1 flex-col justify-center items-center p-5 h-[400px] max-w-80">
                <p className="">Agriculture-<span
                className="text-red-400">Tech</span></p>
                <p className="flex justify-center absolute bottom-10">
                    <img src={agric} alt=""  className="h-[200px] w-[200px] rounded-full"/>
                </p>
            </div>
            <div className="relative bg-white flex-1  justify-center items-center p-5 h-[400px] max-w-80">
                <p className="">Underground <span className="text-red-400">Utility Mapping</span></p>
                <p className="flex justify-center absolute bottom-10">
                    <img src={agric} alt=""  className="h-[200px] w-[200px] rounded-full"/>
                </p>
            </div>
            <div className="relative bg-white flex-1  justify-center items-center p-5 h-[400px] max-w-80">
                <p className="">Hackathon <span className="text-red-400">Devs</span></p>
                <p className="flex justify-center absolute bottom-10">
                    <img src={agric} alt=""  className="h-[200px] w-[200px] rounded-full"/>
                </p>
            </div>

        </div>
        <p className=" text-white  text-5xl flex justify-center items-center">Other Products</p>
    </section>
  )
}

export default Products
