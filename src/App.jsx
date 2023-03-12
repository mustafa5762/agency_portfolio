import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { ReactLenis } from '@studio-freight/react-lenis';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import AnimatedPages from './AnimatedPages';



function App() {
  return (
    <div className="aspp bg-white dark:bg-neutral-900">
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


