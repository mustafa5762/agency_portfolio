import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { ReactLenis } from '@studio-freight/react-lenis';
import Home from './Pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import About from './Pages/About';



function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ReactLenis root>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </ReactLenis>
      </div>
    </BrowserRouter>
  )
}

export default App
