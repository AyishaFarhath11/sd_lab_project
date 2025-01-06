import React from 'react';
import './App.css'; // Import the CSS for styling

const App = () => {
  return (
    <div className="container">
      <h1 className="header">Game Level</h1>
      <div className="levels">
        <div className="level-box beginner">
          <h2>Beginner Level</h2>
          <p>Start with the basics and build your knowledge!</p>
        </div>
        <div className="level-box intermediate">
          <h2>Intermediate Level</h2>
          <p>Take on more complex challenges to deepen your understanding!</p>
        </div>
        <div className="level-box hard">
          <h2>Hard Level</h2>
          <p>Master the concepts with difficult problems!</p>
        </div>
      </div>
    </div>
  );
}

export default App;