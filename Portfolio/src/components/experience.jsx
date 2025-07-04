
import { Element } from "react-scroll";
import { TCSCard, WiproCard } from "./Expcard";
import Accordion from "../Templates/Accordian";
function About() {
    return (
        <>
            <Element name="about">
                <div className="w-screen h-screen bg-black flex flex-col items-center">
                    <h1 className="text-white font-bold text-2xl lg:text-3xl mt-24">Professional Experience</h1>
                    <div className="lg:w-1/2 mt-8 lg:mt-24 w-full flex-1 flex items-start justify-center">
                        <div className="hidden lg:flex flex-col items-center justify-start h-3/5 w-full gap-8">
                            <TCSCard />
                            <WiproCard />
                        </div>
                        <div className="lg:hidden w-full mt-10 px-4 flex flex-col gap-4">
                            <Accordion title="TCS Ltd."
                                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyLmfVn46KtwJXHi3uUCoKLWoCrxWqeGGBA&s"
                                role="Software developer"
                                duration="Jun 2022 - Present"
                                skills={["C#", "ASP.NET", "ReactJS", "JavaScript", "Redux"]}>
                                <p>Worked on M365 Admin Center web portal, focusing on platform maintenance,
                                    bug resolution, and feature development using ReactJS and Redux for frontend,
                                    and C# .NET for backend services.</p>
                            </Accordion>
                            <Accordion title="Wipro Ltd."
                                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwdw5LRRgFpiRRMi-TsjpT2KUPYL8lutKMQ&s"
                                role="Software developer"
                                duration="Mar 2019 - May 2022"  
                                skills={["C#", "ASP.NET", "MVC", "MS Azure"]}>
                                <p>Migrated on-premises web applications to Azure Cloud with add-on features such as OAuth
                                    signin/signout, Azure security compliance, integration with Azure AppInsight and Key Vault,
                                    and C# .NET for backend services.</p>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </Element>
        </>
    )
}


function desc1() {
    return (
        <>
            <p className="mb-3">
                Worked on M365 Admin Center web portal. Focusing on maintaining the platform,
            </p>
            <p className="mb-3">
                resolving bugs, and developing new features using ReactJS and Redux for frontend development
            </p>
            <p className="mb-3">
                and C# .NET for backend services.
            </p>
        </>
    )
}

export default About