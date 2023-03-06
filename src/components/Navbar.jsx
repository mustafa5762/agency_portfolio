import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [open, setopen] = useState(false);

  const navigate = useNavigate();

  const Navigation = (routee) => {
    navigate(routee)
    setopen(false)
  }

  return (
    <>
        <div className="h-20 flex items-center justify-between border-b border-neutral-200">
              <div className="border-r border-neutral-200 h-20 flex items-center lg:px-20 px-6">
                <div className="text-amber-900 text-2xl font-fancy">Cuberto</div>
              </div>  
              <div onClick={() => setopen(true)} className="border-l border-neutral-200 h-20 flex items-center lg:px-20 px-6">
                <div>
                  <div className="w-10 h-0.5 bg-amber-900 mb-1.5"></div>
                  <div className="w-10 h-0.5 bg-amber-900 mt-1.5"></div>
                </div>
              </div>
        </div>

        <AnimatePresence>{ open && <motion.div initial={{opacity:0,y:-500}} animate={{opacity:1,y:0}} exit={{opacity:0,y:500}} transition={{duration:0.6,ease:'easeInOut'}} className="fixed top-0 left-0 w-full h-screen bg-amber-100 z-50">
          <div className="flex relative">

            <div className="border-r border-neutral-200 h-screen w-3/5">
              <div className="h-full flex items-center justify-end">
                <div className='flex flex-col space-y-10 pr-10'>
                  <div onClick={() => Navigation('/')} className="flex items-center justify-end">
                    <div className="text-9xl text-amber-900 font-fancy text-right">Home</div>
                    <div className="ml-8 w-16 h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">01</div>
                  </div>
                  <div onClick={() => Navigation('/about')} className="flex items-center justify-end">
                    <div className="text-9xl text-amber-900 font-fancy text-right">About</div>
                    <div className="ml-8 w-16 h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">02</div>
                  </div>
                  <div onClick={() => Navigation('/services')} className="flex items-center justify-end">
                    <div className="text-9xl text-amber-900 font-fancy text-right">Portfolio</div>
                    <div className="ml-8 w-16 h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">03</div>
                  </div>
                  <div onClick={() => Navigation('/contact')} className="flex items-center justify-end">
                    <div className="text-9xl text-amber-900 font-fancy text-right">Contact</div>
                    <div className="ml-8 w-16 h-16 rounded-full flex justify-center items-center border border-amber-900 text-amber-900 font-fancy">04</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end p-20">
              <div>
                <div>
                  <div className="font-medium text-amber-900">Email</div>
                  <div className="font-semibold text-xl text-amber-900 mt-4 border-b border-amber-900">mail@cuberto.com</div>
                </div>
                <div className='mt-10'>
                  <div className="font-medium text-amber-900">Phone</div>
                  <div className="font-semibold text-xl text-amber-900 mt-4">0321-9407928</div>
                  <div className="font-semibold text-xl text-amber-900 mt-1">0311-4884278</div>
                </div>
                <div className='mt-10'>
                  <div className="font-medium text-amber-900">Socials</div>
                  <div className="font-semibold text-xl text-amber-900 mt-4">Insta</div>
                  <div className="font-semibold text-xl text-amber-900 mt-1">Facebook</div>
                  <div className="font-semibold text-xl text-amber-900 mt-1">Linkedin</div>
                </div>
              </div>
            </div>

            <div onClick={() => setopen(false)} className="absolute top-5 right-20 text-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </motion.div> }</AnimatePresence>
    </>
  )
}

export default Navbar