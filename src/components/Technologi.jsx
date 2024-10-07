import { RiReactjsLine } from "react-icons/ri"
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { motion } from "framer-motion"
import { FaBootstrap } from "react-icons/fa";
import { SiCoreldraw } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


function Technologi() {
    return (
        <div className=" pb-24 lg:mb-35 ml-24 mr-24">
            <motion.h1 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 4 }}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-red-500 shadow-xl shadow-red-500 p-4">
                    <IoLogoHtml5 className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-red-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-blue-600 shadow-xl shadow-blue-600 p-4">
                    <FaCss3Alt className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-blue-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-yellow-400 shadow-xl shadow-yellow-400 p-4">
                    <FaJsSquare className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-purple-400 shadow-xl shadow-purple-400 p-4">
                    <FaPhp className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-purple-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-cyan-400 shadow-xl shadow-cyan-400 p-4">
                    <RiReactjsLine className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-green-400 shadow-xl shadow-green-400 p-4">
                    <RiTailwindCssFill className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-purple-900 shadow-xl shadow-purple-900 p-4">
                    <FaBootstrap className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-purple-900" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-white-400 shadow-xl shadow-white p-4">
                    <SiMysql className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-green-800 shadow-xl shadow-green-800 p-4">
                    <SiCoreldraw className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-green-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-blue-800 shadow-xl shadow-blue-800 p-4">
                    <SiAdobephotoshop className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-blue-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-red-800 shadow-xl shadow-red-800 p-4">
                    <SiAdobeaftereffects className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-red-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-blue-300 shadow-xl shadow-blue-300 p-4">
                    <SiAdobepremierepro className="text-5xl vs:text-xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-blue-300" />
                </motion.div>


            </motion.div>
        </div>
    )
}

export default Technologi
