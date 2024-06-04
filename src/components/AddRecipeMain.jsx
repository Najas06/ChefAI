import React from 'react'
import createPost from '../assets/createPost.svg'
import { motion } from 'framer-motion'
const AddRecipeMain = () => {
    return (
        <>
            <motion.div 
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -10, opacity: 0 }}
             transition={{delay: 0.3, duration: 0.3 }}
            className='my-10 mx-6'>
                <h1 className='text-5xl text-[#ff725e] font-bold'>Create Post</h1>
                <p className='mt-3'>Have a delicious recipe to share? Write it down here and inspire others in the <span className='text-[#ff725e] font-semibold '>ChefAI</span> community!</p>
                <motion.div
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{delay: 0.4, duration: 0.4 }}
                className='flex items-center justify-center gap-16 mt-10 max-sm:flex-col max-md:flex-col max-lg:flex-col'>
                    <div className='bg-[#d9d9d9] w-1/4 flex flex-col px-6 justify-center py-6 rounded-2xl  items-center gap-3  max-lg:w-full'>
                        <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100"/>
                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Name" />
                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Ingredients" />
                        <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]' placeholder='Dish Instructions' />
                        <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]'>Submit</button>
                    </div>
                    <img src={createPost} alt="" />
                </motion.div>
            </motion.div>
        </>
    )
}

export default AddRecipeMain