import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Intro from './Pages/Intro'
import About from './Pages/About'
import UserProfile from './Pages/UserProfile'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Post/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
      </Routes>
    </>
  )
}

export default App
