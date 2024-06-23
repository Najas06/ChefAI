import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IoArrowBack } from 'react-icons/io5'
import { servelURL } from '../services/baseUrl'
import Feedback from './Feedback'
import Reviews from './Reviews'
const ReadMoreMain = () => {
  const navigate = useNavigate()
  const [dish, setDish] = useState({
    dishname:"",
    ingredients:"",
    description:"",
    image:""
  })

  const back = ()=>{
    sessionStorage.removeItem('dishes')
    navigate('/posts')
  }

  useEffect(()=>{
    const readDish = JSON.parse(sessionStorage.getItem('dishes'))
    setDish({
      dishname:readDish.dishname,
      ingredients:readDish.ingredients,
      description:readDish.description,
      image:readDish.image
    })
  },[])
  console.log(dish);
  return (
    <>
    <motion.div 
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: -10, opacity: 0 }}
           transition={{delay: 0.2, duration: 0.2 }}
           className='flex justify-end items-center  mx-6 '>
           <button className='bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg flex items-center gap-1' onClick={()=>back()}><IoArrowBack /> Back</button>
           </motion.div>
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.3, duration: 0.3 }}
            className='bg-[#E9E9E9] mx-6 my-10 rounded-lg'>
                <div className='p-5 flex gap-10 max-md:flex-col items-center'>
                    <img src={`${servelURL}/uploads/${dish.image}`} alt="" className='w-1/3 rounded-2xl max-md:w-1/2' />
                    <div>
                        <h1 className='text-4xl font-semibold text-[#2A373E] underline'>{dish.dishname}</h1>
                        <p className='mt-3'><span className='font-semibold'>Recipe Ingredient</span>: {dish.ingredients} </p>
                        <p className='mt-3'><span className='font-semibold'>Instruction</span>: {dish.description}</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.4, duration: 0.4 }}
            className='mx-6 flex justify-between my-6 gap-5 max-md:flex-col-reverse'>
            <Reviews/>
            <Feedback/>
            </motion.div>
    </>
  )
}

export default ReadMoreMain