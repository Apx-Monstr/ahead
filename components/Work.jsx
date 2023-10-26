"use client"
import { motion } from "framer-motion";
import fonts from "@/app/fonts";
import ScrollCards from "./root/ScrollCards";
import HeroGhost from "/public/ghostHero.png";
const cards = [
    {
        title:"Power through, even when the going gets tough",
        desc:"We help you spot and work around whatever stands in the way, be it bad habits, fears, etc"
    },
    {
        title:"Learn more about who you are and where you want to go",
        desc:"We ask the right questions to help you better understand why you do things the way you do."
    },
    {
        title:"Play and grow together with others on the same journey",
        desc:"Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!"
    },
    {
        title:"Master how to make it happen in real life",
        desc:"We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards."
    },
    {
        title:"Learn about practical skills that you can actually use in real life",
        desc:"We teach you smart psychological techniques and habit-forming strategies that are easy to apply."
    },
]
const Work = () =>{
    return (
        <div className=" p-12">
            <div className=" h-auto max-h-fit rounded-3xl bg-lightPurple p-12">
                <div className={"flex justify-between py-16 " + fonts.outfitSemi.className}>
                    <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}} className="text-7xl">
                        Work with Us
                    </motion.p>
                    <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"right",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}} className="text-primary text-7xl">
                        ahead
                    </motion.p>
                </div>
                <div className="flex gap-16">
                    <div className="flex-1">
                        <div className="rounded-lg bg-white shadow-xl text-2xl leading-relaxed">
                            <div className="pt-12 px-12">
                                <motion.img variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top center",rotate:-15}, offScreen:{opacity:0, scale:0,rotate:30}}} 
                                initial="offScreen" whileInView="onScreen" 
                                viewport={{once:true}} 
                                transition={{duration:1.5, type:"spring",stiffness:100}} 
                                className="h-16 drop-shadow-xl" 
                                src = {HeroGhost.src}/>
                            </div>
                            <motion.div variants={{onScreen:{opacity:1, transformOrigin:"left",}, offScreen:{opacity:0,}}} 
                            initial="offScreen" whileInView="onScreen" 
                            viewport={{once:true}} 
                            transition={{duration:1.5, type:"spring",}}  className="p-12 pt-6">
                                <p className="text-4xl font-semibold pb-6">
                                    About
                                </p>
                                At Ahead our goal is to make self-improvement fun and lasting. We know there is a way how to make it work. And that`s what aHead is all about!
                            </motion.div>
                            <motion.div variants={{onScreen:{opacity:1, transformOrigin:"left",}, offScreen:{opacity:0,}}} 
                            initial="offScreen" whileInView="onScreen" 
                            viewport={{once:true}} 
                            transition={{duration:1.5, type:"spring",}} className="p-12 bg-lightCream rounded-lg leading-relaxed">
                                <p className="text-4xl font-semibold pb-6">
                                    Product
                                </p>
                                Sure you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex-1  max-h-full overflow-auto relative">
                        <div className="max-h-[800px] flex flex-col items-center gap-8 overflow-auto pb-4">
                            {
                                cards.map((card, index)=>(
                                    <ScrollCards key = {index} title={card.title} desc = {card.desc} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;