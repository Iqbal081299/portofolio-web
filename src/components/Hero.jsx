import "../constants/style.css"
import"../constants/neon.css"
import profilePic from "../assets/iqbal.png"
import { motion } from "framer-motion"
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../constants/style.css"
function Hero() {
    return (
        <div className=" pb-4 lg:mb-35 ml-16 pr-16">
            <div className="flex flex-wrap my-auto">
                <div className="w-full lg:w-1/2 lg:p-8 lg:px-16 ">
                    <div className=" flex flex-col items-center lg:items-start">
                        <div className="mx-auto ">
                            <motion.h1
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="pb-8 pr-13 text-6xl font-thin tracking-tight lg:mt-16 lg:mt-8xl ">Muhammad Iqbal</motion.h1>
                            <span className="glow text-4xl mb-12 font-light">Frontend Developer
                            </span>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className=" mt-5 max-w-xl py-6 font-light tracking-tighter">
                                <div className='  flex  gap-6 text-5xl'>
                                    <a href="https://github.com/Iqbal081299 " className='git' ><FaGithubSquare /></a>
                                    <a href="https://www.facebook.com/muhammadiqbal.khan.946?locale=id_ID " className='fb' ><FaFacebookSquare /></a>
                                    <a href="https://www.instagram.com/iqbal_zitus/ " className='ig' ><FaInstagram /></a>
                                </div>
                            </motion.div>
                           
                                <a href="https://drive.google.com/file/d/1jVyiWoluHHVluXcg-zuf2riVuW64rSNB/view?usp=sharing" className="neon   md:text-lg text-center w:text-4xl mt-4 mb-2">Download My CV</a>
            
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex flex-wrap justify-center">
                    <div className=" flex item-center justify-center mt-10">
                        <img className=" gbr w-full lg:max-w-96 md:w-96 sm:w-96 min-w-64  rounded-full"
                            src={profilePic} alt="Muhammad iqbal" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
