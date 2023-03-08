import React from 'react'
import About from '../components/About'
import Custom from '../components/Custom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'


function Home() {
  return (
    <>
      <main>
        <Hero/>
        <div className="mt-80 px-20">
          <video data-cursor-text="Play" autoPlay muted loop className='rounded-md' src="https://d2ywvxhe0539k6.cloudfront.net/BLVR_HOMEPAGE_VIDEO_21-9.mp4"></video>
        </div>
        <About/>
        <Projects/>
        <Custom/>
      </main>
    </>
  )
}

export default Home