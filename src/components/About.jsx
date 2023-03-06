import React, { useLayoutEffect, useRef } from 'react'
import anime from "animejs/lib/anime.es.js";

function About() {

  const text = useRef()

  useLayoutEffect(() => {
    text.current.innerHTML = text.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
  .add({
    targets: '.letter',
    filter: 'blur(0px)',
    opacity: [0,1],
    scale: [2, 1],
    translateZ: 0,
    duration: 750,
    easing: 'easeInOutQuad',
    delay: (el, i) => 10 * i
  })
  }, [])

  return (
    <>
        <div className="mt-40 lg:mt-80 px-4 lg:px-40">
            <div ref={text} className="text-amber-900 text-3xl lg:text-5xl font-fancy lg:leading-snug overflow-hidden">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</div>
        </div>
    </>
  )
}

export default About