"use client"
import miniGhost from "/public/minighost.png"
import sunflower from "/public/sunflower.svg"
import flower from "/public/Flower.svg"
import leaf from "/public/leaf.svg"
import ripple from "/public/Ripple.svg"
import { motion } from "framer-motion"
const Meet = ()=>{
    return (
        <div className="bg-white p-12 z-10 relative">
            <motion.img 
            variants={{onScreen:{rotate:360, scale:1}, offScreen:{scale:0}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:2.25, type:"spring", stiffness:260}}
             src={flower.src} alt="" className="absolute top-2 right-32 z-30"/>
            <div className="bg-lightCream rounded-3xl p-12 relative overflow-hidden z-10">
                <motion.div 
                variants={{onScreen:{scale:1, transformOrigin:"right"}, offScreen:{scale:0}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:2.25, type:"spring", stiffness:200}}
                className="h-96 bg-lightRed absolute bottom-16 -left-32 aspect-square rounded-full -z-10"></motion.div>
                <motion.img variants={{onScreen:{opacity:1, scale:1, transformOrigin:"right",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                src={leaf.src} alt="" className="absolute top-32 right-32 -rotate-12"/>
                <motion.img variants={{onScreen:{opacity:1, scale:1, transformOrigin:"bottom",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring",stiffness:200}}
                src={leaf.src} alt="" className="absolute bottom-64 left-1/3 -rotate-12"/>
                <motion.img variants={{onScreen:{opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.75, type:"spring",stiffness:250}} 
                src={ripple.src} alt="" className="absolute bottom-48 left-1/3 -rotate-12"/>
                <div className="my-24 z-10">
                    <div className="text-2xl px-8">
                        <motion.p
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring"}}>
                            Built out of Frustation 
                        </motion.p>
                        <motion.p 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.25, type:"spring"}}
                        className="text-7xl font-semibold pt-4">
                            Meet the ahead app
                        </motion.p>
                    </div>
                    <div className="flex gap-8 py-16">
                        <div className="flex-1  flex items-center justify-center">
                            <motion.div 
                            variants={{onScreen:{rotate:360 , opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
                            initial="offScreen" whileInView="onScreen" 
                            viewport={{once:true}} 
                            transition={{duration:1.25, type:"spring", stiffness:300}}
                            className="bg-white aspect-square rounded-full h-72 flex items-center justify-center border-[16px] border-gray-100 relative">
                                <div className=" w-16 h-16 left-[calc(50%-2rem)] -top-8 absolute flex items-center justify-center ">
                                    <p className="z-10 text-white">
                                        1
                                    </p>
                                    <img src={sunflower.src} alt="" className="h-full w-full absolute top-0 left-0"/>
                                </div>
                                <motion.img
                                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
                                initial="offScreen" whileInView="onScreen" 
                                viewport={{once:true}} 
                                transition={{duration:1.75, type:"spring", stiffness:250}}
                                src = {miniGhost.src} className="h-36"/>
                            </motion.div>
                        </div>
                        <motion.div variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring"}}
                        className=" flex-1 text-3xl p-12">
                            A personalised pocket coach that provides bite-sized, science driven tools to boost emotional intelligence.
                            <br /><br />Think of it as a pocket cheerleader towards a better, more fulfilling.
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Meet;