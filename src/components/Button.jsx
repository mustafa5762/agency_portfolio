import React from 'react'


function Button(props) {
  return (
    <>
        <div style={{zIndex:100}} data-cursor-magnetic className="transition-colors transition-300 hover:bg-neutral-900 bg-amber-500 cursor-pointer w-28 lg:w-40 h-28 lg:h-40 rounded-full font-bold text-white flex justify-center items-center shadow-xl text-sm lg:text-base">{props.children}</div>
    </>
  )
}

export default Button