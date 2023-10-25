import fonts from "@/app/fonts";
import ScrollCards from "./root/ScrollCards";
import HeroGhost from "/public/ghostHero.png";
const Work = () =>{
    return (
        <div className=" p-12">
            <div className=" h-auto max-h-fit rounded-3xl bg-lightPurple p-12">
                <div className={"flex justify-between text-7xl py-16 " + fonts.outfitSemi.className}>
                    Work with Us
                    <p className="text-primary">
                        ahead
                    </p>
                </div>
                <div className="flex gap-16">
                    <div className="flex-1">
                        <div className="rounded-lg bg-white shadow-xl text-2xl leading-relaxed">
                            <div className="pt-12 px-12">
                                <img className="h-16 drop-shadow-xl" src = {HeroGhost.src}/>
                            </div>
                            <div className="p-12 pt-6">
                                <p className="text-4xl font-semibold pb-6">
                                    About
                                </p>
                                At Ahead our goal is to make self-improvement fun and lasting. We know there is a way how to make it work. And that`s what aHead is all about!
                            </div>
                            <div className="p-12 bg-lightCream rounded-lg leading-relaxed">
                                <p className="text-4xl font-semibold pb-6">
                                    Product
                                </p>
                                Sure you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                            </div>
                        </div>
                    </div>
                    <div className="flex-1  max-h-full overflow-auto relative">
                        <div className="max-h-[800px] flex flex-col items-center gap-8 overflow-auto pb-4">
                            <ScrollCards/>
                            <ScrollCards/>
                            <ScrollCards/>
                            <ScrollCards/>
                            <ScrollCards/>
                            <ScrollCards/>
                            <ScrollCards/>
                            <ScrollCards/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;