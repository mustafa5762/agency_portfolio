import React from 'react'
import About from '../components/About'
import Custom from '../components/Custom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Transition from '../components/Transition'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';





function Home() {
  return (
    <>
      <Cursor isGelly={true} cursorBackgrounColor="#f59e0b" cursorSize={12} animationEase="Power3.easeOut" animationDuration={0.4} />
      <main>
        <Transition/>
        <Hero/>
        <div className="mt-28 lg:mt-80 lg:px-20">
          <video data-cursor-size="80px" data-cursor-text="Play!" autoPlay muted loop className='lg:rounded-md' src="https://d2ywvxhe0539k6.cloudfront.net/BLVR_HOMEPAGE_VIDEO_21-9.mp4"></video>
        </div>
        <About/>
        <Projects />
        <Custom/>
      </main>
    </>
  )
}

export default Home