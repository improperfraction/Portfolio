import BlogTemplate from "../Templates/BlogTemplate";



function Punefood() {
    return (
        <>
            <BlogTemplate image="https://sahilk.in/static/9a0ea21db5b4f62a40f2403a31c93a54/a9657/pune-food-sahil-khan.webp" imgtitle="Pune Food"
            title="My favorite places in Pune to eat at and order from" date="October 30, 2024" content={<Punefoodlist />}></BlogTemplate>
        </>
    )
}

function Punefoodlist() {
    const foodPlaces = [
        { No: 1, name: "We Idliwale", location: "Viman Nagar & Balewadi", description: "Try their fantastic dosas and idlis with chicken curries." },
        { No: 2, name: "Yeti and the Monk", location: "Khadki & Viman Nagar", description: "Try their pork chops on rice, summer rolls, pho, Darjeeling dumplings, and thukpa." },
        { No: 3, name: "Shawarma King", location: "Nigdi", description: "Best shawarma in Pune; try it in the brota instead of roti." },
        { No: 4, name: "Gong", location: "Balewadi", description: "Casual Chinese spot from the Mainland China group; try their prawns cheung fun and baos." },
        { No: 5, name: "Two Sticks", location: "Baner", description: "Try their Thai green curry and Khow Suey platter." },
        { No: 6, name: "K", location: "Aundh", description: "Try their ramen." },
        { No: 7, name: "Subculture", location: "Aundh", description: "Best burgers; try their Mangalorean ghee roast chicken burgers and smoky shroom burgers with hot chocolate." },
        { No: 8, name: "The Place - Touche The Sizzler", location: "Camp", description: "Try their chicken shashlik and pork sizzlers." },
        { No: 9, name: "Dorje and the Bell", location: "Pimple gurav", description: "Try their baos and chicken miso ramen." },
        { No: 10, name: "Boteco", location: "Koregaon Park", description: "Brazilian cuisine; try their pao de queijo, escondidinho, and carne na pedra." },
        { No: 11, name: "Savya Rasa", location: "Koregaon Park", description: "Fine-dining Kerala food with fantastic cocktails." },
        { No: 12, name: "Toscano, Greedy Man, or Danona’s", location: "Koregaon Park, Baner, Deccan", description: "Try their pizzas." }
    ];
    return (
        <>
            <p className=" text-neutral-300 text-lg text-left mb-4">
                Even though I moved to Pune in 2015, I really started exploring Pune's food in late 2021. I figured I'd document my favorites and regulars,
                since I still keep getting asked for recommendations from folks who're visiting the city. Some of these
                are probably outdated now, but I intend on keeping this list updated.
            </p>
            <p className="text-neutral-300 text-lg text-left">Happy eating!</p>

            <h3 className="text-xl font-bold mt-6 mb-3">🍽️ Breakfast & Cafes</h3>
            <div>

                {foodPlaces.map((place) => {
                    return (
                        <div className="flex flex-row justify-start font-normal text-gray-300 mb-2">
                            {place.No}. <div className=" ml-1"> <span className="font-semibold text-gray-100">{place.name},</span> <i>{place.location}:</i> {place.description}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Punefood;