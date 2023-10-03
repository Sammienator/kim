import React from 'react';
import './App.css';
import Home from "../src/components/Home";
import Gallery from './components/Gallery';
import Best from './components/Best';
import Exclusive from './components/Exclusive';
import Customized from './components/Customized';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Home/>
    <Gallery/>
    <Best/>
    <Exclusive/>
    <Customized/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default App;
