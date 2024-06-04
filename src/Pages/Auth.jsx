import React from 'react'
import Header from '../components/Header'
import AuthMain from '../components/AuthMain'
import Footer from '../components/Footer'
const Auth = ({register}) => {
  return (
    <>
    <Header/>
    <AuthMain register={register}/>
    <Footer/>
    </>
  )
}

export default Auth