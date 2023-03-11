import React from 'react'
import Marquee from "react-fast-marquee";


function Hero() {
  return (
    <>
        <div className="mt-28 lg:mt-40">
          <div data-scroll className="text-amber-600 text-3xl lg:text-5xl font-fancy text-center lg:leading-snug">We are Cuberto - a London <br /> based software house.</div>
          <Marquee speed="40" gradient={false} className='text-amber-900 font-fancy text-5xl py-3 lg:py-4 lg:text-8xl overflow-hidden mt-6'>
                 3D  /  Branding  /  Design  / Development  /  SEO  /  <span style={{color:'#fffbeb'}}>f</span>
          </Marquee>
          <Marquee speed="40" direction="right" gradient={false} className='text-amber-900 font-fancy text-5xl py-3 lg:py-4 lg:text-8xl overflow-hidden lg:mt-4'>
                 3D  /  Branding  /  Design  / Development  /  SEO  /  <span style={{color:'#fffbeb'}}>f</span> 
          </Marquee>
        </div> 
    </>
  )
}

export default Hero