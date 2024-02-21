import { Link } from "react-router-dom"
import { ValueContext } from "../../context/Context";

const About = () => {
    const {toggle, setToggle} = ValueContext();

  return (
    <section id="about" className={`${toggle ? '' : " "}`} >
        <div className="font-poppins grid grid-row-2 gap-5 sm:grid-cols-2 bg-gray-200 py-[100px] px-10 ">
            <div className="flex flex-col gap-2">
                <h1 className=" font-bold sm:max-w-[700px] sm:leading-[70px] max-w-[300px] text-3xl sm:text-5xl  ">
                    An AI-powered platform that helps you write smarter and 10X faster.
                </h1>
                <p className="text-lg w-full"
                >Humanly-AI charges your creativity power to continue writing without looking back</p>
                <img  className="hidden sm:block p-10" height={10}
                        src="assets/started.jpeg" alt="logo" />
            </div>
            <div className="">
                <video
                src="assets/writer.mp4" autoPlay muted loop></video>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col py-10 gap-5 w-full">
                        <h1 className="font-bold text-3xl ">
                            What is different about humanly-AI?
                        </h1>
                        <p className="sm:text-xl">
                        Humanly-AI is a platform that ensure you personally learn and improve your writing skills while AI guides you to your desired result. While at it, you do not worry about sentence-level grammatical checks.
                        Unlike Grammarly, your written essay, is grammatical error free by just a single click with analytics insight on your writing skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex h-[100] bg-white justify-center items-center p-10">
                <Link to='/write'>
                    <button className=
                    " hover:text-black font-bold bg-black text-white p-5 sm:p-10 rounded-xl sm:text-3xl hover:bg-green-500">
                        Get Started
                    </button>
                </Link>
        </div>
    {/* #teams */}
    <hr />
    </section>
  )
}

export default About