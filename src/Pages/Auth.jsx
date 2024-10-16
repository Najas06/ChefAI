import React from 'react'
import Header from '../components/Header'
import AuthMain from '../components/AuthMain'
import Footer from '../components/Footer'
const Auth = ({register}) => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <AuthMain register={register}/>
    <Footer/>
    </div>
  )
}

export default Auth