import React from 'react'

import Slider from "react-slick";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:true
      };
  return (
    <div className='h-[80vh] w-screen overflow-x-hidden  overflow-y-hidden  '>
        <Slider {...settings} >
      <div className=' h-[80vh]  text-3xl bg-black backdrop-brightness-50"'>
        <img  className="backdrop-brightness-50 h-[80vh] object-cover w-screen" src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
      <div className=' h-[80vh] text-3xl bg-black'>
        <img  className="backdrop-brightness-50 h-[80vh] object-cover w-screen" src='https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
      <div className=' h-[80vh] text-3xl bg-black'>
        <img  className="backdrop-brightness-50 h-[80vh] object-cover w-screen" src='https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
     
    </Slider>
    </div>
  )
}

export default Hero
