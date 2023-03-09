import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const Navigation = (routee) => {
    navigate(routee)
    setopen(false)
  }

  return (
    <>
        <div className="h-16 lg:h-20 flex items-center justify-between border-b border-neutral-200 ">
              <div className="h-20 flex items-center lg:px-20 px-2">
                <div className="text-amber-900 text-2xl font-fancy">Cuberto</div>
              </div>  
              <div className="flex items-center lg:px-20 px-2 space-x-2 lg:space-x-10">
                <div onClick={() => Navigation('/')} className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Home</div>
                <div onClick={() => Navigation('/about')} className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">About</div>
                <div onClick={() => Navigation('/contact')} className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Contact</div>
                <div onClick={() => Navigation('/portfolio')} className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Portfolio</div>
              </div>
        </div>
    </>
  )
}

export default Navbar