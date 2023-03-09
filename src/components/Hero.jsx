import anime from "animejs/lib/anime.es.js"
import React, { useLayoutEffect, useRef } from 'react'
import Marquee from "react-fast-marquee";


function Hero() {

  /* const arrow = useRef();

  useLayoutEffect(() => {
    anime.timeline({loop: true})
    .add({
      targets: arrow.current,
      opacity:[0,1],
      translateY: [-40,0],
      easing: "easeOutExpo",
    })
    .add({
      targets: arrow.current,
      opacity:[1,0],
      translateY: [0,40],
      easing: "easeInOutQuad",
    })
  }, []) */

  
  

  return (
    <>
        <div className="mt-20 lg:mt-40">
          <div data-scroll className="text-amber-600 text-3xl lg:text-5xl font-fancy text-center lg:leading-snug">We are Cuberto - an Earth <br /> based software house.</div>
          <Marquee speed="40" gradient={false} className='text-amber-900 font-fancy text-5xl py-4 lg:text-8xl overflow-hidden mt-6'>
                 3D  /  Branding  /  Design  / Development  /  SEO  /  <span style={{color:'#fffbeb'}}>f</span>
          </Marquee>
          <Marquee speed="40" direction="right" gradient={false} className='text-amber-900 font-fancy text-5xl py-4 lg:text-8xl overflow-hidden lg:mt-4'>
                 3D  /  Branding  /  Design  / Development  /  SEO  /  <span style={{color:'#fffbeb'}}>f</span> 
          </Marquee>
        </div>
        {/*<div className="hidden lg:flex absolute left-10 bottom-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-amber-900 mr-1">
                <svg ref={arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                </svg>
              </div>
              <div className="text-amber-900 font-bold text-lg">Scroll <br /> Down</div>
            </div>
          </div>
  </div> */}
    </>
  )
}

export default Hero