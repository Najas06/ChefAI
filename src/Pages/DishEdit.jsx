import React from 'react'
import Header from '../components/Header'
import DishEditMain from '../components/DishEditMain'
import Footer from '../components/Footer'

const DishEdit = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <DishEditMain/>
    <Footer/>
    </div>
  )
}

export default DishEdit