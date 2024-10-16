import React from 'react'
import Header from '../components/Header'
import ProfileEditMain from '../components/ProfileEditMain'
import Footer from '../components/Footer'


const ProfileEdit = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <ProfileEditMain/>
    <Footer/>
    </div>
  )
}

export default ProfileEdit