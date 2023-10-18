import React from 'react';
import './App.css';
import Home from "../src/components/Home";

import Exclusive from './components/Exclusive';



import PricingSection from './components/PricingSection';
import Navbar from './components/Navbar';
import Galz from './components/Gallery';
import Galc from './components/Customized';
import Broot from './components/Footer';
import Brest from './components/Testimonial';



function App() {
  return (
    <> 
    <Navbar/>
    <Home/>
   
    <PricingSection/>
   
   
    <Galz/>
    <Exclusive/>
 
    <Galc/>
    
    <Brest/>
    
 
  
    <Broot/>
    </>
  );

}

export default App;
