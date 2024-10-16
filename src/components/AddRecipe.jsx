import React from 'react'
import Header from '../components/Header'
import AddRecipeMain from './AddRecipeMain'
import Footer from './Footer'
const AddRecipe = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <AddRecipeMain/>
    <Footer/>
    </div>
  )
}

export default AddRecipe