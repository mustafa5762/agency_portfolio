import React from 'react'
import Marquee from "react-fast-marquee";
import Button from './Button';

function Custom() {
  return (
    <div className='mt-60 relative'>
        <Marquee speed="50" gradient={false} style={{transform:'rotate(-3deg)'}} className='bg-white text-neutral-900 font-fancy text-5xl lg:text-7xl py-10 overflow-hidden'>
                 Custom Session  /  Custom Session  /  Custom Session  / Custom Session  /  <span style={{color:'#efefef'}}>f</span>
        </Marquee>
        <Marquee speed="50" direction="right" gradient={false} className='rotate-3 bg-neutral-900 text-white font-fancy text-5xl lg:text-7xl py-10 overflow-hidden'>
                 Custom Session   /  Custom Session  /  Custom Session  / Custom Session  /  <span style={{color:'#171717'}}>f</span> 
        </Marquee>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Button>
            Get Quote
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </Button>
        </div>
    </div>
  )
}

export default Custom