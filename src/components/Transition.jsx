import React from 'react'
import {motion} from 'framer-motion'

function Transition() {
  return (
    <motion.div initial={{height:'100%'}} animate={{height:0,transition:{delay:2,duration:1.5,ease:[0.76, 0, 0.24, 1]}}} exit={{height:'100%',transition:{duration:1.5,ease:[0.76, 0, 0.24, 1]}}}  className="fixed w-full h-screen bottom-0 left-0 bg-amber-100 z-50 flex items-center justify-center"></motion.div>
  )
}

export default Transition