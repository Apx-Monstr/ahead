"use client"

import blueGhost from "/public/blueGhost.svg"
import { motion } from "framer-motion";
const SelfImprove = ()=>{
    return (
        <div className="bg-white p-24">
            <motion.p 
            variants={{onScreen:{opacity:1, scale:1, transformOrigin:"right",}, offScreen:{opacity:0, scale:0,}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1.25, type:"spring",stiffness:150}} className="text-2xl">
                Wrong with self imporovement and how we are fixing it
            </motion.p>
            <div className="pb-16 relative w-fit">
                <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.75, type:"spring",stiffness:200}}
                className="text-7xl font-semibold leading-loose">
                    Self Improvement. Ugh...
                </motion.p>
                <motion.img 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"right",rotate:27.5}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",stiffness:200}}
                src = {blueGhost.src} 
                className="absolute top-8 -right-16 rotate-12 h-16"/>
            </div>
            <motion.div variants={{onScreen:{opacity:1, transformOrigin:"bottom",translateY:0}, offScreen:{opacity:0, translateY:200}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1.5, type:"spring",stiffness:200, damping:10}}
            className="w-full relative">
                <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#fffffffb] via-[#ffffffc9] to-transparent z-30"></div>
                <div className="w-[70%] mx-auto border-l-2 border-primary z-10">
                    <div className=" px-12 relative font-normal pb-12">
                        <div className="absolute h-8 w-8 bg-lightPurple rounded-full flex items-center justify-center top-0 -left-4 animate-ping">
                        </div>
                        <div className="absolute h-8 w-8 bg-lightPurple rounded-full flex items-center justify-center top-0 -left-4">
                            <div className="h-4 w-4 rounded-full bg-primary animate-none"></div>
                        </div>
                        <motion.p 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}className="text-4xl font-semibold pb-4">
                            It`s not as easy as 1-2-3.
                        </motion.p>
                        <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}} className="text-2xl">
                            The journey of change may be long, but our sessions are quick. We get
                            to the point and tell you what you want to know (and nothing else).
                        </motion.p>
                    </div>
                    <div className=" px-12 relative font-normal pb-12">
                        <div className="absolute h-4 w-4 bg-primary rounded-full flex items-center justify-center top-3 -left-2">
                        </div>
                        <motion.p 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}className="text-4xl font-semibold pb-4">
                            Old habits are hard to break.
                        </motion.p>
                        <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.25, type:"spring",}}className="text-2xl">
                            And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.
                        </motion.p>
                    </div>
                    <div className=" px-12 relative font-normal pb-12">
                        <div className="absolute h-4 w-4 bg-primary rounded-full flex items-center justify-center top-3 -left-2">
                        </div>
                        <motion.p 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}className="text-4xl font-semibold pb-4">
                        You and your motivation don`t have a long-term relationship.
                        </motion.p>
                        <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.25, type:"spring",}}className="text-2xl">
                            Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals..
                        </motion.p>
                    </div>
                    <div className=" px-12 relative font-normal pb-12">
                        <div className="absolute h-4 w-4 bg-primary rounded-full flex items-center justify-center top-3 -left-2">
                        </div>
                        <motion.p 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}className="text-4xl font-semibold pb-4">
                            Books just don`t offer practical solution
                        </motion.p>
                        <motion.p variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.25, type:"spring",}}className="text-2xl">
                            The journey of change may be long, but our sessions are quick. We get
                            to the point and tell you what you want to know (and nothing else).
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SelfImprove;