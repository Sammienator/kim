import React from 'react';
import './App.css';
import Home from "../src/components/Home";
import Gallery from './components/Gallery';
import Best from './components/Best';
import Exclusive from './components/Exclusive';
import Customized from './components/Customized';

function App() {
  return (
    <>
    <Home/>
    <Gallery/>
    <Best/>
    <Exclusive/>
    <Customized/>
    </>
  );
}

export default App;
