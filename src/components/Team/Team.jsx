

const Team = () => {
  return (
    <section id='team' className="h-[650px] font-poppins">
        <div className="flex sm:flex-col gap-5 sm:justify-center sm:items-center p-10 pt-[100px]">
            <h1 className="font-bold sm:text-5xl text-xl">
                    Our Team
            </h1>
            <p className="sm:text-xl">
                We are a team of passionate individuals who are dedicated to making your writing experience better
            </p>
        </div>
        <div className="flex flex-col gap-5 sm:gap-20 sm:flex-row sm:justify-center text-xl font-bold ">
            <div className="flex flex-col justify-center items-center ">
                <img src="assets/kunle.jpg" alt="" className="rounded-full object-cover h-[200px] w-[200px]"/>
                <p>Kunle Oguntoye</p>
                <p>Co-Founder</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="assets/james.jpg" alt="" className="rounded-full object-cover  h-[200px] w-[200px]"/>
                <p>James Afful</p>
                <p>Co-Founder</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
                <img src="assets/timi.jpg" alt="" className="rounded-full object-cover  h-[200px] w-[200px]"/>
                <p>Timilehin Ayanlade</p>
                <p>Co-Founder</p>
            </div>
        </div>
    </section>
  )
}

export default Team
