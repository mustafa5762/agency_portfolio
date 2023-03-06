import React from 'react'
import About from '../components/About'
import Custom from '../components/Custom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'


function Home() {
  return (
    <>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Custom/>
        <Testimonials/>
        <div className="mt-40 px-60">
          <video autoPlay muted loop className='shadow-xl rounded-md' src="https://d2ywvxhe0539k6.cloudfront.net/BLVR_HOMEPAGE_VIDEO_21-9.mp4"></video>
        </div>
      </main>
    </>
  )
}

export default Home