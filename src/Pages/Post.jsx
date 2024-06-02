import React from 'react'
import Header from '../components/Header'
import PostMain from '../components/PostMain'

const Post = () => {
  return (
    <div>
      {Header && <Header />}
      {PostMain && <PostMain />}
    </div>
  )
}

export default Post