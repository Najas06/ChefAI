import React, { useEffect } from 'react'
import Logo from '../assets/Logo.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Intro = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home')
        },2200)
    },[])
  return (
    <>
    <div className='min-h-screen flex justify-center items-center bg-[#FF725E]'>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex  items-center rounded-[50%] w-[250px] h-[250px] bg-white justify-center'>
        <img src={Logo} alt="" />
        <h1 className='text-3xl font-bold mt-10'>ChefAI</h1>
        </motion.div>
    </div>
    </>
  )
}

export default Intro