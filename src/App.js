import React from 'react';
import './App.css';
import Home from "../src/components/Home";

import Exclusive from './components/Exclusive';

import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import PricingSection from './components/PricingSection';
import Navbar from './components/Navbar';
import Galz from './components/Galz';
import Galc from './components/Galc';


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
    <Footer/>
    </>
  );

}

export default App;
