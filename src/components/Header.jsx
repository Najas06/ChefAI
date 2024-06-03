import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import user from '../assets/user.svg'
import { IoMenu } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Header = () => {
    //toggle state
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (

        <>
            <header className='mx-5 my-3 flex justify-between items-center'>
                <Link to={'/home'}>
                    <div className='flex items-center'>
                        <img src={Logo} alt="logo" width={80} />
                        <h1 className='text-3xl font-bold text-[#2A373E] mt-5'>ChefAI</h1>
                    </div>
                </Link>
                <div className='flex gap-6 items-center max-sm:hidden max-md:hidden mt-3'>
                    <Link to={'/home'}><p className='transition duration-150 text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Home</p></Link>
                    <Link to={'/posts'}><p className='transition duration-150 text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Post</p></Link>
                    <Link to={'/about'}><p className='transition duration-150 text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>About us</p></Link>
                    <button className='transition duration-150 bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2A373E]'>Sign in</button>
                    <button className='transition duration-150 bg-[#263238] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#FF725E]'>Log out</button>
                    <Link to={'/userProfile'}><img src={user} alt="" className='w-10'/></Link>  
                </div>
                <div onClick={toggle} className='md:hidden'>
                    {!isOpen ?
                        <IoMenu className='text-3xl mt-3 cursor-pointer' />
                        :
                        <div className='bg-white w-100'>
                            <RxCross1 className='text-3xl mt-3  absolute right-5 top-7 z-10 cursor-pointer' />
                            <motion.div
                                initial={{ x: '200%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                className='transition duration-300  flex-col flex text-end items-end gap-4 px-6 py-6 mt-10 absolute left-0 top-50 right-0 bg-[#dddd] rounded '>
                                <Link to={'/home'}>
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.7,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }}
                                        className='transition duration-150 text-xl text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Home</motion.a>
                                </Link>
                                <Link to={'/posts'}>
                                <motion.a
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.8,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                    className='transition duration-150 text-xl text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Post</motion.a>
                                </Link>
                                <Link to={'/about'}>
                                <motion.a
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.9,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                    className='transition duration-150 text-xl text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>About us</motion.a>
                                </Link>

                                <Link to={'/userProfile'}>
                                <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className='flex items-center gap-2 justify-center'>
                                    <img src={user} alt="" className='w-10' />
                                    <p className='transition duration-150 text-xl text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Profile</p>
                                </motion.div>
                                </Link>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 1.1,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                    className='transition duration-150 bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2A373E] max-w-[100px]'>Sign in</motion.button>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 1.2,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                    className='transition duration-150 bg-[#263238] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#FF725E] max-w-[100px]'>Log out</motion.button>

                            </motion.div>

                        </div>}
                </div>
            </header>
        </>
    )
}

export default Header