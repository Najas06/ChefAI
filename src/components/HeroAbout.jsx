import React from 'react'
import homeAboutImg from '../assets/homeAbout.svg'
const HeroAbout = () => {
  return (
    <>
    <div className='mt-52 max-sm:mt-20 flex max-sm:flex-col items-center justify-center mb-10 '>
        <div className='w-1/2'>
            <h1 className='text-2xl font-bold text-center'>About us</h1>
            <p className='text-center mt-5 px-5 font-light max-sm:px-0'><span className='text-[#FF725E] font-semibold'>ChefAI</span> was born out of our passion for both culinary arts and cutting-edge technology. Our mission is to revolutionize the way people approach cooking by harnessing the power of artificial intelligence. At <span className='text-[#FF725E] font-semibold'>ChefAI</span>, we believe that everyone deserves access to delicious and nutritious meals tailored to their preferences and dietary needs.</p>
            <p className='text-center mt-5 px-5 font-light max-sm:px-0'>Our team of experienced chefs, AI engineers, and food enthusiasts is dedicated to creating an innovative platform that simplifies cooking and inspires culinary creativity. Whether you're a seasoned chef or a kitchen novice, <span className='text-[#FF725E] font-semibold'>ChefAI</span> is here to guide you through every step of your culinary journey.</p>
            <p className='text-center mt-5 px-5 font-light max-sm:px-0'>Join us as we explore the intersection of food and AI, and let <span className='text-[#FF725E] font-semibold'>ChefAI</span> empower you to discover new flavors, master recipes, and unleash your inner chef.</p>
        </div>
        <img src={homeAboutImg} alt=""  className='w-1/3' />
    </div>
    </>
  )
}

export default HeroAbout