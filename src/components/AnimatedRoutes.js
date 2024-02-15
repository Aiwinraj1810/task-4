import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import About from './About'
import { AnimatePresence } from "framer-motion"


const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <div>
        <AnimatePresence>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
