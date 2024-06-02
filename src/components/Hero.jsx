import React from 'react'
import upWave from '../assets/upWave.svg'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <>
            <div>
                <motion.h1 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{delay: 0.3, duration: 0.3 }}
                className='text-5xl font-bold text-center mt-[100px]'><span className='text-[#FF725E]'>ChefAI </span>- Your Smart Recipe Assistant!</motion.h1>
                <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{delay:0.4,duration:0.5}}
                className='flex justify-center mt-[50px] gap-6 mx-5'>
                    <input type="text" className='bg-[#D9D9D9] w-[500px] h-[40px] rounded-lg outline-none text-center max-sm:w-[300px] max-sm:h-[40px]' placeholder='Enter Food Name' />
                    <button className='bg-[#FF725E] transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] max-sm:px-2'>Generate</button>
                </motion.div>
                <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{delay:0.5,duration:0.5}}
                className='text-center mt-10 text-2xl font-semibold px-8'>Discover a world of culinary possibilities with <span className='text-[#FF725E]'>ChefAI</span> , your ultimate cooking companion powered by artificial intelligence.</motion.p>
                <motion.h1 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{delay:0.5,duration:0.5}}
                className='text-center mt-6'>Powered By <span className='font-bold text-green-700'>EDAMAM</span></motion.h1>
                <div>
                    <img src={upWave} alt="" className='w-full object-contain' />
                </div>
            </div>
        </>
    )
}

export default Hero