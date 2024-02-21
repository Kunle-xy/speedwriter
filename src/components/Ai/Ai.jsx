import { useEffect, useState } from "react"
import { CgPushChevronDown } from "react-icons/cg";

const Ai = () => {
    const [Humantext, setHuman] = useState('')
    const [Aitext, setAitext] = useState('')
    const [showDash, setshowDash] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [length, setLength] = useState(1)

    useEffect(() => {
        setLength(Aitext.split(' ').length)
    }, [Aitext])

    const handleClick = () => {
        setSubmitted((prev) => !prev)
        if (submitted) {
            setHuman('')
            // setAitext('')
        }
    }

    const translate = (e) => {
        e.preventDefault()
        if (submitted)
        {setAitext(Humantext)}
    }
  return (
    <section className="font-poppins">
    {/* < div className={`flex ${showDash ? 'm-5 sm:m-[150px]': 'sm:m-[100px]'} `}> */}
    < div className={`flex  ${showDash ? 'justify-center sm:justify-start sm:m-20': 'justify-center'}  items-center mt-10`}>
        <div className="flex flex-col">
            <div className="flex-row px-20 justify-between h-[55px]  bg-green-300 font-bold text-xl hidden sm:flex rounded-full">
                <p className="place-self-center">just write it</p>
                <p className="place-self-center">Humanly-Ai</p>
            </div>
            <form onSubmit={translate}>
                <div className="flex flex-col sm:flex-row border-black/45 border-[1px] mt-5 sm:text-lg text-sm ">
                    <textarea value={Humantext} onChange={(e) => setHuman(e.target.value)}
                    placeholder="Write here..."
                    name="human"   rows ="20" type="text"
                    className={`p-5 text-black  resize-none w-[300px]
                    ${submitted ? 'block  sm:w-[300px]' : 'sm:w-[700px] '}`}/>
                    {/* <div className="bg-green-900  sm:w-4 bg-opacity-15"></div> */}

                    <textarea value = {Aitext} onChange={() => setAitext("")}
                    placeholder="Click submit to generate refined text." disabled
                    name="Ai"  rows="20" type="text" className={` resize-none ${submitted ? 'block sm:w-[700px]' : 'sm:w-[300px] hidden'}
                     sm:block  p-5 text-black  outline-none `} />
                </div>
                <button type="submit"
                onChange={(e) => console.log(e.target.value)}
                onClick={handleClick}
                className="flex justify-center items-center px-5 py-2 bg-green-500 w-full font-bold text-white sm:text-2xl text-lg">
                { submitted ?
                (<p>Clear</p>):(<p>Submit</p>)}
                </button>
            </form>
        </div>

        <div className={`${showDash ? 'rotate-180 right-[180px] sm:-rotate-90 sm:right-[430px] ' : 'sm:rotate-90 sm:right-0'} fixed sm:top-[400px] right-[180px] top-[100px] `}>
            <CgPushChevronDown className="h-[50px] w-[50px]"
            onClick={() => setshowDash((prev) => !prev)}
            color="black" />
        </div>
        <div className={`hidden sm:flex flex-col gap-20 justify-center items-center rounded-3xl
        overflow-x-auto sm:overflow-y-auto bg-black h-[200px]  sm:h-[600px] absolute ${showDash ?
            'sm:right-5 sm:min-w-[400px] sm:top-[150px] ' : 'sm:hidden' }`}>
            <div className="flex gap-2">
                <div className="flex justify-center items-center p-10 h-[150px] w-[150px]
            rounded-full bg-blue-gradient text-white font-bold text-3xl">
                    WORD COUNT
                </div>
                <div className="flex justify-center items-center  sm:text-white  font-bold text-8xl">
                        {length}
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex justify-center items-center p-10 h-[150px] w-[150px]
            rounded-full bg-blue-gradient text-white font-bold text-3xl">
                    WORD COUNT
                </div>
                <div className="flex justify-center items-center  sm:text-white  font-bold text-8xl">
                        {length}
                </div>
            </div>


        </div>
        {/* <div className={`hidden sm:flex flex-col gap-20 justify-center items-center rounded-3xl
        overflow-x-auto sm:overflow-y-auto bg-black h-[200px]  sm:h-[600px] absolute ${showDash ?
            'sm:right-5 sm:min-w-[400px] sm:top-[150px] ' : 'sm:hidden' }`}> */}
        <div className={`sm:hidden flex flex-row gap-5 justify-center items-center p-10 bg-black text-white
        rounded-3xl overflow-x-auto w-[300px] h-[250px]  ${showDash  ? 'absolute top-[1100px]' : 'hidden'}
       `}>
            <div className="flex gap-2">
                <div className="flex justify-center items-center p-10 h-[100px] w-[100px]
                rounded-full bg-blue-gradient text-white font-bold text-xl">
                        WORD COUNT
                </div>
                <div className="flex justify-center items-center  sm:text-white text-white font-bold text-6xl">
                        {length}
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex justify-center items-center p-10 h-[100px] w-[100px]
                rounded-full bg-blue-gradient text-white font-bold text-xl">
                        WORD COUNT
                </div>
                <div className="flex justify-center items-center  sm:text-white text-white font-bold text-6xl">
                        {length}
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}//let clear perform copy function

export default Ai