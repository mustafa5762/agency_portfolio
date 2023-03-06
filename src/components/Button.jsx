import React from 'react'

function Button(props) {
  return (
    <>
       <div className="relative">
        <div className="hover:scale-110 transition shadow-xl h-40 w-40 rounded-full bg-amber-500 flex justify-center items-center text-white font-bold">{props.children}</div>
       </div>
    </>
  )
}

export default Button