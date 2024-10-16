import React from 'react'
import Header from '../components/Header'
import UserProfileMain from '../components/UserProfileMain'
import Footer from '../components/Footer'

const UserProfile = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header />
    <UserProfileMain/>
    <Footer />
    </div>
  )
}

export default UserProfile