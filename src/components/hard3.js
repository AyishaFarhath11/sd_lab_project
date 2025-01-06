import React, { useState } from 'react';
import  './App.css';

const initialUniversalSet = [
  { id: '1', color: 'red' },
  { id: '2', color: 'blue' },
  { id: '3', color: 'yellow' },
  { id: '4', color: 'green' },
  { id: '5', color: 'pink' },
  { id: '6', color: 'black' },
];

const initialSetA = [{ id: '1', color: 'red' }, { id: '3', color: 'yellow' }];
const initialSetB = [{ id: '2', color: 'blue' }, { id: '4', color: 'green' }];
const initialSetC = [{ id: '5', color: 'pink' },{ id: '2', color: 'blue' }, { id: '4', color: 'green' }];

const SetTheoryGame = () => {
  const [universalSet1, setUniversalSet1] = useState(initialUniversalSet);
  const [universalSet2, setUniversalSet2] = useState(initialUniversalSet);
  const [lhsAnswer, setLhsAnswer] = useState([]);
  const [rhsAnswer, setRhsAnswer] = useState([]);
  const [points, setPoints] = useState(0);

  const onDragStart = (e, item, source) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
    e.dataTransfer.setData('source', source);
  };

  const onDrop = (e, destination) => {
    const item = JSON.parse(e.dataTransfer.getData('item'));
    const source = e.dataTransfer.getData('source');

    let sourceArray =
      source === 'universalSet1'
        ? universalSet1
        : source === 'universalSet2'
        ? universalSet2
        : source === 'lhsAnswer'
        ? lhsAnswer
        : rhsAnswer;

    let setSource =
      source === 'universalSet1'
        ? setUniversalSet1
        : source === 'universalSet2'
        ? setUniversalSet2
        : source === 'lhsAnswer'
        ? setLhsAnswer
        : setRhsAnswer;

    let destinationArray =
      destination === 'lhsAnswer'
        ? lhsAnswer
        : destination === 'rhsAnswer'
        ? rhsAnswer
        : destination === 'universalSet1'
        ? universalSet1
        : universalSet2;

    let setDestination =
      destination === 'lhsAnswer'
        ? setLhsAnswer
        : destination === 'rhsAnswer'
        ? setRhsAnswer
        : destination === 'universalSet1'
        ? setUniversalSet1
        : setUniversalSet2;

    if (!destinationArray.some((i) => i.id === item.id)) {
      // Remove item from source array and add to destination array
      setSource(sourceArray.filter((i) => i.id !== item.id));
      setDestination([...destinationArray, item]);

      // Update points only if moving from Universal Set to Answer Area
      
    }
  };

  const handleSubmit = () => {
    alert(`You scored ${points} points!`);
  };

  const renderDroppableArea = (id, items, title, styleClass, allowDrag = true) => (
    <div
      className={`droppable-area ${styleClass}`}
      onDrop={(e) => onDrop(e, id)}
      onDragOver={(e) => e.preventDefault()}
    >
      <h4>{title}</h4>
      {items.map((item) => (
        <div
          key={item.id}
          draggable={allowDrag} // Allow drag only if specified
          onDragStart={(e) => onDragStart(e, item, id)}
          className={`draggable-item diamond ${item.color}`}
        />
      ))}
    </div>
  );

  return (
    <div className="container">
      <h3>Property: Associative Law</h3>
      <p>Associative Law: (A U B) U C = A U (B U C)</p>
      <div className="points-display">Points: {points}</div>

      <div className="sets-row">
        {renderDroppableArea('setA', initialSetA, 'Set A', 'set-a', false)} {/* Drag disabled */}
        {renderDroppableArea('setB', initialSetB, 'Set B', 'set-b', false)} {/* Drag disabled */}
        {renderDroppableArea('setC', initialSetC, 'Set C', 'set-c', false)} {/* Drag disabled */}
        {renderDroppableArea('universalSet1', universalSet1, 'Universal Set 1', 'universal-set')}
        {renderDroppableArea('universalSet2', universalSet2, 'Universal Set 2', 'universal-set')}
      </div>

      <div className="answer-areas">
        {renderDroppableArea('lhsAnswer', lhsAnswer, 'L.H.S Answer Area', 'lhs-area')}
        {renderDroppableArea('rhsAnswer', rhsAnswer, 'R.H.S Answer Area', 'rhs-area')}
      </div>

      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SetTheoryGame;
