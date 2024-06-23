import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { userDeleteDishAPI, userDishAPI } from '../services/allAPI'
import { Toaster, toast } from 'sonner'
import { servelURL } from '../services/baseUrl'

const UserDishCard = () => {
    const navigate = useNavigate()
    const [dishes, setDishes] = useState([])
    const [userDetails, setUserDetails] = useState({})
    const token = sessionStorage.getItem('token')

    const getDishes = async () => {
        if (token) {
            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const result = await userDishAPI(reqHeader)
            if (result.status == 200) {
                setDishes(result.data)
            }
            else {
                console.log(result)
            }
        }
        else {
            toast.error('Please login first')
        }
    }
    console.log(dishes);

    const editDish = (item) => {
        sessionStorage.setItem('dishEditDetails', JSON.stringify(item))
        navigate('/dishEdit')
    }

    const deleteDish = async (id) => {
       
        const token = sessionStorage.getItem('token')
        if (token) {
            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const result = await userDeleteDishAPI(id, reqHeader)
            if (result.status == 200) {
                toast.success('Dish deleted successfully')
                getDishes()
            }
            else {
                console.log(result)
            }
        }
        else {
            toast.error('Please login first')
        }

    }
    useEffect(() => {
        getDishes()
        setUserDetails(JSON.parse(sessionStorage.getItem('exisitingUser')))
    }, [])
    return (

        <>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='grid grid-cols-3 gap-5 mt-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2'>
                {dishes ? dishes.map((item) => (
                    <div className='bg-[#E9E9E9] p-3 rounded-3xl text-[#2A373E]'>
                        <div className='flex justify-end items-center gap-2'>
                            <h6>{userDetails.fullname}</h6>
                            <img src={`${servelURL}/uploads/${userDetails.profileImg
                                }`} alt="" width={30} className='rounded-full object-cover h-[30px]' />
                        </div>
                        <h3 className='text-xl font-bold text-center'>{item.dishname}</h3>
                        <div className='flex justify-center items-center gap-3 mt-6 h-[300px]'>
                            <img src={`${servelURL}/uploads/${item.image}`} alt="" className='w-1/2 rounded-lg' />
                            <p className='text-center text-sm'>{item.description.split(' ').slice(0, 40).join(' ')}
                            </p>
                        </div>
                        <div className='flex justify-center gap-3'>
                            <button className='bg-[#FF725E] transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-6 shadow-lg' onClick={() => editDish(item)}>Edit</button>
                            <button className='bg-red-800 transition duration-150 text-white px-4 py-1 rounded-xl font-semibold hover:bg-red-900 mt-6 shadow-lg' onClick={() => deleteDish(item._id)}>Delete</button>
                        </div>
                    </div>
                ))
                    :
                    <p className='text-center text-2xl text-[#2A373E]'>There is no dish 😒</p>
                }


            </motion.div>
            <Toaster richColors position='top-center' />
        </>
    )
}

export default UserDishCard