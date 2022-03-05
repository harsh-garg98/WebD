import logo from './logo.svg';
import image from './components/img2.jpeg'
import image2 from './components/img1.jpeg'
import acn from './components/acn.png'
import './App.css';
import React, { useState } from 'react';
import page_header from './components/page_header.js';

function App() {
  
  return (
    <div className="App">
    <header className="app-header">
        <h3 className="header-first-sentence">Hey, I'm</h3>
        <h1 className="header-second-sentence">HARSH GARG</h1>
    </header>
      <h1 className="my-journey">My journey</h1>
      <div className="image-and-details">
      <img className="journey-image" src={acn}  alt="Accenture" />
            <div className = "company-details">
              <p>Accenture, India</p>
              <p>Data Science Analyst</p>
            </div>
            </div>
    </div>
  );
}

export default App;


 