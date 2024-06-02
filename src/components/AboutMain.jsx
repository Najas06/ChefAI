import React from 'react'
import AboutOurVision from '../assets/aboutVision.svg'
import AbooutOffer from '../assets/aboutOffer.svg'
import { motion } from 'framer-motion'
const AboutMain = () => {
    return (
        <>
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.3, duration: 0.3 }}
            className='mx-5'>
                <h1 className='text-5xl font-bold text-[#2A373E] mt-10'>Welcome to <span className='text-[#FF725E]'>ChefAI</span></h1>
                <p className='mt-5 font-light'>At <span className='text-[#FF725E] font-semibold'>ChefAI</span>, we believe that the joy of cooking should be accessible to everyone. Our mission is to transform the way you approach food preparation by combining cutting-edge artificial intelligence with the art of cooking. Whether you're a seasoned chef or a culinary novice, <span className='text-[#FF725E] font-semibold'>ChefAI</span> is here to inspire and guide you through every step of your culinary journey.</p>
                <div className='mt-10 text-white flex justify-center items-center gap-4 max-xl:flex-col'>
                    <div className='w-1/2 bg-[#2A373E] p-6 rounded-2xl h-[450px] items-center justify-center flex flex-col max-xl:w-full max-lg:h-auto'>
                        <h1 className='text-2xl font-bold text-white mb-2'>Our Vision</h1>
                        <p>Cooking should be an enjoyable and creative process, not a stressful one. With ChefAI, we envision a world where:</p>
                        <div className='my-3 mx-5 flex justify-center items-center max-sm:flex-col-reverse'>
                            <ul className='list-disc gap-2'>
                                <li><span className='font-semibold text-[#FF725E]'>Creativity in the Kitchen:</span> Everyone can explore and experiment with new recipes and cooking techniques with ease.</li>
                                <li><span className='font-semibold text-[#FF725E]'>Personalized Cooking:</span> Every meal can be tailored to individual tastes, dietary preferences, and nutritional needs.</li>
                                <li><span className='font-semibold text-[#FF725E]'>Culinary Confidence:</span> Even the most inexperienced cooks can prepare delicious, healthy meals confidently.</li>
                            </ul>
                            <img src={AboutOurVision} alt="" className='w-1/3 max-sm:w-1/2 mb-3'/>
                        </div>
                    </div>
                    <div className='w-1/2 bg-[#ff725e] p-6 rounded-2xl h-[450px] items-center justify-center flex flex-col max-xl:w-full max-lg:h-auto'>
                        <h1 className='text-2xl font-bold text-white mb-2'>What We Offer</h1>
                        <p>ChefAI provides a range of features designed to make cooking simple, fun, and accessible:</p>
                        <div className='my-3 mx-5 flex justify-center items-center max-sm:flex-col-reverse'>
                            <ul className='list-disc gap-2'>
                                <li><span className='font-semibold text-[#2a373e]'>AI-Powered Recipe Generation:</span> Just input a dish name, and our AI will generate detailed recipes, complete with ingredients and step-by-step instructions.</li>
                                <li><span className='font-semibold text-[#2a373e]'>Diverse Culinary Database:</span> Our extensive database includes recipes from various cuisines around the world, catering to all tastes and dietary requirements.</li>
                                <li><span className='font-semibold text-[#2a373e]'>User-Friendly Interface:</span> An intuitive design that makes it easy to find recipes, follow instructions, and explore new dishes.</li>
                                <li><span className='font-semibold text-[#2a373e]'>Community Feedback:</span> Share your experiences and get feedback from the ChefAI community, making cooking a collaborative and social experience.</li>
                            </ul>
                            <img src={AbooutOffer} alt="" className='w-1/3 max-sm:w-1/2 mb-3'/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutMain