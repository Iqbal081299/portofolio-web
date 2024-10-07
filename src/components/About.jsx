import aboutImg from "../assets/balo.jpeg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import"../constants/neon.css"
function About() {
    return (
        <div className=" pb-4 lg:mb-35 ml-16 pr-14">
            <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity:0 }}
            transition={{ duration: 4 }}
            className="mt-15 pt-5 text-center text-4xl">About
                <span className="text-neutral-500">Me</span></motion.h1>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="mt-5 flex item-center justify-center ">
                        <img className="max-w-md object-cover mask-image-gradient rounded-2xl" src={aboutImg} alt="" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className=" max-w-xl py-6 font-light tracking-tighter text-justify">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
