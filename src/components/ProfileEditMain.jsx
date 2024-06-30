import React, { useContext, useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import user from '../assets/user.svg'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'
import { servelURL } from '../services/baseUrl'
import { profileUpdateAPI } from '../services/allAPI'
import { ProfileAddUpdateStatus } from '../Context/Context'

const ProfileEditMain = () => {
    const {setProfileUpdateStatus} = useContext(ProfileAddUpdateStatus)
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({ // store user details in a state from session storage
        fullname: "",
        username: "",
        email: "",
        profileImg: "",
        password: "",
    })
    const [exisitingProfile, setExisitingProfile] = useState("") // store profile image from session storage
    const [preview, setPreview] = useState('')

    // //console.log(token);
    const handleUpdate = async (e) => {
        e.preventDefault()
        const { fullname, username, email, password } = userDetails
        if (!fullname || !username || !email || !password) {
            toast.warning("All fields are required")
        }
        else {
            const reqBody = new FormData() // create reqBody send to server
            reqBody.append("fullname", fullname)
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            preview ? reqBody.append("profileImg",userDetails.profileImg) : reqBody.append("profileImg", exisitingProfile)

            // //console.log(token)
            const token = sessionStorage.getItem('token')
            if (preview) {
                const reqHeader = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
                const result = await profileUpdateAPI(reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success("Profile Updated")
                    // //console.log(result)
                    setProfileUpdateStatus(true)
                    sessionStorage.setItem('exisitingUser', JSON.stringify(result.data))
                    setTimeout(() => {
                        navigate('/userprofile')
                    }, 2500)
                }
                else {
                    toast.error('Something went wrong')
                }
            }
            else {
                // //console.log(token)
                const reqHeader = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                const result = await profileUpdateAPI(reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success("Profile Updated")
                    sessionStorage.setItem('exisitingUser', JSON.stringify(result.data))
                    setTimeout(() => {
                        navigate('/userprofile')
                    }, 2500)
                }
                else {
                    toast.error('Something went wrong')
                }
            }
        }
    }

    useEffect(() => { // page reload session storage data store to userDetails
        if (sessionStorage.getItem('exisitingUser')) {
            const user = JSON.parse(sessionStorage.getItem('exisitingUser'))
            setUserDetails({
                ...userDetails,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                password: user.password
            })
            setExisitingProfile(user.profileImg)
        }
    }, [])

    useEffect(() => {
        userDetails.profileImg ? setPreview(URL.createObjectURL(userDetails.profileImg)) : setPreview('')
    }, [userDetails.profileImg])
    return (
        <>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className='my-10 mx-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl text-[#ff725e] font-bold'>Edit Profile</h1>
                    <Link to={'/userprofile'}><button className='bg-[#FF725E] text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#e65b49] mt-1 shadow-lg flex items-center gap-1 max-sm:hidden'><IoArrowBack /> Back</button></Link>
                </div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className='mt-3 bg-[#2a373e] rounded-xl '>
                    <div className='flex justify-center items-center p-10 gap-20 max-md:flex-col-reverse max-md:gap-4'>
                        <div className='w-1/2 gap-3 flex-col flex max-md:w-full'>
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Full Name" value={userDetails.fullname} onChange={(e) => setUserDetails({ ...userDetails, fullname: e.target.value })} />
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Username" value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="Email" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#ff725e] focus:ring-[#ff725e] block w-full rounded-md sm:text-sm focus:ring-1 text-[#2a373e]" placeholder="password" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                            <div className='flex justify-center'>
                                <button className='transition duration-150 bg-[#ff725e] text-white px-4 py-1 rounded-xl font-semibold hover:text-[#2a373e]' onClick={(e) => handleUpdate(e)}>Update</button>
                            </div>
                        </div>
                        <div className='w-1/2 flex justify-center gap-3 items-center max-md:w-full '>
                            <img src={preview ? preview : `${servelURL}/uploads/${exisitingProfile}`} alt="" className='w-[300px] h-[200px] object-cover rounded-full -mt-3 max-sm:w-[100px] max-sm:h-[70px]' />
                            <input type="file" class="block w-full text-sm text-slate-100
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-[#ff725e]
                        hover:file:bg-violet-100" onChange={(e) => setUserDetails({ ...userDetails, profileImg: e.target.files[0] })} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <Toaster richColors position='top-center' />
        </>
    )
}

export default ProfileEditMain