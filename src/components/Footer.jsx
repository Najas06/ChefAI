import React from 'react'
import Logo from '../assets/Logo.svg'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <div className='bg-[#FF725E] '>
                <div className='flex justify-between items-center px-4'>
                    <div className='flex justify-center py-10 '>
                        <img src={Logo} alt="logo" width={80} />
                        <h1 className='text-3xl font-bold text-[#fff] mt-8'>ChefAI</h1>
                    </div>
                    <div>
                        <h4 className='text-[#fff]'>1/6/2024</h4>
                    </div>
                </div>
                <div className='px-6 flex max-sm:flex-col'>
                    <div className='w-1/4 flex-col flex text-white gap-2 max-sm:mb-5'>
                        <div className='mt-6 max-sm:mt-0'></div>
                        <a >Contact us</a>
                        <a >Email:chefai@gmail.com</a>
                        <a >Ph: +123 456 789</a>
                    </div>
                    <div className='w-1/4 text-white flex flex-col gap-2 max-sm:mb-5'>
                        <h3 className='font-bold underline'>Quick Links</h3>
                        <a >Home</a>
                        <a >Post</a>
                        <a >About us</a>
                    </div>
                    <div className='w-1/4 text-white flex flex-col gap-2 items-center max-sm:items-start max-sm:mb-5'>
                        <h3 className='font-bold underline'>Follow us</h3>
                        <a ><FaInstagram className='text-2xl' /></a>
                        <a ><FaFacebookSquare className='text-2xl' /></a>
                        <a ><FaXTwitter className='text-2xl' /></a>
                    </div>
                    <div className='w-1/4 text-white flex flex-col gap-2 items-center max-sm:w-full'>
                        <h3 className='font-bold underline'>Subscribe us</h3>
                        <input type="email" placeholder='Enter your email' className='bg-[#D9D9D9] w-full h-[40px] rounded-lg outline-none text-center text-[#2A373E]' />
                        <button className='bg-[#2A373E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#212c31]'>Subscribe</button>
                    </div>
                </div>
            <p className='text-[#fff] text-center mt-8'>&copy; 2024 <span className='text-[#2a373e] font-semibold'>ChefAI</span>. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer