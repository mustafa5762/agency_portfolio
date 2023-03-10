import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

function Navbar() {

  const [open, setopen] = useState(false)
  return (
    <>
        <div className="h-16 lg:h-20 px-4 lg:px-20 flex items-center justify-between border-b border-neutral-200 ">
              <div className="h-20 flex items-center">
                <div className="text-amber-900 text-2xl font-fancy">Cuberto</div>
              </div>  
              <div className="hidden lg:flex items-center space-x-2 lg:space-x-10">
                <Link to="/" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Home</Link>
                <Link to="/about" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">About</Link>
                <Link to="/contact" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Contact</Link>
                <Link to="/" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Portfolio</Link>
              </div>
              <div onClick={() => setopen(!open)} className="flex lg:hidden items-center text-amber-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </div>
        </div>

        <AnimatePresence>
          { open && <motion.div initial={{left:'-50%'}} animate={{left:0}} exit={{left:'-50%'}} transition={{duration:1,ease:[0.76, 0, 0.24, 1]}} style={{zIndex:1200}} className="fixed top-0 left-0 w-3/6 bg-amber-100 h-screen shadow-xl flex flex-col justify-center items-center">
              <div className='flex flex-col space-y-3'>
                <Link onClick={() => setopen(false)} to="/" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Home</Link>
                <Link onClick={() => setopen(false)} to="/about" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">About</Link>
                <Link onClick={() => setopen(false)} to="/contact" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Contact</Link>
                <Link onClick={() => setopen(false)} to="/" className="hover-underline-animation cursor-pointer text-amber-900 font-medium text-lg tracking-wide">Portfolio</Link>
              </div>
          </motion.div>}
        </AnimatePresence>
    </>
  )
}

export default Navbar