import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { IoMenu } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
  return (
    <>
    <header className='mx-5 my-3 flex justify-between items-center'>
        <div className='flex items-center'>
            <img src={Logo} alt="logo" width={80} />
            <h1 className='text-3xl font-bold text-[#2A373E] mt-5'>ChefAI</h1>
        </div>
        <div className='flex gap-6 items-center max-sm:hidden mt-3'>
            <a href="" className='transition duration-150 text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Home</a>
            <a href="" className='transition duration-150 text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>Post</a>
            <a href="" className='transition duration-150 text-[#2A373E] font-semibold hover:text-[#FF725E] hover:ease-out hover:duration-300'>About us</a>
            <button className='transition duration-150 bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2A373E]'>Sign in</button>
            <button className='transition duration-150 bg-[#263238] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#FF725E]'>Log out</button>
        </div>
        <div onClick={toggle} className='sm:hidden'>
            {!isOpen ? 
            <IoMenu className='text-3xl mt-3 ' />
            :
             <div className='bg-orange-600'>
                <RxCross1 className='text-3xl mt-3'/>

            </div>}
        </div>
    </header>
    </>
  )
}

export default Header