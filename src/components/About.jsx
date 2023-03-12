import React from 'react'
import {motion} from 'framer-motion'



function About() {
  return (
    <>
        <div className="mt-40 lg:mt-80 px-4 lg:px-20">
            <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:1.2,ease:[0.61, 1, 0.88, 1]}} className="lg:w-4/6 text-neutral-900 dark:text-neutral-100 tracking-wider text-3xl lg:text-5xl font-fancy leading-normal lg:leading-normal overflow-hidden">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</motion.div>
        </div>
    </>
  )
}

export default About