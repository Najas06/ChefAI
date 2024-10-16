import React from 'react'
import Header from '../components/Header'
import PostMain from '../components/PostMain'
import PostCards from '../components/PostCards'
import Footer from '../components/Footer'

const Post = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <PostMain/>
    <PostCards/>
    <Footer/>
    </div>
  )
}

export default Post