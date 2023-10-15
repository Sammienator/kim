import React from 'react';
import './App.css';
import Home from "../src/components/Home";

import Exclusive from './components/Exclusive';

import Testimonial from './components/Testimonial';

import PricingSection from './components/PricingSection';
import Navbar from './components/Navbar';
import Galz from './components/Galz';
import Galc from './components/Galc';
import Broot from './components/Broot';



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
   
    <PricingSection/>
   
   
    <Galz/>
    <Exclusive/>
 
    <Galc/>
    <Testimonial/>
 
  
    <Broot/>
    </>
  );

}

export default App;
