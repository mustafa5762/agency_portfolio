import React from 'react'


function Button(props) {
  return (
    <>
        <div className="cursor-pointer bg-amber-500 w-40 h-40 rounded-full font-bold text-white flex justify-center items-center hvr-rectangle-in">{props.children}</div>
    </>
  )
}

export default Button