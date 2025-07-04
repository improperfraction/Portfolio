import { useRef, useState } from "react";

function Accordion({ title, logo, role, duration, skills, children }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="w-full">
            <button className="flex items-center justify-start w-full py-4 text-left text-white" onClick={() =>
                setOpen(!open)}>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <img  className="w-8 h-8 rounded-full border border-gray-200"
                            src={logo} alt={`${title} logo`} />
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="font-medium  text-base">{title}</div>
                                <svg className={`w-3 h-3 text-gray-300 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className="text-gray-400 font-light text-sm">{role}</div>
                        </div>
                    </div>
                    <div className="text-gray-400 font-light text-sm">{duration}</div>
                </div>
            </button>
            <div
                ref={contentRef}  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                    maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
                    opacity: open ? 1 : 0.5,
                }}>
                <div className="pb-4 text-sm font-light text-gray-400">{children}</div>
                <div className="flex flex-wrap gap-2 mt-4">
                        {skills.map((skill) => (
                            <button  className="text-slate-100 bg-slate-600 hover:bg-gray-700 hover:text-white font-light rounded-md text-xs px-2 py-1"
                                key={skill}
                                type="button">
                                {skill}
                            </button>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default Accordion;