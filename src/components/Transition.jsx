import React from 'react'
import {motion} from 'framer-motion'

function Transition() {
  return (
    <motion.div initial={{top:0}} animate={{top:'-100%',transition:{delay:2,duration:1.3,ease:[0.76, 0, 0.24, 1]}}} exit={{top:0,transition:{duration:1.3,ease:[0.76, 0, 0.24, 1]}}}  className="fixed w-full h-screen bottom-0 left-0 bg-amber-200 z-50 flex items-center justify-center">
      <div className="font-fancy text-8xl text-amber-900">Cuberto</div>
    </motion.div>
  )
}

export default Transition