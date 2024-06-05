import React from 'react'
import { BiPen } from 'react-icons/bi'
import { FaBowlFood } from 'react-icons/fa6'
import UserDishCard from './UserDishCard'
import userWave from '../assets/profilewave.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const UserProfileMain = () => {
  return (
    <>
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{delay: 0.3, duration: 0.3 }}
    className='mt-10 mx-6'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-5xl text-[#ff725e] font-bold'>My Profile</h1>
          <div className='flex justify-center items-center gap-2 max-md:hidden max-sm:hidden'>
            <Link to={"/profile-edit"}><button className='text-[#fff] bg-[#2a373e] hover:text-[#ff725e] transition duration-150  font-semibold rounded-lg px-3 py-2 flex items-center gap-1'>Edit Profile <BiPen/></button></Link>
          <Link to={"/addrecipe"}><button className='text-[#fff] bg-[#ff725e] hover:text-[#2a373e] transition duration-150 font-semibold  rounded-lg px-3 py-2 flex items-center gap-1'>Add Recipe <FaBowlFood /></button></Link>
          </div>
        </div>
        <p className='text-[#2a373e] mt-3'>Welcome to your personalized profile page. Share your exceptional recipes and inspire others with the power of your dishes  </p>
        <div className='flex justify-center items-center gap-2 mt-5 md:hidden'>
            <Link to={"/profile-edit"}><button className='text-[#fff] bg-[#2a373e] hover:text-[#ff725e] transition duration-150  font-semibold rounded-lg px-3 py-2 flex items-center gap-1'>Edit Profile <BiPen/></button></Link>
            <Link to={"/addrecipe"} ><button className='text-[#fff] bg-[#ff725e] hover:text-[#2a373e] transition duration-150 font-semibold  rounded-lg px-3 py-2 flex items-center gap-1'>Add Recipe <FaBowlFood /></button></Link>
          </div>
      </div>
      <UserDishCard/>
    </motion.div>
      <img src={userWave} alt="" className='mt-10 w-full -mb-3 max-sm:w-fit'/>
    </>
  )
}

export default UserProfileMain