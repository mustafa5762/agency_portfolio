import React from 'react'
import Marquee from 'react-fast-marquee'
import Button from '../components/Button'
import Transition from '../components/Transition'

function Contact() {
  return (
    <div>
        <Transition/>
        <Marquee speed="50" gradient={false} className='border-b border-neutral-200 text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden mt-6'>
            Contact  /  Contact  /  Contact  / Contact  /  Contact  /  <span style={{color:'#fffbeb'}}>f</span>
        </Marquee>
        <div className="px-4 lg:px-20 mt-20">
            <div className="py-6 flex flex-col lg:flex-row lg:items-center space-y-4 justify-between border-b border-neutral-200">
                <div className="font-bold text-amber-900 text-lg lg:text-xl">( Email )</div>
                <div className="text-amber-900 font-fancy text-3xl lg:text-6xl border-b border-amber-900">mail@cuberto.com</div>
            </div>
            <div className="py-6 flex flex-col lg:flex-row lg:items-center space-y-4 justify-between border-b border-neutral-200">
                <div className="font-bold text-amber-900 text-lg lg:text-xl">( Phones )</div>
                <div>
                    <div className="text-amber-900 font-fancy text-3xl lg:text-6xl">+92 311 4884278</div>
                    <div className="text-amber-900 font-fancy text-3xl lg:text-6xl">+92 311 4884278</div>
                </div>
            </div>
            <div className="py-6 flex flex-col lg:flex-row lg:items-center space-y-4 justify-between border-b border-neutral-200">
                <div className="font-bold text-amber-900 text-lg lg:text-xl">( Email )</div>
                <div className="text-amber-900 font-fancy text-3xl lg:text-6xl border-b border-amber-900">mail@cuberto.com</div>
            </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center relative">
            <Marquee speed="50" gradient={false} className='text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden'>
                Get in Touch  /  Get in Touch  /  Get in Touch  / Get in Touch  /  Get in Touch  /  <span style={{color:'#fffbeb'}}>f</span>
            </Marquee>
            <Marquee speed="50" gradient={false} direction="right" className='text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden'>
                Get in Touch  /  Get in Touch  /  Get in Touch  / Get in Touch  /  Get in Touch  /  <span style={{color:'#fffbeb'}}>f</span>
            </Marquee>
            <Marquee speed="50" gradient={false} className='text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden'>
                Get in Touch  /  Get in Touch  /  Get in Touch  / Get in Touch  /  Get in Touch  /  <span style={{color:'#fffbeb'}}>f</span>
            </Marquee>

            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-50">
                <div>
                    <div className="bg-amber-100 p-20 z-50 shadow-lg rounded-md">
                        <div className="font-fancy text-5xl text-amber-900 text-center">Send Message</div>
                        <form className='mt-10 flex flex-col space-y-10'>
                            <input className='hover:px-3 transition-all focus:px-3 transition-300 bg-transparent focus:outline-none border-b border-amber-900 w-96 text-amber-900 py-2 capitalize placeholder-amber-900 placeholder-opacity-50 font-medium' type="text" placeholder='Your Name' />
                            <input className='hover:px-3 transition-all focus:px-3 bg-transparent focus:outline-none border-b border-amber-900 w-96 text-amber-900 py-2 placeholder-amber-900 placeholder-opacity-50 font-medium' type="text" placeholder='Your Email' />
                            <textarea className='hover:px-3 transition-all focus:px-3 bg-transparent focus:outline-none border-b border-amber-900 w-96 text-amber-900 py-2 capitalize placeholder-amber-900 placeholder-opacity-50 font-medium' type="text" placeholder='Your Message' />
                            <div className="flex justify-center">
                            <Button>
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Button>
                            </div>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact