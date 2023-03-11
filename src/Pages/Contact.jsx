import React from 'react'
import Marquee from 'react-fast-marquee'
import Button from '../components/Button'
import Transition from '../components/Transition'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css'

function Contact() {
  return (
    <div>
        <Cursor isGelly={true} cursorBackgrounColor="#f59e0b" cursorSize={12} animationEase="Power3.easeOut" animationDuration={0.4} />

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
                <div className="font-bold text-amber-900 text-lg lg:text-xl">( Socials )</div>
                
                <div className="flex items-center space-x-10">
                    <div data-cursor-magnetic className="hover:bg-amber-500 hover:text-white transition-colors transition-300 hover:border-0 text-amber-900 w-20 h-20 border border-amber-900 rounded-full flex justify-center items-center">
                        <svg fill="currentColor" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.4008 25.8H41.8008H39.8008V23.8V17.6V15.6H41.8008H46.0008C47.1008 15.6 48.0008 14.8 48.0008 13.6V3C48.0008 1.9 47.2008 1 46.0008 1H38.7008C30.8008 1 25.3008 6.6 25.3008 14.9V23.6V25.6H23.3008H16.5008C15.1008 25.6 13.8008 26.7 13.8008 28.3V35.5C13.8008 36.9 14.9008 38.2 16.5008 38.2H23.1008H25.1008V40.2V60.3C25.1008 61.7 26.2008 63 27.8008 63H37.2008C37.8008 63 38.3008 62.7 38.7008 62.3C39.1008 61.9 39.4008 61.2 39.4008 60.6V40.3V38.3H41.5008H46.0008C47.3008 38.3 48.3008 37.5 48.5008 36.3V36.2V36.1L49.9008 29.2C50.0008 28.5 49.9008 27.7 49.3008 26.9C49.1008 26.4 48.2008 25.9 47.4008 25.8Z"/>
                        </svg>
                    </div>
                    <div data-cursor-magnetic className="hover:bg-amber-500 hover:text-white transition-colors transition-300 hover:border-0 text-amber-900 w-20 h-20 border border-amber-900 rounded-full flex justify-center items-center">
                        <svg fill="currentColor" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z"/>
                            <path d="M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z"/>
                            <path d="M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z"/>
                        </svg>
                    </div>
                    <div data-cursor-magnetic className="hover:bg-amber-500 hover:text-white transition-colors transition-300 hover:border-0 text-amber-900 w-20 h-20 border border-amber-900 rounded-full flex justify-center items-center">
                        <svg fill="currentColor" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M58.5016 1H5.60156C3.10156 1 1.10156 3 1.10156 5.5V58.5C1.10156 60.9 3.10156 63 5.60156 63H58.3016C60.8016 63 62.8016 61 62.8016 58.5V5.4C63.0016 3 61.0016 1 58.5016 1ZM19.4016 53.7H10.3016V24.2H19.4016V53.7ZM14.8016 20.1C11.8016 20.1 9.50156 17.7 9.50156 14.8C9.50156 11.9 11.9016 9.5 14.8016 9.5C17.7016 9.5 20.1016 11.9 20.1016 14.8C20.1016 17.7 17.9016 20.1 14.8016 20.1ZM53.9016 53.7H44.8016V39.4C44.8016 36 44.7016 31.5 40.0016 31.5C35.2016 31.5 34.5016 35.3 34.5016 39.1V53.7H25.4016V24.2H34.3016V28.3H34.4016C35.7016 25.9 38.6016 23.5 43.1016 23.5C52.4016 23.5 54.1016 29.5 54.1016 37.7V53.7H53.9016Z"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-center">

                <div>
                    <div className="bg-amber-100 p-20 z-50 shadow-lg rounded-md">
                        <div className="font-fancy text-5xl text-amber-900 text-center">Send Message</div>
                        <form className='mt-10 flex flex-col space-y-10'>
                            <input style={{width:500}} className='bg-transparent focus:outline-none border-b border-amber-300 focus:border-amber-900 text-amber-900 py-2 capitalize placeholder-amber-900 placeholder-opacity-50 font-medium' type="text" placeholder='Your Name' />
                            <input style={{width:500}} className='bg-transparent focus:outline-none border-b border-amber-300 focus:border-amber-900 text-amber-900 py-2 placeholder-amber-900 placeholder-opacity-50 font-medium' type="text" placeholder='Your Email' />
                            <textarea style={{width:500}} className='bg-transparent focus:outline-none border-b border-amber-300 focus:border-amber-900 text-amber-900 py-2 capitalize placeholder-amber-900 placeholder-opacity-50 font-medium' type="text" placeholder='Your Message' />
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


                <div style={{marginTop:'-60vh',zIndex:-1}}>
                <Marquee speed="50" gradient={false} className='text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden'>
                Get in Touch  /  Get in Touch  /  Get in Touch  / Get in Touch  /  Get in Touch  /  <span style={{color:'#fffbeb'}}>f</span>
            </Marquee>
            <Marquee speed="50" gradient={false} direction="right" className='text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden'>
                Get in Touch  /  Get in Touch  /  Get in Touch  / Get in Touch  /  Get in Touch  /  <span style={{color:'#fffbeb'}}>f</span>
            </Marquee>
            <Marquee speed="50" gradient={false} className='text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden'>
                Get in Touch  /  Get in Touch  /  Get in Touch  / Get in Touch  /  Get in Touch  /  <span style={{color:'#fffbeb'}}>f</span>
            </Marquee>
                </div>

            
        </div>
    </div>
  )
}

export default Contact