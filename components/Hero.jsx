"use client"

import fonts from "@/app/fonts";
import downloadApp from "/public/DownloadApp.svg";
import roundCircle from "/public/Circle.png";
import phone from "/public/Phone.png"
import leaf from "/public/leaf.svg"
import ripple from "/public/Ripple.svg"
import Flower from "/public/Flower.svg"
import { motion } from "framer-motion";
const Hero = (props) =>{
    return (
        <div className="bg-white p-12 pt-4">
            <div className="w-full h-screen max-h-[1080px] rounded-3xl bg-lightPurple flex relative overflow-hidden">
                <img src = {leaf.src} className="absolute -top-4 left-16 h-16 -rotate-12" alt="leaf image"/>
                <img src = {ripple.src} className="absolute -top-4 right-32 h-12" alt="leaf image"/>
                <img src = {ripple.src} className="absolute -bottom-16 left-64 h-28" alt="leaf image"/>
                <img src = {ripple.src} className="absolute top-36 left-1/2 h-12" alt="leaf image"/>
                <div className="flex flex-col flex-1 justify-center p-12 ">
                    <motion.p initial={{transformOrigin:"top",opacity:0, translateY:-10}} animate={{opacity:1,translateY:0}} transition={{duration:1.5,}} className="text-lg leading-loose">
                        Ahead app
                    </motion.p>
                    <motion.div initial={{ translateX:-100,transformOrigin: "left", opacity:0 }} animate={{ translateX:0,opacity:1 }} transition={{ duration: .75 }} className={"text-7xl " + fonts.outfitSemi.className}>
                        Master your Life <br />by mastering <br />emotions
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.25}} className="flex gap-8 py-8 items-center">
                        <img className="h-12 self-start cursor-pointer" src = {downloadApp.src}/>
                        <div className="text-sm">
                            <div className="flex gap-1 pb-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD134"/>
                                </svg>
                            </div>
                            100+ AppStore Reviews
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 relative flex items-center justify-center">
                    <motion.img initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 1, rotate: 360 }} transition={{ duration: .75 }} src = {roundCircle.src} className="z-10"/>
                    <motion.div initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{duration:.75}} className="h-80 aspect-square rounded-full absolute self-center bg-primary opacity-40 drop-shadow-xl">
                    </motion.div>
                    <motion.img initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{ type: "spring",stiffness: 260,damping: 20, duration:2.5}} src={phone.src} alt="phone screen" srcset="" className="absolute self-center drop-shadow-md"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;