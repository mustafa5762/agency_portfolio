import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className="h-16 lg:h-20 flex items-center justify-between border-b border-neutral-200 ">
              <div className="h-20 flex items-center lg:px-20 px-2">
                <div className="text-amber-900 text-2xl font-fancy">Cuberto</div>
              </div>  
              <div className="flex items-center lg:px-20 px-2 space-x-2 lg:space-x-10">
                <Link to="/" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Home</Link>
                <Link to="/about" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">About</Link>
                <Link to="/contact" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Contact</Link>
                <Link to="/" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Portfolio</Link>
              </div>
        </div>
    </>
  )
}

export default Navbar