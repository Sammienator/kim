import React from 'react';
import './App.css';
import Home from "../src/components/Home";

import Best from './components/Best';
import Exclusive from './components/Exclusive';
import Customized from './components/Customized';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import PricingSection from './components/PricingSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <PricingSection/>
   
    <Best/>
    <Exclusive/>
    <Customized/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default App;
