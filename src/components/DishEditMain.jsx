import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const DishEditMain = () => {
    return (
        <>
            <motion.div
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -10, opacity: 0 }}
             transition={{delay: 0.3, duration: 0.3 }}
            className='mx-6 my-10 flex justify-between'>
                <h1 className='text-4xl  font-semibold  text-[#ff725e]'>Dish Edit</h1>
                <Link to={'/userProfile'}><button className='bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-1 shadow-lg flex items-center gap-1 max-sm:hidden'><IoArrowBack /> Back</button></Link>
            </motion.div>
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.4, duration: 0.4 }}
            className='bg-[#2A373E] mx-6 rounded-xl my-10 flex justify-center items-center max-md:flex-col'>
                <div className='p-5 flex flex-col w-1/2 items-center'>
                    <img src="https://eu.ooni.com/cdn/shop/articles/Ooni_Diablo_resized.jpg?height=300&v=1599659718&width=300" alt="" className='w-1/2 rounded-2xl max-md:w-full' />
                </div>
                <div className='p-5 flex flex-col w-1/3 max-md:w-full'>
                    <div className='bg-[#d9d9d9] px-2 py-5 rounded-xl'>
                        <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100"/>
                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Name" />
                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Ingredients" />
                        <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]' placeholder='Dish Instructions' />
                       <div className='mt-5 flex justify-center'>
                       <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]'>Submit</button>
                       </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default DishEditMain