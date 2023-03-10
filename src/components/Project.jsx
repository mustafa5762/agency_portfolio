import React from 'react'
import {motion} from 'framer-motion'


function Project({no,name,img}) {
  return (
    <div className='pt-10 lg:pt-16 relative'>
        <div className="flex justify-between items-center mb-10 lg:mb-16">
          <div className="flex items-center">
            <div className="w-10 lg:w-16 h-10 lg:h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">0{no}</div>
            <div className="ml-5 lg:ml-10">
              <motion.h1 initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:1,ease:[0.61, 1, 0.88, 1]}} className="text-4xl lg:text-8xl font-fancy text-amber-900">{name}</motion.h1>
              <div className="text-amber-900 text-lg lg:text-2xl font-semibold mt-2 lg:mt-4">Website</div>
            </div>
          </div>
          <div className="text-amber-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 lg:w-12 h-6 lg:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
        <motion.div initial={{width:0}} whileInView={{width:'100%'}} viewport={{ once: true }} transition={{duration:2,ease:[0.87, 0, 0.13, 1]}} className="h-px bg-amber-900"></motion.div>
    </div>
  )
}

export default Project