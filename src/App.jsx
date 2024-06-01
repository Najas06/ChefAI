import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Post from './Pages/Post'


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Post/>}/>
      </Routes>
    </>
  )
}

export default App
