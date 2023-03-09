import React from 'react'
import About from '../components/About'
import Custom from '../components/Custom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Transition from '../components/Transition'




function Home({variant,setvariant}) {
  return (
    <>
      <main>
        <Transition/>
        <Hero/>
        <div className="mt-28 lg:mt-80 lg:px-20">
          <video onMouseEnter={() => setvariant("text")} onMouseLeave={() => setvariant("simple")} autoPlay muted loop className='lg:rounded-md' src="https://d2ywvxhe0539k6.cloudfront.net/BLVR_HOMEPAGE_VIDEO_21-9.mp4"></video>
        </div>
        <About/>
        <Projects variant={variant} setvariant={setvariant} />
        <Custom/>
      </main>
    </>
  )
}

export default Home