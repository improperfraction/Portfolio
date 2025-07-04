import { useNavigate, Link } from 'react-router-dom';
import { } from 'react-scroll';

function BlogCardTemplate({ title, imageUrl, link }) {
    const handleClick = () => {
        window.open(link, "_blank"); // Opens in a new tab
    };
    return (
        <div className="blog-card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className=" w-[325px]  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div  className=" h-[216px] bg-cover rounded-lg"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                <div className=" pt-4 pb-4">
                    <h5 className="mb-2 lg:text-2xl text-lg text-center lg:font-bold font-semibold tracking-tight text-gray-200 dark:text-white">
                        {title}
                    </h5>
                    {/* <button onClick={handleClick} // Fix: Button opens the link
                        className="ml-14 inline-flex w-32 items-center px-3 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
}




export { BlogCardTemplate };