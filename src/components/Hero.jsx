import React from 'react'
import Marquee from "react-fast-marquee";


function Hero() {
  return (
    <>
        <div className="h-screen flex flex-col justify-center">
          <div className="font-fancy text-3xl lg:text-5xl text-center text-amber-300 tracking-wider leading-snug lg:tracking-wider lg:leading-snug">Mustafa Zahid - a London <br /> based creative developer.</div>
          <Marquee speed="50" gradient={false} className='text-neutral-900 dark:font-light dark:text-neutral-100 font-fancy text-6xl tracking-wide uppercase py-3 lg:py-4 lg:text-9xl mt-6'>
                   experienced developer  - experienced developer  -  experienced developer -  <span className='text-white dark:text-neutral-900'>f</span>
          </Marquee>
          <Marquee speed="50" direction="right" gradient={false} className='text-neutral-900 dark:font-light dark:text-neutral-100 font-fancy text-6xl tracking-wide uppercase py-3 lg:py-4 lg:text-9xl lg:mt-4'>
                   experienced developer  - experienced developer  -  experienced developer  -  <span className='text-white dark:text-neutral-900'>f</span> 
          </Marquee>
        </div> 
    </>
  )
}

export default Hero