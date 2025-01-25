import React from 'react';
import './App.css';

function App() {
  const games = [
    {
      id: 1,
      title: 'Game 1',
      description: 'An exciting adventure awaits!',
      color: '#8B4513'
    },
    {
      id: 2, 
      title: 'Game 2',
      description: 'Challenge your skills!',
      color: '#D2691E'
    },
    {
      id: 3,
      title: 'Game 3', 
      description: 'Explore new worlds!',
      color: '#DEB887'
    }
  ];

  return (
    <div className="app-container">
      <h1 className="page-title">SET GAME</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="game-card"
            style={{ 
              backgroundColor: game.color,
              color: 'white'
            }}
          >
            <div className="game-card-content">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <button className="play-button">Play Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;