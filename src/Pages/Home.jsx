import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeroMain from '../components/HeroMain'
import HeroAbout from '../components/HeroAbout'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <Hero/>
    <HeroMain/>
    <HeroAbout/>
    <Footer/>
    </div>
  )
}

export default Home