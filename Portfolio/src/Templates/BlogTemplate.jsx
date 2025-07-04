import Punefood from "../Pages/Punefood";


function BlogTemplate({image, imgtitle, title, date, content}) {
    return (
        <div className="bg-black min-h-screen h-full text-white flex flex-col items-center">
            <div className="bg-yellow-500 w-screen text-white h-40 flex flex-col items-center">
                <div className="mt-20">
                    <img src={image} className="w-[510px] h-[320px] object-cover rounded-lg" alt={imgtitle} />
                </div>
            </div>
            <div className=" mt-64 w-[510px] ">
                <h2 className="text-3xl font-bold text-left mt-10">
                    {title}
                </h2>
                <p className="mt-4 text-neutral-400 text-base">
                    {date}
                </p>
                <div className="mt-6 max-w-2xl mx-auto shadow-lg rounded-lg">
                  {content}
                    <div className="w-full text-center mt-10 py-4 border-t border-gray-600 text-gray-400 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogTemplate;