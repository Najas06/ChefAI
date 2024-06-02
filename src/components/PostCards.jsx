import React from 'react'
import PostDishCards from './PostDishCards'
import { motion } from 'framer-motion'

const PostCards = () => {
  return (
    <>
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{delay: 0.4, duration: 0.4 }}
    className='mt-10 flex justify-center flex-col items-center'>
    <h1 className='text-3xl font-semibold text-center'>Search Your <span className='text-[#FF725E] font-bold underline max-sm:text-2xl'>Dish Recipe</span> Here</h1>
    <br />
    <input type="text" className='bg-[#D9D9D9] w-[500px] h-[40px] rounded-lg outline-none text-center max-sm:w-[300px] max-sm:h-[40px]' placeholder='Type by Dish Name' />
    </motion.div>
    <PostDishCards/>
    </>
  )
}

export default PostCards