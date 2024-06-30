import React, { useContext, useEffect, useState } from 'react'
import user from '../assets/user.svg'
import { dishReviews } from '../services/allAPI';
import { servelURL } from '../services/baseUrl';
import { FeedBackStatus } from '../Context/Context';
const Reviews = () => {
  const {feedBackUpdateStatus} = useContext(FeedBackStatus)
  const [dishId, setDishId] = useState("");
  const [reviews, setReviews] = useState([]);




  //console.log(dishId);
  //console.log(reviews);
  const getReviews = async () => {
    const result = await dishReviews(dishId)
    setReviews(result?.data.feedback)
  }
  useEffect(() => {
    if (sessionStorage.getItem('dishes')) {
      const dish = JSON.parse(sessionStorage.getItem('dishes'))
      setDishId(dish._id)
    }
    getReviews()
  }, [dishId,feedBackUpdateStatus])
  return (
    <>
      <div className='w-1/2 p-3 bg-[#2A373E] rounded-md max-md:w-full'>
        <h1 className='text-white text-3xl underline mb-5 text-center font-semibold'>Reviews</h1>
        {reviews ? reviews?.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((item) => (
          <div className='mx-3 border-solid my-1  border-y-2 border-x-neutral-800 p-3 text-white'>
            <div className='flex justify-end gap-2 items-center text-white'>
              <h6>{item.username}</h6>
              <img src={item.userImg?`${servelURL}/uploads/${item.userImg}`:{user}} alt=""   className='rounded-full w-10 h-10 object-cover'/>
            </div>
            <p className='text-xl'>{item.feedback}</p>
            <p className='text-xs'>{item.timestamp?.slice(0, 10)}</p>

          </div>
        ))
        :
        <h1 className='text-red-500 text-3xl underline mb-5 text-center font-semibold'>No Reviews</h1>
       }

      </div>
    </>
  )
}

export default Reviews