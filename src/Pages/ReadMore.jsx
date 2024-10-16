import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReadMoreMain from '../components/ReadMoreMain'

const ReadMore = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <Header />
            <ReadMoreMain />
            <Footer />
        </div>
    )
}

export default ReadMore