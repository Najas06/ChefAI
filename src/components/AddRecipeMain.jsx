import React, { useEffect, useState } from 'react'
import createPost from '../assets/createPost.svg'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'
import { addDishAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'
const AddRecipeMain = () => {
    const navigate = useNavigate()
    // storing dish details in a state
    const [dishDetails,setDetails]=useState({
        dishImg:"",
        dishTitle:"",
        dishIngred:[],
        dishDescription:""
    })
    
    // storing dish ingredients in a state
    const [dishIngredients,setDishIngredients]=useState("")

    //get token and existingUser from session storage
    const token = sessionStorage.getItem('token')
    const existingUser = sessionStorage.getItem('exisitingUser')

    const handleAddDish = async(e)=>{
        e.preventDefault()
        const {dishImg,dishTitle,dishDescription,dishIngred} = dishDetails
        if(!dishImg || !dishTitle || !dishDescription || !dishIngredients){ // dishIngredients is second state
            toast.warning('All fields are required')  
        }
        else{
            const reqBody = new FormData()
            reqBody.append("dishname",dishTitle)
            reqBody.append("ingredients",dishIngred)
            reqBody.append("description",dishDescription)
            reqBody.append("image",dishImg)

            if(token){
                const reqHeader = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
                const result = await addDishAPI(reqBody,reqHeader)
                if(result.status == 200){
                    toast.success('Dish added successfully')
                    setDetails({
                        dishImg:"",
                        dishTitle:"",
                        dishIngred:[],
                        dishDescription:""
                    })
                    setTimeout(()=>{
                        navigate('/userProfile')
                    },2000)
                }
                else{
                    toast.error(result.message)
                }
            }
            else{
                toast.error('Please login first')
            }
        }

    }
   
    


    useEffect(()=>{
        //below code means if dishIngredients is not empty then setDetails and if any  value is added to dishIngredients then setDetails using split
        if(dishIngredients!==""){setDetails({...dishDetails,dishIngred:dishIngredients.split(',')})}   
    },[dishIngredients])

    console.log(dishDetails);
    return (
        <>
            <motion.div 
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -10, opacity: 0 }}
             transition={{delay: 0.3, duration: 0.3 }}
            className='my-10 mx-6'>
                <h1 className='text-5xl text-[#ff725e] font-bold'>Create Post</h1>
                <p className='mt-3'>Have a delicious recipe to share? Write it down here and inspire others in the <span className='text-[#ff725e] font-semibold '>ChefAI</span> community!</p>
                <motion.div
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{delay: 0.4, duration: 0.4 }}
                className='flex items-center justify-center gap-16 mt-10 max-sm:flex-col max-md:flex-col max-lg:flex-col'>
                    <div className='bg-[#d9d9d9] w-1/4 flex flex-col px-6 justify-center py-6 rounded-2xl  items-center gap-3  max-lg:w-full'>
                        <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100" onChange={(e)=>setDetails({...dishDetails,dishImg:e.target.files[0]})}/>

                        <input type="text" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Name" onChange={(e)=>setDetails({...dishDetails,dishTitle:e.target.value})} />

                        <input type="text" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Ingredients" onChange={(e)=>setDishIngredients(e.target.value)} />

                        <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]' placeholder='Dish Instructions' onChange={(e)=>setDetails({...dishDetails,dishDescription:e.target.value})}/>

                        <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]' onClick={(e)=>handleAddDish(e)}>Submit</button>
                    </div>
                    <img src={createPost} alt="" />
                </motion.div>
            </motion.div>
            <Toaster richColors position='top-center' />
        </>
    )
}

export default AddRecipeMain