import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeroMain from '../components/HeroMain'
import HeroAbout from '../components/HeroAbout'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <HeroMain/>
    <HeroAbout/>
    {/* <Footer/> */}
    </>
  )
}

export default Home