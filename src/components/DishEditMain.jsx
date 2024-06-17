import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { servelURL } from '../services/baseUrl'

const DishEditMain = () => {
    const navigate = useNavigate()
    const [editDish, setEditDish] = useState({
        dishName:"",
        dishDescription:"",
        dishIngredients:[],
        dishImage:""
    })
    const [editIngred,setEditIngred] = useState("")
    const [preview, setPreview] = useState("")
    const [editImg, setEditImg] = useState("")


    const handleClose = ()=>{
        sessionStorage.removeItem('dishEditDetails')
        navigate('/userProfile')
    }
    useEffect(()=>{
        if(sessionStorage.getItem('dishEditDetails')){
            const dish = JSON.parse(sessionStorage.getItem('dishEditDetails'))
            setEditDish({
                dishName:dish.dishname,
                dishDescription:dish.description,
                dishImage:dish.image
            })
            setEditIngred(dish.ingredients)
        }
    },[])
    useEffect(()=>{
        editImg?setPreview(URL.createObjectURL(editImg)):setPreview("")
    },[editImg])
    useEffect(()=>{
        if(editIngred){
            setEditDish({...editDish,dishIngredients:editIngred.split(',')})
        }
    },[editIngred])

    console.log(editDish);
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
                       <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]'>Submit</button>
                       </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default DishEditMain