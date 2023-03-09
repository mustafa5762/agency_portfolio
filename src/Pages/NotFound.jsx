import React from 'react'
import Marquee from 'react-fast-marquee'

function NotFound() {
  return (
    <div className='h-screen flex items-center text-center'>
      <Marquee speed="50" gradient={false} className='border-b border-neutral-200 text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden mt-6'>
            404 Not Found  /  404 Not Found  /  404 Not Found  / 404 Not Found  /  404 Not Found  /  <span style={{color:'#fffbeb'}}>f</span>
      </Marquee>
    </div>
  )
}

export default NotFound