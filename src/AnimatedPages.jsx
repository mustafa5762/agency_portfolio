import React from 'react'
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import { AnimatePresence } from 'framer-motion';

function AnimatedPages() {

    const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedPages