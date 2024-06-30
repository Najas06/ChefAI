import React from 'react'
import { motion } from 'framer-motion'
import {  useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import { servelURL } from '../services/baseUrl'
const PostDishCards = ({allDishes}) => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')
    const readMore = (item) =>{
        token?navigate('/post-ReadMore'):toast.error('Please login first')
        sessionStorage.setItem('dishes',JSON.stringify(item))
    }
    return (
        <>
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.5, duration: 0.5 }}
            className='grid grid-cols-3 gap-5 my-10 mx-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2'>
                {allDishes? allDishes.map((item,index)=>(
                    <div className='bg-[#E9E9E9] p-3 rounded-3xl text-[#2A373E]'>
                    <h3 className='text-xl font-bold text-center mt-3'>{item.dishname}</h3>
                    <div className='flex justify-center items-center gap-3 mt-6 h-[250px]'>
                        <img src={`${servelURL}/uploads/${item.image}`} alt="" className='w-3/4 rounded-lg h-3/4 max-md:w-1/2'/>
                        <p className='text-center text-sm'>{item.description.split(' ').slice(0, 30).join(' ')}...
                        </p>
                    </div>
                    <div className='flex justify-center'>
                    <button className='bg-[#FF725E] transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg' onClick={()=>readMore(item)}>Read More</button>
                    </div>
                </div>
                ))
            :
            <></>    
            }
              
            </motion.div>
            <Toaster richColors position='top-center' />
        </>
    )
}

export default PostDishCards