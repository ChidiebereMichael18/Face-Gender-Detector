import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Tracking from '../pages/Tracking'; 
import Testimonial from '../pages/Testimonial';
import Application from '../pages/Application';
import Contact from '../pages/Contact';
import Product from '../pages/Product';
import Navbar from '../components/Navbar';

function RouterPath() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/tracking" element={<Tracking/>} />
        <Route path="/testimonials" element={<Testimonial/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </Router>
  )
}

export default RouterPath
