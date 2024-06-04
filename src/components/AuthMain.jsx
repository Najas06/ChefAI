import React from 'react'
import Auth from '../assets/Auth.svg'
import AuthRegister from '../assets/Auth_register.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'  
const AuthMain = ({ register }) => {
    return (
        <>
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.3, duration: 0.3 }}
            className='bg-[#FF725E] rounded-lg  mx-6 my-10 '>
                <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{delay: 0.4, duration: 0.4 }}
                className='flex justify-center gap-16 items-center p-6 max-sm:flex-col'>
                    {!register ? <img src={Auth} alt="" width={'30%'} className='max-sm:w-1/2'/> : <img src={AuthRegister} alt="" width={'30%'} className='max-sm:w-1/2'/>}
                    <div className='bg-[#d9d9d9] w-1/2 flex flex-col px-6 justify-center py-6 rounded-2xl  items-center gap-3  max-lg:w-full shadow-xl'>
                        {register ? <h1 className='text-3xl font-semibold text-center'>Sign Up</h1> : <h1 className='text-3xl font-semibold text-center'>Sign In</h1>}

                        {register ? <p className='text-center'>Create an account to share your recipes with others</p> : <p className='text-center'>Log in to share your recipes with others</p>}

                        {register && <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Full Name" />}

                        <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Username" />

                        {register && <input type="email" name='email' class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Email" />}

                        {register && <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100"/>}

                        {register ? <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="password" /> : <input type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="password" />}

                        {register && <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Re-Enter password" />}



                        {register ? <div className='items-center flex flex-col gap-3 mt-3'>
                            <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]'>Register</button>
                            <p>Already have an account? <Link to={'/login'}><span className='text-[#ff725e] font-semibold underline'>Login</span></Link></p>
                        </div>
                            :
                            <div className='items-center flex flex-col gap-3 mt-3'>
                                <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]'>Login</button>
                                <p>don't have an account? <Link to={'/register'}><span className='text-[#ff725e] font-semibold underline'>Register</span></Link></p>
                            </div>
                        }

                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default AuthMain