import React from 'react'
import Button from './Button'



function About() {
  return (
    <>
        <div className="mt-40 lg:mt-80 px-2 lg:px-20">
            <div className="lg:w-4/6 text-amber-900 text-2xl lg:text-5xl font-fancy lg:leading-snug overflow-hidden">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</div>
            <div className="mt-10">
              <Button>
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </Button>
            </div>
        </div>
    </>
  )
}

export default About