import React from 'react'
import postFirst from '../assets/postFirst.svg'
import postSecond from '../assets/postSecond.svg'
import { motion } from 'framer-motion'

const PostMain = () => {
  return (
    <>
    <motion.div 
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{delay: 0.3, duration: 0.3 }}
    className='px-10 flex gap-6 mt-10 max-sm:flex-col max-sm:px-3'>
        <div className='bg-[#2A373E] w-1/2 flex px-6 h-70 justify-center py-3 rounded-2xl  items-center max-sm:w-full'>
            <img src={postFirst} alt="" width={'40%'} />
            <p className='text-white ml-6 text-2xl'>
                Share Recipe Post ! <br />
                feedback From <br />
                <span className='text-[#FF725E] font-semibold'>ChefAI</span> Community
            </p>
        </div>
        <div className='bg-[#FF725E] w-1/2 px-6 h-70 py-3 rounded-2xl max-sm:w-full items-center'>
            <h1 className='text-white text-center px-6 text-xl'>Have a delicious recipe to share? Write it down here and inspire others in the <span className='text-[#2A373E] font-semibold'>ChefAI</span> community!</h1>
            <div className='px-6 flex items-center justify-center mt-3'>
                <img src={postSecond} alt="" width={'30%'} />
                <button className='transition duration-150 bg-[#263238] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#FF725E] h-10 ml-8 mt-6'>Click Here</button>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default PostMain