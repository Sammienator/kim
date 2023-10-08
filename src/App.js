import React from 'react';
import './App.css';
import Home from "../src/components/Home";

import Exclusive from './components/Exclusive';
import Customized from './components/Customized';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import PricingSection from './components/PricingSection';
import Navbar from './components/Navbar';
import Galz from './components/Galz';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
   
    <PricingSection/>
   
   
    <Galz/>
    <Exclusive/>
    <Customized/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default App;
