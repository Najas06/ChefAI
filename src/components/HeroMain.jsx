import React from 'react'
import firstIcon from '../assets/firstHomeIcon.svg'
import seconfIcon from '../assets/secondHomeIcon.svg'
import thirdIcon from '../assets/thirdHomeIcon.svg'
import downWave from '../assets/downWave.svg'
import { motion } from 'framer-motion'
const HeroMain = () => {
    return (
        <div className='bg-[#FF725E] m-[-1px] overflow-x-hidden'>
            <div className=' bg-[#FF725E] outline-none'>
                <motion.div
                initial={{opacity:0,x:-100}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.3,duration:0.5}}
                whileInView={{opacity:1}}
                className='flex justify-center max-sm:flex-col'>
                    <h1 className='w-1/2 mt-12 text-center  px-5 font-extralight text-white max-sm:w-full max-sm:mt-5 max-sm:mb-5'><span className='text-white font-semibold text-2xl'>Personalized Recipe Recommendations:</span>
                        <br />
                        Explore a curated selection of recipes tailored to your tastes and dietary preferences.
                    </h1>
                    <img src={firstIcon} alt="" width={'30%'} className='max-sm:w-full px-5' />
                </motion.div>
                <motion.div
                initial={{opacity:0,x:100}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.4,duration:0.5}}
                whileInView={{opacity:1}}
                className='flex justify-center mt-10 items-center max-sm:flex-col-reverse'>
                    <img src={seconfIcon} alt="" width={'23%'} className='max-sm:w-80 px-5' />
                    <h1 className='w-1/2 mt-12 text-center  px-5 font-extralight text-white max-sm:w-full max-sm:mt-5 max-sm:mb-5'><span className='text-white font-semibold text-2xl'>Step-by-Step Cooking Instructions:</span>
                        <br />
                        Follow detailed instructions with smart tips to create delicious meals effortlessly.
                    </h1>
                </motion.div>
                <motion.div
                initial={{opacity:0,x:-100}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.5,duration:0.6}}
                whileInView={{opacity:1}}
                className='flex justify-center mt-10 items-center max-sm:flex-col'>
                    <h1 className='w-1/2 mt-12 text-center  px-5 font-extralight text-white max-sm:w-full max-sm:mt-5 max-sm:mb-5'><span className='text-white font-semibold text-2xl'>Save and Organize Recipes:</span>
                        <br />
                        Keep track of your favorite recipes and access them anytime, anywhere.
                    </h1>
                    <img src={thirdIcon} alt="" width={'23%'} className='max-sm:w-80 px-5' />
                </motion.div>
                <h1 className='text-center mt-10 mx-8 text-white text-2xl max-sm:text-xl'><span className='text-[#263238] font-bold '>ChefAI</span> makes cooking enjoyable and hassle-free.Let's elevate your culinary experience together!
                </h1>
                <img src={downWave} alt=""  className='w-full max-w-[1920px] object-contain absolute -mt-5 -z-10'/>
            </div>
        </div>
    )
}

export default HeroMain