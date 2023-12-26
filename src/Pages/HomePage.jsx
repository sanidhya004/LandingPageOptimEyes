import React from 'react'
import ESG from '../Components/ESG'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Second from '../Components/Second'
import V1 from '../Components/V1'
import WDWS from '../Components/WDWS'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden' >
      <Hero/>
      <WDWS/>
      <V1/>
      <Second/>
       <ESG/>
      <Footer/>
    </div>
  )
}

export default HomePage
