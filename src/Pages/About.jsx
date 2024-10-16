import React from 'react'
import Header from '../components/Header'
import AboutMain from '../components/AboutMain'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
    <Header/>
    <AboutMain/>
    <AboutSection/>
    <Footer/>
    </div>
  )
}

export default About