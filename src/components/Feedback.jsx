import React, { useContext, useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner';
import { addReview } from '../services/allAPI';
import { FeedBackStatus } from '../Context/Context';

const Feedback = ({dish}) => {
  const {setFeedBackUpdateStatus} = useContext(FeedBackStatus)
  const [feedBack, setFeedBack] = useState({
    username:"",
    feedback:"",
    userImg:""
  })
  //console.log(dish);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // //console.log(feedBack)
    if(feedBack.feedback == ""){
      toast.warning("Please Enter Your Feedback")
    }
    else{
      const result = await addReview(dish,feedBack)
      if(result.status == 200){
        toast.success("Feedback Added Successfully")
        setFeedBackUpdateStatus(true)
        setFeedBack({
          username:"",
          feedback:"",
          userImg:""
        })
      }
      else{
        toast.error(result.response.data)
      }
    }
  }

  //console.log(feedBack);

  useEffect(()=>{
    if(sessionStorage.getItem('exisitingUser')){
      const exisitingUser = JSON.parse(sessionStorage.getItem('exisitingUser'))
      setFeedBack({
        username:exisitingUser.username,
        feedback:"",
        userImg:exisitingUser.profileImg
      })
    }
  },[])
  return (
    <>
      <div className='w-1/2 max-md:w-full'>
        <h1 className='text-5xl font-bold text-[#2A373E] text-center underline'>FeedBack </h1>
        <form class="mx-auto">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." onChange={(e)=>setFeedBack({...feedBack,feedback:e.target.value})} value={feedBack.feedback}></textarea>
        </form>
        <div className='flex justify-center my-5'>
          <button className='text-[#fff] bg-[#ff725e] hover:text-[#2a373e] transition duration-150  font-semibold rounded-lg px-3 py-2 flex items-center gap-1' onClick={(e)=>handleSubmit(e)} >Submit</button>
        </div>
      </div>
      <Toaster richColors position='top-center' />
    </>
  )
}

export default Feedback