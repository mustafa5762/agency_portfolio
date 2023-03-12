import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

function Navbar() {

  const [open, setopen] = useState(false)

  const clicked = () => {
    setTimeout(() => {
      setopen(false)
    }, 2000);
  }

  return (
    <>
        <div className="px-4 lg:px-20 flex items-center justify-end"> 
              <div className="menu cursor-pointer" onClick={() => setopen(!open)}>
                <div className={open ? "line-1 bg-neutral-100 line-1-active" : "line-1 bg-neutral-100"}></div>
                <div className={open ? "line-2 bg-neutral-100 line-2-active" : "line-2 bg-neutral-100"}></div>
              </div>
        </div>

        <AnimatePresence>
          { open && <motion.div initial={{top:'-100%'}} animate={{top:0}} exit={{top:'-100%'}} transition={{duration:1.4,ease:[0.76, 0, 0.24, 1]}} style={{zIndex:1200}} className="fixed top-0 left-0 w-full bg-neutral-800 h-screen">
              <div className="flex h-full">

                <div className="text-9xl w-3/5 flex items-center justify-end border-r border-neutral-700 h-full pr-10">
                  <div>
                    <div className="overflow-hidden">
                      <div className="overflow-hidden text-8xl text-neutral-100 font-fancy flex items-center space-x-5 justify-end text-right">
                        <Link className='hover-underline-animation' onClick={clicked} to="/">Home</Link>
                        <div className="w-12 h-12 border border-neutral-100 rounded-full text-2xl flex items-center justify-center">1</div>
                      </div>
                      <div  className="overflow-hidden text-8xl text-neutral-100 font-fancy flex items-center space-x-5 justify-end text-right mt-10">
                        <Link className='hover-underline-animation' onClick={clicked} to="/">About</Link>
                        <div className="w-12 h-12 border border-neutral-100 rounded-full text-2xl flex items-center justify-center">2</div>
                      </div>
                      <div className="overflow-hidden text-8xl text-neutral-100 font-fancy flex items-center space-x-5 justify-end text-right mt-10">
                        <Link className='hover-underline-animation' onClick={clicked} to="/">Contact</Link>
                        <div className="w-12 h-12 border border-neutral-100 rounded-full text-2xl flex items-center justify-center">3</div>
                      </div>
                      <div className="overflow-hidden text-8xl text-neutral-100 font-fancy flex items-center space-x-5 justify-end text-right mt-10">
                        <Link className='hover-underline-animation' onClick={clicked} to="/">Portfolio</Link>
                        <div className="w-12 h-12 border border-neutral-100 rounded-full text-2xl flex items-center justify-center">4</div>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="h-full flex items-end justify-end px-20 py-40">
                  <div>
                    <div>
                      <div className="text-neutral-400 font-medium">Email</div>
                      <div className="text-neutral-100 font-medium mt-2 text-lg border-b border-neutral-100">Contact@mustafa.com</div>
                    </div>
                    <div className='mt-10'>
                      <div className="text-neutral-400 font-medium">Phones</div>
                      <div className="text-neutral-100 font-medium mt-2 text-lg">+92 311 4884278</div>
                      <div className="text-neutral-100 font-medium mt-2 text-lg">+92 321 9407928</div>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>}
        </AnimatePresence>
    </>
  )
}

export default Navbar