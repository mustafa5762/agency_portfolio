import React from 'react'
import quote from '../assets/quote.png'

function Testimonials() {
  return (
    <div className='mt-60'>
        <div className="font-bold text-amber-900 text-xl text-center">( Testimonials )</div>
        <div className="flex justify-center">
          <img className='mt-6' src="https://img.icons8.com/carbon-copy/100/525252/quote-left.png"/>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="w-4/6 font-fancy text-5xl text-center text-amber-900 leading-snug">
            Thanks to Cuberto, I achieved my goals with exceptional service and expertise. I highly recommend them to anyone looking for top-notch guidance and satisfaction.
          </div>
        </div>
        <div className="text-xl text-center mt-8 font-bold text-amber-900 opacity-50">Jessica Smith</div>
    </div>
  )
}

export default Testimonials