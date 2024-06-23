import React from 'react'
import user from '../assets/user.svg'
const Reviews = () => {
  return (
    <>
      <div className='w-1/2 p-3 bg-[#2A373E] rounded-md max-md:w-full'>
      <h1 className='text-white text-3xl underline mb-5 text-center font-semibold'>Reviews</h1>
        <div className='mx-3 border-solid my-1  border-y-2 border-x-neutral-800 p-3 text-white'>
          <div className='flex justify-end gap-2 items-center text-white'>
            <h6>Najas Nazar</h6>
            <img src={user} alt="" width={20} height={20}/>
          </div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-3 border-solid my-1  border-y-2 border-x-neutral-800 p-3 text-white'>
          <div className='flex justify-end gap-2 items-center text-white'>
            <h6>Najas Nazar</h6>
            <img src={user} alt="" width={20} height={20}/>
          </div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-3 border-solid my-1  border-y-2 border-x-neutral-800 p-3 text-white'>
          <div className='flex justify-end gap-2 items-center text-white'>
            <h6>Najas Nazar</h6>
            <img src={user} alt="" width={20} height={20}/>
          </div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-3 border-solid my-1  border-y-2 border-x-neutral-800 p-3 text-white'>
          <div className='flex justify-end gap-2 items-center text-white'>
            <h6>Najas Nazar</h6>
            <img src={user} alt="" width={20} height={20}/>
          </div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-3 border-solid my-1  border-y-2 border-x-neutral-800 p-3 text-white'>
          <div className='flex justify-end gap-2 items-center text-white'>
            <h6>Najas Nazar</h6>
            <img src={user} alt="" width={20} height={20}/>
          </div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  )
}

export default Reviews