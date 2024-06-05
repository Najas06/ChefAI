import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Intro from './Pages/Intro'
import About from './Pages/About'
import UserProfile from './Pages/UserProfile'
import AddRecipe from './components/AddRecipe'
import Auth from './Pages/Auth'
import ReadMore from './Pages/ReadMore'
import ProfileEdit from './Pages/ProfileEdit'
import DishEdit from './Pages/DishEdit'


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
        <Route path='/post-ReadMore' element={<ReadMore/>}/>
        <Route path='/profile-edit' element={<ProfileEdit/>}/>
        <Route path='/dishEdit' element={<DishEdit/>}/>
      </Routes>
    </>
  )
}

export default App
