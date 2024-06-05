import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import user from '../assets/user.svg'
import { motion } from 'framer-motion'

const ProfileEditMain = () => {
    return (
        <>
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.2, duration: 0.2 }}
            className='my-10 mx-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl text-[#ff725e] font-bold'>Edit Profile</h1>
                    <Link to={'/userprofile'}><button className='bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-1 shadow-lg flex items-center gap-1 max-sm:hidden'><IoArrowBack /> Back</button></Link>
                </div>

                <motion.div 
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{delay: 0.3, duration: 0.3 }}
                className='mt-3 bg-[#2a373e] rounded-xl '>
                    <div className='flex justify-center items-center p-10 gap-20 max-md:flex-col-reverse max-md:gap-4'>
                        <div className='w-1/2 gap-3 flex-col flex max-md:w-full'>
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Full Name" />
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Username" />
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Email" />
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="password" />
                            <div className='flex justify-center'>
                                <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]'>Submit</button>
                            </div>
                        </div>
                        <div className='w-1/2 flex justify-center gap-3 items-center max-md:w-full '>
                        <img src={user} alt="" className='w-1/2' />
                        <input type="file" class="block w-full text-sm text-slate-100
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100"/>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default ProfileEditMain