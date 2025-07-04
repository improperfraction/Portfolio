import { Link, Element } from "react-scroll";

function Home() {
    return (
        <>
            <Element name="/">
                <div className="w-screen h-48 lg:h-64 p-2 bg-yellow-400 ">
                    {/* <div className="flex h-32 flex-col justify-between"> */}
                    <div className="flex flex-row font-semibold justify-center items-center mt-1 lg:mt-4">
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer px-3 lg:px-7 text-black hover:underline">Experience</Link>
                        <Link to="Projects" smooth={true} duration={500} className="cursor-pointer px-3 lg:px-7 text-black hover:underline">Projects</Link>
                        <Link to="blog" smooth={true} duration={500} className="cursor-pointer px-3 lg:px-7 text-black hover:underline">Blog</Link>

                    </div>
                    <div className="flex flex-row font-semibold justify-normal items-center">
                        <h1 className="lg:mt-11 font-bold text-2xl lg:text-3xl ml-12 lg:ml-[790px] lg:text-center"> Hi there!!</h1>
                        {/* </div> */}
                        <img src="/pic.png" className=" w-44 h-44 lg:w-64 lg:h-60 mt-[11px] lg:mt-2 ml-3 lg:ml-[80px] transform scale-x-[-1]" alt="Mayur"></img>
                    </div>
                </div>
                <div className="w-screen lg:h-[688px] bg-black flex flex-col justify-center">
                    <div className="w-screen h-full bg-black flex flex-row justify-center">
                        <div id="info" className="lg:w-2/5 w-screen mx-5 font-sans font-medium text-justify text-slate-300 text-sm lg:text-lg ">
                            <p className="mb-3 mt-7 lg:mt-24 indent-8">I'm a Mechanical Engineering graduate from Pune University. While I didn’t take much away from the core engineering curriculum, I’m grateful to the faculty for their support in helping me discover my true interests and guiding me toward the path I’m on today.</p>
                            <p className="mt-3 indent-8"> Professionally, I’m a Software Developer with 6 years of experience building scalable, responsive web applications using C# .NET, ASP.NET, ReactJS, JavaScript, and Redux. I specialize in full-stack development with a focus on clean code, performance, and user-centric design.</p>
                            <p className="mt-3 indent-8">When I’m not coding, you’ll find me cycling (shoutout to my 112 km Pune–Lonavala ride), experimenting in the kitchen, or perfecting my coffee receipe.And of course, eating. Duh.</p>
                        </div>
                    </div>
                </div>
            </Element>

        </>
    )
}

export default Home;