import BlogTemplate from "../Templates/BlogTemplate";

function BestDebut() {
    return (
        <>
            <BlogTemplate image="https://qph.cf2.quoracdn.net/main-qimg-d668082748015850681489f91f0125cd-lq" imgtitle="Imarn Tahir"
                title="Best ODI debut of all time" date="January 17, 2025" content={<ODIDebutContent />} ></BlogTemplate>
        </>
    )
}
function ODIDebutContent() {
    return (
        <>
            {/* <p className=" text-neutral-400 text-lg font-bold text-left mb-4">
                Post-30s where most of the cricketers would think of retiring from international cricket, this guy, 31 years of age, was dreaming about his debut.
            </p> */}
            <blockquote className="border-l-4 pl-4 mb-6 border-gray-600 italic font-semibold text-neutral-600 dark:text-gray-300">
                <span className="font-bold text-lg text-left">
                    Post-30s where most of the cricketers would think of retiring from
                    international cricket, this guy, 31 years of age, was dreaming about
                    his debut.
                </span>
            </blockquote>

            {/* Main Content */}
            <p className=" text-neutral-400 text-lg text-left mb-3">This is a story of —</p>

            {/* Title */}
            <h3 className="text-xl text-neutral-400 font-bold mb-3">Imran Tahir - <i>A Nomad who finally found his home</i></h3>


            {/* Paragraph */}
            <p className="text-neutral-400 text-lg text-left mb-4">
                Though Tahir is now one of the most sought-after leg-spinners around
                the world, his early life, before his international debut for SA, was
                opposite to the way it has turned out to be.
            </p>

            {/* Italicized Quote */}
            <p className="text-neutral-400 text-lg text-left mb-6">
                While others just have to get through the domestic arena to get into
                the national side, Tahir had to get through cultures, races, and
                nationalities for finally get into SA’s national side.
            </p>

            <div className=" mx-auto w-[300px] border- border-b border-slate-500 "></div>
            <p className="text-neutral-400 text-lg text-left mt-6 mb-4">
                Let's hear his background story first.
            </p>
            <p className="text-neutral-400 font-bold italic text-lg text-left mb-4">
                A Nomadic Cricketer
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                —Imran Tahir—South Africa's Pakistan-born leg spinner— had to work at a retail shop in Lahore to earn a living in his teens and also spent two years in SA living hand-to-mouth.
                He has spent a nomadic career playing in Pakistan, England and SA for teams like Karachi Dolphins, Hampshire, Lahore Lions, Lahore Ravi, Middlesex, Pakistan A, PIA, Sialkot Stallions, South Africa A, SSGC, Titans, Warwickshire, and Yorkshire before making his international debut for SA.
            </p>
            <p className="text-neutral-400 font-bold italic text-lg text-left mb-4">
                Destiny denied. Again.
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                —He has been one of South Africa's most prolific domestic bowlers, with 535 first-class wickets at 25.09 from 127 matches. Due to his performance, Tahir was called up to the SA squad in their test series against England in 2010 although he was then withdrawn one day later after Cricket SA revealed that he was not eligible to play.
                In January 2011 he was included in the ODI squad to play against India but spent the 5 matches carrying drinks, as he was held back as a secret weapon for the World Cup.
            </p>
            <p className="text-neutral-400 font-bold italic text-lg text-left mb-4">
                Finally, The Debut.
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                —He made his international debut in SA's World Cup opener against West Indies in Delhi. He was the 1st player to make debut directly in Cricket World Cup.
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                It was the World Cup. Stakes were High. He was brought into the attack and he conceded 11 runs in his second over and was taken out of the attack.
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                He brought back into the attack nine overs later. In that over, Tahir took his first international wicket, catching D Smith off his own bowling.
                And then the whole world witnessed his mesmerising celebration for the first time. He took off, running around the field and clutching the Proteas badge
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                He ended up taking 4 wickets for 41 runs in 10 overs during his debut match and 14 wickets in 5 matches of world cup 2011.
            </p>
            <div className=" mx-auto w-[300px] border- border-b border-slate-500 "></div>
            <i>
            <p className="text-neutral-400 text-lg text-left mt-6 mb-4">
                For many, it will not be an ideal debut as he did not claim 5 wicket haul or scored century.
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                But it was never about wickets or runs.
            </p>
            <p className="text-neutral-400 text-lg text-left mb-6">
                A cricketer who moved from Pakistan to SA via the UK for the love of a woman, in the process, played for more than 25 teams
                for more than 10 years before making debut for his national side.
                Any other player would have quit the cricket but this guy held on. With his back pressed to the wall and seemingly no way out,
                he scratched and clawed his way out of the abyss and finally made it.
            </p>
            </i>

        </>
    )
}
export default BestDebut;