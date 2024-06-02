import React from 'react'
import { motion } from 'framer-motion'
const AboutSection = () => {
  return (
    <>
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{delay: 0.4, duration: 0.4 }}
    className='mt-10 mx-5'>
        <h1 className='text-3xl font-bold text-[#2A373E] underline'>Our Commitment</h1>
        <p className='my-3 '>We are committed to continually improving ChefAI to meet the evolving needs of our users. Our team is dedicated to:</p>
        <ul className='list-disc mx-5 text-[#2A373E]'>
            <li className='text-2xl font-light mb-2'><span className='font-semibold text-[#FF725E]'>Innovation</span>: Regularly updating our AI and features to provide the best possible user experience.</li>
            <li className='text-2xl font-light mb-2'><span className='font-semibold text-[#FF725E]'>Accessibility</span>: Ensuring that our platform is accessible to all users, regardless of their culinary expertise or dietary restrictions.</li>
            <li className='text-2xl font-light mb-2'><span className='font-semibold text-[#FF725E]'>Sustainability</span>: Promoting sustainable cooking practices by featuring recipes that minimize food waste and utilize seasonal ingredients.</li>
        </ul>
        <h1 className='text-3xl font-bold text-[#2A373E] my-5 text-center'>Join Our <span className='text-[#FF725E] '>Community</span></h1>
        <p className='text-center'>We invite you to join the <span className='text-[#FF725E] font-semibold'>ChefAI</span> community and embark on a delicious journey with us. Whether you’re looking to discover new recipes, improve your cooking skills, or simply enjoy the process of making and sharing food, <span className='text-[#FF725E] font-semibold'>ChefAI</span> is here to support and inspire you.</p>
        <h3 className='text-2xl font-light text-[#2A373E] my-5 text-center'>Thank you for choosing <span className='text-[#FF725E] font-semibold'>ChefAI</span>. Happy cooking!</h3>
    </motion.div>
    </>
  )
}

export default AboutSection