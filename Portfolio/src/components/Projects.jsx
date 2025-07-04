import { Element } from "react-scroll";
import ProjectCard from "../Templates/ProjectCard";

function Projects() {
    return (
        <Element name="Projects">
            <div className="w-screen min-h-screen lg:h-60 p-2 bg-black ">
            <h1 className="text-white font-bold text-center text-2xl lg:text-3xl mt-12 lg:mt-24">Projects</h1>
            <div className="lg:w-2/3 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-7 lg: justify-center mt-8 lg:mt-24">
                <ProjectCard
                    image="/podfans.png"
                    title="PodFans"
                    description="Podcast discovery app using the Spotify API to explore and stream podcasts directly on the web."
                    tech={[
                        "ReactJS",
                        "Javacript",
                        "TailwindCSS",
                        "Spotify API",
                        "Node.js",
                    ]}
                    website="https://podfans.vercel.app/"
                    source="https://github.com/improperfraction/podfans"
                />
                 <ProjectCard
                    image="/rizzpay.png"
                    title="RizzPay"
                    description="A secure and responsive payment app clone which lets you send and receive money, request payments, and view your full transaction history."
                    tech={[
                        "ReactJS",
                        "javascript",
                        "TailwindCSS",
                        "MomgoDB",
                        "Node.js",
                        "Express.js"
                    ]}
                    website="https://rizzpay.onrender.com/"
                    source="https://github.com/improperfraction/PaymentWebApp"
                />
                 <ProjectCard
                    image="/farewala.png"
                    title="FareWala"
                    description="Webapp which calculates accurate fare for meter based auto-rickshaw in Pune/PCMC based on trip distance and time."
                    tech={[
                        "ReactJS",
                        "javascript",
                        "TailwindCSS",
                    ]}
                    website="https://farewala.vercel.app/"
                    source="https://github.com/improperfraction/FareWala"
                />
            </div>
            </div>


        </Element>
    )
}

export default Projects;