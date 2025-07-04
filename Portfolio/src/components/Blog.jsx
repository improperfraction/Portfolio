import { Element } from "react-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./experience";
import FavPune from "../Templates/BlogTemplate";
import PuneFoodCard from "./BlogCards/PuneFoodCard";
import ODIDebutCard from "./BlogCards/ODIDebutCard";
import { BlogCardTemplate } from "../Templates/BlogCardTemplate";



function Blog() {
    return (
        <Element name="blog">
            <div>
                <div className=" bg-black min-h-screen  flex flex-col items-center">
                    <h1 className="text-white font-bold text-2xl lg:text-3xl mt-12 lg:mt-24">Blogs</h1>
                    <div class="grid lg:grid-cols-3 grid-cols-1 gap-7 mt-8 lg:mt-20">
                        {/* <PuneFoodCard></PuneFoodCard> */}
                        <BlogCardTemplate title="My Favourite Places to Explore in Pune"
                            imageUrl={"https://sahilk.in/static/9a0ea21db5b4f62a40f2403a31c93a54/a9657/pune-food-sahil-khan.webp"}
                            link={"/blogs/Pune-food-recommendations/"} ></BlogCardTemplate>
                        <BlogCardTemplate title="The best ODI debut of all time"
                            imageUrl={"https://qph.cf2.quoracdn.net/main-qimg-d668082748015850681489f91f0125cd-lq"}
                            link={"/blogs/best-ODI-debut/"} ></BlogCardTemplate>
                    </div>

                </div>
            </div>
        </Element>

    )
}

export default Blog;