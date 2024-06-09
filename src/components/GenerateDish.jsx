import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GenerateDish = ({ generateDishDetails }) => {
    // Extract ingredients and measurements
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = generateDishDetails[`strIngredient${i}`]; // finding the ingredients
        const measure = generateDishDetails[`strMeasure${i}`]; // finding the measurements
        if (ingredient && ingredient.trim()) { // checking if the ingredient and measure are not empty
            ingredients.push(`${measure} ${ingredient}`.trim()); // pushing the ingredients to the ingredients array    
        }
    }
    return (
        <>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className='bg-[#d9d9d9] mx-20 p-5 mt-10 rounded-2xl flex justify-center items-center gap-16 max-lg:flex-col-reverse max-sm:mx-6 max-md:gap-4  '>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className='w-1/2 max-lg:w-full'
                    >
                    <h1 className='text-lg underline'>Generate Dish Details Powered By <span className='text-green-700 font-semibold'>EDAMAM</span></h1>
                    <br />
                    <h1 className='text-2xl'>Dish Name: <span className='text-green-700 font-semibold'>{generateDishDetails.strMeal}</span></h1>
                    <br />
                    <h1 className='text-lg'>Dish Ingredients:</h1>
                    <ol className='list-disc mx-10'>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ol>
                    <br />
                    <h1 className='text-lg'>Dish Instructions: <br /> {generateDishDetails.strInstructions} <Link to={`${generateDishDetails.strYoutube}` } target="_blank" className='text-[#FF725E]'>Click here to View</Link></h1>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }} >
                    <img src={generateDishDetails.strMealThumb} alt={generateDishDetails.strMeal} className='w-full rounded-2xl' />
                </motion.div>
            </motion.div>
        </>
    );
};

export default GenerateDish;
