import React from 'react'
import {motion} from 'framer-motion'

function Transition() {
  return (
    <motion.div style={{zIndex:99999}} initial={{top:0}} animate={{top:'-100%',transition:{delay:2,duration:1.3,ease:[0.76, 0, 0.24, 1]}}} exit={{top:0,transition:{duration:1.3,ease:[0.76, 0, 0.24, 1]}}}  className="fixed w-full h-screen bottom-0 left-0 bg-amber-200 z-50 flex items-center justify-center">
      <svg width="271" height="62" viewBox="0 0 271 62" stroke="#78350F" xmlns="http://www.w3.org/2000/svg">
        <motion.path initial={{pathLength:0,fill:'#FDE68A',scale:0.9}} animate={{pathLength:1,fill:'#78350F',scale:1,transition:{duration:2.5,ease:[0.76, 0, 0.24, 1]}}} exit={{opacity:0,transition:{duration:0.01}}} d="M45.24 43.44C44.2 55.6 34.44 59.68 27.96 59.68C19.88 59.68 10.44 56.4 10.44 31.84C10.44 7.68 19.64 4 27.96 4C34.44 4 43 7.04 45.24 20.24H46.28L47.24 7.84C42.2 3.76 36.2 2.96 27.96 2.96C11.4 2.96 0.2 13.84 0.2 31.84C0.2 49.68 11.4 60.72 27.96 60.72C36.52 60.72 41.32 59.68 47.24 55.76L46.28 43.44H45.24ZM90.9919 58.08C87.6319 57.68 86.9119 57.2 86.9119 53.36V22.32L76.1919 23.84V24.8C80.1119 25.04 79.9519 25.6 79.9519 30.48V50.64C78.5119 54 75.6319 56.8 71.6319 56.8C66.9919 56.8 63.3919 54.48 63.3919 48.4V22.32L52.0319 23.84V24.8C56.5919 25.12 56.5119 25.52 56.5119 30.64V48.64C56.5119 58.64 62.1919 60.72 67.9519 60.72C73.3119 60.72 78.5119 56.88 79.9519 52.64V59.44C79.9519 59.44 79.9519 61.04 81.8719 60.64L90.9919 59.12V58.08ZM124.949 42.96C124.949 55.68 119.749 59.68 114.389 59.68C109.029 59.68 104.629 55.76 104.629 47.44V35.36C104.629 29.2 107.989 24.96 113.829 24.96C120.789 24.96 124.949 30.4 124.949 42.96ZM133.349 41.84C133.349 30.88 127.189 22.32 116.549 22.32C112.469 22.32 107.029 24.4 104.629 28.72V0.959997L93.5888 3.12V4.16C96.9488 4.8 97.6688 5.92 97.6688 8.64V59.6C97.6688 60.88 101.269 58.96 103.429 56.72C106.069 59.2 109.909 60.72 114.629 60.72C125.269 60.72 133.349 54.16 133.349 41.84ZM146.853 39.76C146.853 29.68 151.973 23.36 156.533 23.36C160.373 23.36 165.573 28.08 165.573 39.76H146.853ZM170.213 50.16C168.773 54.08 163.093 57.04 158.293 56.56C151.973 55.92 147.173 51.6 146.853 40.8H172.453C172.453 28.24 166.053 22.32 156.773 22.32C146.853 22.32 139.333 30 139.333 41.84C139.333 52.4 146.453 60.72 156.453 60.72C165.893 60.72 170.293 54.32 171.173 50.56L170.213 50.16ZM198.63 22.56C195.43 22.96 190.87 25.28 187.91 30.72V22.32L176.87 24.64V25.6C180.15 26.48 180.87 27.6 180.87 30.4V52.56C180.87 56.72 180.71 58.08 177.67 58.96V60H191.19V58.96C188.31 58.24 187.91 57.04 187.91 52.56V32.64C190.39 27.28 195.75 25.36 195.51 26.72C195.27 27.76 195.67 28.88 196.39 29.76C198.07 31.68 200.79 31.84 202.63 30.32C204.55 28.72 204.79 26 203.19 24.08C202.07 22.8 200.07 22.4 198.63 22.56ZM228.411 53.44C227.771 55.12 225.851 56.8 223.531 56.8C219.771 56.8 217.451 54.64 217.451 48.24V24.08H226.731L226.971 23.04H217.451V10.56L210.491 11.68V23.04H206.251L206.411 24.08H210.491V48.48C210.491 58.16 214.011 60.72 219.851 60.72C224.491 60.72 228.091 57.36 229.211 53.84L228.411 53.44ZM262.043 41.52C262.043 56 257.963 59.68 251.883 59.68C245.723 59.68 241.563 56 241.563 41.52C241.563 27.04 245.723 23.36 251.883 23.36C257.963 23.36 262.043 27.04 262.043 41.52ZM270.283 41.52C270.283 30.96 264.123 22.32 251.883 22.32C239.723 22.32 233.403 30.96 233.403 41.52C233.403 52 239.723 60.72 251.883 60.72C264.123 60.72 270.283 52 270.283 41.52Z"/>
      </svg>
    </motion.div>
  )
}

export default Transition