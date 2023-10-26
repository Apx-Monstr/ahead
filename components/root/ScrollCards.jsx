import { motion } from "framer-motion"

const ScrollCards = (props) =>{
    return (
        <motion.div variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top center",}, offScreen:{opacity:0, scale:0,}}} 
        initial="offScreen" whileInView="onScreen" 
        viewport={{once:true}} 
        transition={{duration:1.5, type:"spring",stiffness:50}} className=" w-[420px] h-auto p-10 bg-white shadow-lg rounded-xl text-xl">
            <p className="text-2xl font-semibold pb-8">
                {props.title}
            </p>
            {props.desc}
        </motion.div>
    )
}

export default ScrollCards