import logo from './logo.svg';
import './App.css';
import ArticlePage from './ArticlePage';
import React, { useState } from 'react';
import concept from './images/conceptual.png';
import videotutu from './images/videotutu.png'
import practice from './images/practice.png'
import startgame from './images/startgame.png'
function App() {
 

  return (
   
    <div className="App">
      <header className="header">
        <h1>SET GAME</h1>
      </header>
      <div className="background">
        <div className="section">
          <h2>CONCEPTUAL EXPLANATION</h2>
          <img src={concept} alt="Conceptual Explanation" />
        </div>
        <div className="section">
          <h2>VIDEO TUTORIAL</h2>
          <img src={videotutu} alt="Video Tutorial" />
        </div>
        <div className="section">
          <h2>PRACTICE SESSION</h2>
          <img src={practice} alt="Practice Session" />
        </div>
        <div className="section">
          <h2>START GAME</h2>
          <img src={startgame} alt="Actual Game" />
        </div>
      </div>
    
      </div> 
 
  );
}

export default App;  


