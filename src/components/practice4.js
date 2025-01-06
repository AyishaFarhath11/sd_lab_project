import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [answerArea, setAnswerArea] = useState([]);
  const [universalSet, setUniversalSet] = useState([
    { id: 'electricBlue', color: '#007AFF' },
    { id: 'mintGreen', color: '#00C79F' },
    { id: 'pink', color: '#FFB6C1' },
    { id: 'lemonYellow', color: '#FFD700' },
    { id: 'rustOrange', color: '#D2691E' },
    { id: 'lavenderPurple', color: '#A97CFF' },
  ]);
  const [points, setPoints] = useState(0);

  const handleDragStart = (e, item, source) => {
    e.dataTransfer.setData('item', JSON.stringify({ item, source }));
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    const { item, source } = JSON.parse(e.dataTransfer.getData('item'));

    if (target === 'answerArea' && source === 'universalSet') {
      setUniversalSet((prev) => prev.filter((i) => i.id !== item.id));
      setAnswerArea((prev) => [...prev, item]);
      setPoints(points + 1); // Increment points when an item is added to the answer area
    } else if (target === 'universalSet' && source === 'answerArea') {
      setAnswerArea((prev) => prev.filter((i) => i.id !== item.id));
      setUniversalSet((prev) => [...prev, item]);
      setPoints(points > 0 ? points - 1 : 0); // Decrement points if moving back to the universal set
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      {/* Points Area */}
      <div className="points-area">
        <h4>Points: {points}</h4>
      </div>

      <div className="sets">
        <div className="set">
          <h3>A</h3>
          <div className="set-box">
            <div className="circle" style={{ backgroundColor: '#007AFF' }}></div>
            <div className="circle" style={{ backgroundColor: '#00C79F' }}></div>
            <div className="circle" style={{ backgroundColor: '#FFB6C1' }}></div>
            <div className="circle" style={{ backgroundColor: '#FFD700' }}></div>
          </div>
        </div>

        <div className="set">
          <h3>B</h3>
          <div className="set-box">
            <div className="circle" style={{ backgroundColor: '#FFD700' }}></div>
            <div className="circle" style={{ backgroundColor: '#D2691E' }}></div>
            <div className="circle" style={{ backgroundColor: '#FFB6C1' }}></div>
            <div className="circle" style={{ backgroundColor: '#007AFF' }}></div>
          </div>
        </div>

        <div className="set">
          <h3>C</h3>
          <div className="set-box">
            <div className="circle" style={{ backgroundColor: '#A97CFF' }}></div>
            <div className="circle" style={{ backgroundColor: '#D2691E' }}></div>
            <div className="circle" style={{ backgroundColor: '#007AFF' }}></div>
          </div>
        </div>

        <div className="universal-set">
          <h3>U</h3>
          <div
            className="set-box"
            onDrop={(e) => handleDrop(e, 'universalSet')}
            onDragOver={handleDragOver}
          >
            {universalSet.map((item) => (
              <div
                key={item.id}
                className="circle"
                style={{ backgroundColor: item.color }}
                draggable
                onDragStart={(e) => handleDragStart(e, item, 'universalSet')}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="question-section">
        <h2>Question: (A∩B)∪(B−C)</h2>
      </div>

      <div className="answer-section">
        <h3>Answer Area</h3>
        <div
          className="answer-box"
          onDrop={(e) => handleDrop(e, 'answerArea')}
          onDragOver={handleDragOver}
        >
          {answerArea.map((item) => (
            <div
              key={item.id}
              className="circle"
              style={{ backgroundColor: item.color }}
              draggable
              onDragStart={(e) => handleDragStart(e, item, 'answerArea')}
            ></div>
          ))}
        </div>
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default App;