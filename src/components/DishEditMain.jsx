import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { servelURL } from '../services/baseUrl'
import { Toaster, toast } from 'sonner'
import { userDishUpdateAPI } from '../services/allAPI'

const DishEditMain = () => {
    const navigate = useNavigate()
    const [editDish, setEditDish] = useState({ // data store from session storage
        dishName:"",
        dishDescription:"",
        dishIngredients:[],
        dishImage:""
    })
    const [editIngred,setEditIngred] = useState("") // user input for ingredients
    const [preview, setPreview] = useState("") // preview image
    const [editImg, setEditImg] = useState("") // user input for image


    const handleClose = ()=>{
        sessionStorage.removeItem('dishEditDetails') // remove session storage
        navigate('/userProfile')
    }

    const handleUpdateDish = async(e)=>{
        e.preventDefault()
        const {dishName,dishDescription,dishIngredients,dishImage} = editDish
        if(!dishName || !dishDescription || !dishIngredients || !dishImage){
            toast.error('All fields are required')
        }
        else{
            const reqBody = new FormData()
            reqBody.append("dishname",dishName)
            reqBody.append("description",dishDescription)
            reqBody.append("ingredients",dishIngredients)
            {preview?reqBody.append("image",editImg):reqBody.append("image",dishImage)}

            const token = sessionStorage.getItem('token')
            
            if(preview){
                const reqHeader = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
                const result = await userDishUpdateAPI(editDish._id,reqBody,reqHeader)
                if(result.status == 200){
                    toast.success('Dish updated successfully')
                    sessionStorage.removeItem('dishEditDetails')
                    sessionStorage.setItem('dishEditDetails',JSON.stringify(result.data))
                    setTimeout(()=>{
                        navigate('/userProfile')
                    },2000)
                    // console.log(result);
                }else{
                    toast.error('Something went wrong')
                    // console.log(result);
                }
            }
            else{
                const reqHeader = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                const result = await userDishUpdateAPI(editDish._id,reqBody,reqHeader)
                if(result.status == 200){
                    toast.success('Dish updated successfully')
                    sessionStorage.removeItem('dishEditDetails')
                    sessionStorage.setItem('dishEditDetails',JSON.stringify(result.data))
                    setTimeout(()=>{
                        navigate('/userProfile')
                    },2000)
                    // console.log(result);
                }else{
                    toast.error('Something went wrong')
                    // console.log(result);
                }
            }
        }

    }
    useEffect(()=>{
        if(sessionStorage.getItem('dishEditDetails')){ // data store from session storage when page load
            const dish = JSON.parse(sessionStorage.getItem('dishEditDetails'))
            setEditDish({
                _id:dish._id,
                dishName:dish.dishname,
                dishDescription:dish.description,
                dishImage:dish.image
            })
            setEditIngred(dish.ingredients)
        }
    },[])
    useEffect(()=>{
        editImg?setPreview(URL.createObjectURL(editImg)):setPreview("") // preview image when user select image
    },[editImg])
    useEffect(()=>{
        if(editIngred){
            setEditDish({...editDish,dishIngredients:editIngred.split(',')})
        }
    },[editIngred])

    // console.log(editDish);
    return (
        <>
            <motion.div
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -10, opacity: 0 }}
             transition={{delay: 0.3, duration: 0.3 }}
            className='mx-6 my-10 flex justify-between'>
                <h1 className='text-4xl  font-semibold  text-[#ff725e]'>Dish Edit</h1>
                <button className='bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-1 shadow-lg flex items-center gap-1 ' onClick={()=>handleClose()}><IoArrowBack /> Back</button>
            </motion.div>
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{delay: 0.4, duration: 0.4 }}
            className='bg-[#2A373E] mx-6 rounded-xl my-10 flex justify-center items-center max-md:flex-col'>
                <div className='p-5 flex flex-col w-1/2 items-center'>
                    <img src={preview?preview:`${servelURL}/uploads/${editDish.dishImage}`} alt="" className='w-1/2 rounded-2xl max-md:w-full' />
                </div>
                <div className='p-5 flex flex-col w-1/3 max-md:w-full'>
                    <div className='bg-[#d9d9d9] px-2 py-5 rounded-xl'>
                        <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100" onChange={(e)=>{setEditImg(e.target.files[0])}}/>

                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Name" value={editDish.dishName} onChange={(e)=>{setEditDish({...editDish,dishName:e.target.value})}}/>

                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Dish Ingredients" value={editIngred} onChange={(e)=>{setEditIngred(e.target.value)}}/>

                        <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]' placeholder='Dish Instructions' value={editDish.dishDescription} onChange={(e)=>{setEditDish({...editDish,dishDescription:e.target.value})}} />

                        
                       <div className='mt-5 flex justify-center'>
                       <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]' onClick={(e)=>handleUpdateDish(e)}>Update</button>
                       </div>
                    </div>
                </div>
            </motion.div>
            <Toaster richColors position='top-center' />
        </>
    )
}

export default DishEditMain