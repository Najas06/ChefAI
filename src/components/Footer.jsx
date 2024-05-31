import React from 'react'
import Logo from '../assets/Logo.svg'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <div className='bg-[#FF725E] w-full'>
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
                        <a href="">Contact us</a>
                        <a href="">Email:chefai@gmail.com</a>
                        <a href="">Ph: +123 456 789</a>
                    </div>
                    <div className='w-1/4 text-white flex flex-col gap-2 max-sm:mb-5'>
                        <h3 className='font-bold underline'>Quick Links</h3>
                        <a href="">Home</a>
                        <a href="">Post</a>
                        <a href="">About us</a>
                    </div>
                    <div className='w-1/4 text-white flex flex-col gap-2 items-center max-sm:items-start max-sm:mb-5'>
                        <h3 className='font-bold underline'>Follow us</h3>
                        <a href=""><FaInstagram className='text-2xl' /></a>
                        <a href=""><FaFacebookSquare className='text-2xl' /></a>
                        <a href=""><FaXTwitter className='text-2xl' /></a>
                    </div>
                    <div className='w-1/4 text-white flex flex-col gap-2 items-center max-sm:w-full'>
                        <h3 className='font-bold underline'>Subscribe us</h3>
                        <input type="email" placeholder='Enter your email' className='bg-[#D9D9D9] w-full h-[40px] rounded-lg outline-none text-center text-[#2A373E]' />
                        <button className='bg-[#2A373E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#212c31]'>Subscribe</button>
                    </div>
                    <p className='text-[#fff] text-center my-5'>&copy; 2024 ChefAI. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer