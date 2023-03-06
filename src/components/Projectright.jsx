import React from 'react'


function Projectright({no,name}) {
  return (
    <div className='flex justify-end'>
        
        <div className='w-3/6'>
          <div className="flex ml-20 mtm">
            <div className="text-amber-900 text-7xl font-fancy">0</div>
            <div className="text-amber-900 text-7xl font-fancy z-50">{no}</div>
          </div>
           <div className="overflow-hidden">
            <img data-scroll data-scroll-speed="-1" className='' src="https://images.prismic.io/folio2022/be864048-85bd-4827-bf38-59d45e8bf584_Screenshot+2023-02-02+at+12.34.48.webp?auto=compress,format" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Projectright