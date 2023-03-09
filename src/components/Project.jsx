import React from 'react'


function Project({no,name}) {
  return (
    <div className='flex items-center py-10 lg:py-16 border-b border-amber-900'>
        <div className="w-10 lg:w-16 h-10 lg:h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">0{no}</div>
        <div className="ml-5 lg:ml-10">
          <h1 className="text-4xl lg:text-8xl font-fancy text-amber-900">{name}</h1>
          <div className="text-amber-900 text-lg lg:text-2xl font-semibold mt-2 lg:mt-4">Website</div>
        </div>
    </div>
  )
}

export default Project