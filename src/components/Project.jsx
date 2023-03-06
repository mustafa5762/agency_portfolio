import React from 'react'


function Project({no,name}) {
  return (
    <div className='flex items-center py-16 border-b border-amber-900'>
        <div className="w-16 h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">0{no}</div>
        <div className="ml-10">
          <h1 className="text-8xl font-fancy text-amber-900">{name}</h1>
          <div className="text-amber-900 text-2xl font-semibold mt-4">Website</div>
        </div>
    </div>
  )
}

export default Project