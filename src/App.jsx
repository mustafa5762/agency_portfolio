import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { ReactLenis } from '@studio-freight/react-lenis';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import AnimatedPages from './AnimatedPages';



function App() {
  return (
    <div className="aspp">
      <div className="fixed right-5 lg:right-10 bottom-5 lg:bottom-10 bg-amber-500 shadow-2xl p-3 lg:p-4 rounded-full text-white z-50 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 lg:w-8 h-6 lg:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
      </div>
      <BrowserRouter>
          <ReactLenis root>
          <Navbar />
            <AnimatedPages />
          <Footer/>
        </ReactLenis>
      </BrowserRouter>
    </div>
  )
}

export default App


