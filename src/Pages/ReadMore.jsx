import React from 'react'
import Header from '../components/Header'
import { IoArrowBack } from 'react-icons/io5'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const ReadMore = () => {
    return (
        <>
            <Header />
           <motion.div 
           initial={{ y: 10, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: -10, opacity: 0 }}
           transition={{delay: 0.2, duration: 0.2 }}
           className='flex justify-end items-center  mx-6 '>
           <Link to={'/posts'}><button className='bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg flex items-center gap-1'><IoArrowBack /> Back</button></Link>
           </motion.div>
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.3, duration: 0.3 }}
            className='bg-[#E9E9E9] mx-6 my-10 rounded-lg'>
                <div className='p-5 flex gap-10 max-md:flex-col items-center'>
                    <img src="https://eu.ooni.com/cdn/shop/articles/Ooni_Diablo_resized.jpg?height=300&v=1599659718&width=300" alt="" className='w-1/3 rounded-2xl max-md:w-1/2' />
                    <div>
                        <h1 className='text-4xl font-semibold text-[#2A373E] underline'>Dish Name</h1>
                        <p className='mt-3'><span className='font-semibold'>Recipe Ingredient</span>: milk,water,flour </p>
                        <p className='mt-3'><span className='font-semibold'>Instruction</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio sed excepturi voluptate porro quasi rem fugit perspiciatis. Atque sint explicabo provident error iusto earum laborum optio consequuntur vitae quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis ipsa suscipit, doloremque, non amet quam fugit blanditiis accusantium porro libero placeat nisi vitae a iste natus rerum, tempora repellat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sed obcaecati esse, nobis eius recusandae laborum exercitationem ipsam architecto similique ex quae inventore facilis harum neque odit sapiente. Delectus, saepe.</p>
                        

                    </div>
                </div>
            </motion.div>
            <Footer/>
        </>
    )
}

export default ReadMore