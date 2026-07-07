import React from 'react'
import assets from "../assets/assets";
import { motion } from "motion/react"


const Hero = () => {
    return (
        <div id='hero' className='className="flex flex-col justify-center gap-6  py-20 px-4 sm:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"'>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}



                className="inline-flex items-center gap-2 border border-gray-300 rounded-full p-1.5 text-sm">
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-xs font-medium dark:text-gray-200'>Trusted by 10k+ people</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}

                className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] 
                 font-medium xl:leading-[95px] max-w-5xl text-center dark:text-gray-200">
                  We Build Digital Solutions That Drive <span
                    className="bg-gradient-to-r from-[#5044E5] to-[#4D8CFF] 
                bg-clip-text text-transparent" >Business Growth</span> .</motion.h1>

            <motion.p 
            initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}


            className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-2xl mx-auto pb-3">
                Helping businesses grow through modern websites, AI, automation, and digital marketing.</motion.p>


            <motion.div
            initial={{ opacity: 0, scale :0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
            
            className="relative">
                <img src={assets.hero_img} alt="" className='w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="" className='absolute -top-10 -right-40 sm:top-[-120px] sm:right-[-40px] z-[-1] dark:hidden' />
            </motion.div>
        </div>

    )
}

export default Hero
