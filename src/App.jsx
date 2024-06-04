import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Intro from './Pages/Intro'
import About from './Pages/About'
import UserProfile from './Pages/UserProfile'
import AddRecipe from './components/AddRecipe'
import Auth from './Pages/Auth'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Post/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
        <Route path='/addrecipe' element={<AddRecipe/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register />}/>
      </Routes>
    </>
  )
}

export default App
