"use client"
import { motion } from "framer-motion";
import Card from "./root/Card";
import redGhost from "/public/redGhost.svg"
import img from "react-dom"
import React, { useState } from "react";
const quotes=[
    {
        emoji: "😔",
        title: "You hold a grudge against a colleague",
        desc: "You harbor negative feelings and resentment towards a colleague, which hinders collaboration and can lead to a toxic work environment.",
        classes: "bg-lightBlue"
    },
    {
        emoji:"😠",
        title:"You argue with a colleague",
        desc:"You get angry and defensive, instead of staying open and working towards common ground.",
        classes:"bg-lightPurple"
    },
    {
        emoji:"😯",
        title:"You get a promotion at work",
        desc:"You Question yourself and wonder when they`ll realise you are an unqualified imposter, instead of trusting yourself and your abilities",
        classes:"bg-primary -rotate-6 text-white"
    },
    {
        emoji:"🤨",
        title:"You attend a class reuinon",
        desc:"You compare yourself with your peers` achievement, instead of making your self-judgement more independent of others",
        classes:"bg-lightRed"
    },
    {
        emoji:"😒",
        title:"You are at lively dinner party",
        desc:"You play on your phone, instead of confidently approaching strangers and striking up a chat",
        classes:"bg-lightCream"
    },
    {
        emoji:"😬",
        title:"You hit dead end in a negotiation",
        desc:"You get nervous, frazzled and frustated, instead of staying optimistic and solution oriented",
        classes:"bg-lightBlue"
    },
]
const Quotes = () =>{
    return (
        <div className=" py-12">
            <div className="relative w-fit">
                <motion.p 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.25, type:"spring"}} 
                className="text-6xl font-semibold px-16 pb-16">
                    Does this sound familiar...
                </motion.p>
                <img src={redGhost.src} className="absolute top-0 -right-4 -rotate-6 h-16 animate-bounce"/>
            </div>
            <motion.div 
            variants={{onScreen:{opacity:1, scale:1, transformOrigin:"right",}, offScreen:{opacity:0, scale:0,}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:0.75, type:"spring",}} 
            className="overflow-auto flex items-center px-16 gap-12 py-12 relative" >
                {quotes.map((quote, index) => (
                    <Card key={index} classes={quote.classes} emoji={quote.emoji} title={quote.title} desc={quote.desc} />
                ))}
            </motion.div>
        </div>
    )
}

export default Quotes;