import React from 'react'
import Marquee from 'react-fast-marquee'

function About() {
  return (
    <div>
        <Marquee speed="50" gradient={false} className='border-b border-neutral-200 text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden mt-6'>
            About  /  About  /  About  / About  /  About  / About  / <span style={{color:'#fffbeb'}}>f</span>
        </Marquee>
    </div>
  )
}

export default About