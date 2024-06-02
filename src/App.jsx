import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Intro from './Pages/Intro'


function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/home' element={<Intro />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Post/>}/>
      </Routes>
    </>
  )
}

export default App
