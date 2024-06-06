import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const GenerateDish = () => {
    return (
        <>
            <motion.div
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -10, opacity: 0 }}
             transition={{delay: 0.3, duration: 0.3 }}
            className='bg-[#d9d9d9] mx-20 p-5 mt-10 rounded-2xl flex justify-center items-center gap-40 max-md:flex-col-reverse max-sm:mx-6 max-md:gap-4 '>
                <motion.div
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{delay: 0.4, duration: 0.4 }}
                >
                    <h1 className='text-lg underline'>Generate Dish Details Powered By <span className='text-green-700 font-semibold'>EDAMAM</span></h1>
                    <br />
                    <h1 className='text-2xl'>Dish Name : <span className='text-green-700 font-semibold'>Dish Name</span> </h1>
                    <br />
                    <h1 className='text-lg'>Dish Ingredients : </h1>
                    <ol className='list-disc mx-10'>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                    </ol>
                    <br />
                    <h1 className='text-lg'>Dish Instructions : <Link className='text-[#FF725E]'>Click here to View</Link> </h1>
                </motion.div>
                <motion.div
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{delay: 0.5, duration: 0.5 }}
                >
                    <img src="https://eu.ooni.com/cdn/shop/articles/Ooni_Diablo_resized.jpg?height=300&v=1599659718&width=300" alt="" className='w-full' />
                </motion.div>
            </motion.div>
        </>
    )
}

export default GenerateDish