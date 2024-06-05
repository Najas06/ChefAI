import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const UserDishCard = () => {
  return (
    <>
    <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.5, duration: 0.5 }}
            className='grid grid-cols-3 gap-5 mt-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2'>
                <div className='bg-[#E9E9E9] p-3 rounded-3xl text-[#2A373E]'>
                    <div className='flex justify-end items-center gap-2'>
                    <h6>User</h6>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" width={30} />
                    </div>
                    <h3 className='text-xl font-bold text-center'>Dish Name</h3>
                    <div className='flex justify-center items-center gap-3 mt-6'>
                        <img src="https://eu.ooni.com/cdn/shop/articles/Ooni_Diablo_resized.jpg?height=300&v=1599659718&width=300" alt="" className='w-1/2 rounded-lg' />
                        <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti debitis quidem libero, laborum cupiditate ullam sunt deleniti nostrum, iusto labore dignissimos veritatis fuga, quam doloribus accusamus hic? Iste, explicabo!
                        </p>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <Link to={'/dishEdit'}><button className='bg-[#FF725E] transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg'>Edit</button></Link>
                    <button className='bg-red-800 transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-red-900 mt-6 shadow-lg'>Delete</button>
                    </div>
                </div>
                <div className='bg-[#E9E9E9] p-3 rounded-3xl text-[#2A373E]'>
                    <div className='flex justify-end items-center gap-2'>
                    <h6>User</h6>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" width={30} />
                    </div>
                    <h3 className='text-xl font-bold text-center'>Dish Name</h3>
                    <div className='flex justify-center items-center gap-3 mt-6'>
                        <img src="https://eu.ooni.com/cdn/shop/articles/Ooni_Diablo_resized.jpg?height=300&v=1599659718&width=300" alt="" className='w-1/2 rounded-lg' />
                        <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti debitis quidem libero, laborum cupiditate ullam sunt deleniti nostrum, iusto labore dignissimos veritatis fuga, quam doloribus accusamus hic? Iste, explicabo!
                        </p>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <button className='bg-[#FF725E] transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg'>Edit</button>
                    <button className='bg-red-800 transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-red-900 mt-6 shadow-lg'>Delete</button>
                    </div>
                </div>
                <div className='bg-[#E9E9E9] p-3 rounded-3xl text-[#2A373E]'>
                    <div className='flex justify-end items-center gap-2'>
                    <h6>User</h6>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" width={30} />
                    </div>
                    <h3 className='text-xl font-bold text-center'>Dish Name</h3>
                    <div className='flex justify-center items-center gap-3 mt-6'>
                        <img src="https://eu.ooni.com/cdn/shop/articles/Ooni_Diablo_resized.jpg?height=300&v=1599659718&width=300" alt="" className='w-1/2 rounded-lg' />
                        <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti debitis quidem libero, laborum cupiditate ullam sunt deleniti nostrum, iusto labore dignissimos veritatis fuga, quam doloribus accusamus hic? Iste, explicabo!
                        </p>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <button className='bg-[#FF725E] transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg'>Edit</button>
                    <button className='bg-red-800 transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-red-900 mt-6 shadow-lg'>Delete</button>
                    </div>
                </div>
              
            </motion.div>
    </>
  )
}

export default UserDishCard