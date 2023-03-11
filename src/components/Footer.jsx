import React from 'react'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div>
        <motion.footer initial={{backgroundColor: '#FFFBEB'}} whileInView={{backgroundColor: '#FEF3C7'}} transition={{duration:1,delay:.5}} className="mt-40 h-screen w-full flex items-center justify-center">
            <div className='text-center'>
              <div className="text-6xl lg:text-9xl text-amber-900 font-fancy">Have An Idea?</div>
              <div className="flex items-center justify-center">
                <div className="text-xl lg:text-3xl text-amber-900 font-bold mt-10">Make it Happen</div>
                <div className="ml-4 mt-9">
                  <svg width="50" height="30" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.4995 22.6064L0.393602 22.6064M45.2147 44.5654C45.2147 38.9871 50.1389 22.6064 69.6064 22.6064C50.1389 22.6064 45.2147 6.22565 45.2147 0.647348" stroke="#78350F" stroke-width="3"/>
                  </svg>
                </div>
              </div>
            </div>
        </motion.footer>
    </div>
  )
}

export default Footer

/*#FEF3C7 */