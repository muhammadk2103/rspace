import { useState } from 'react';

import './Conter.css';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);
  const [inputValue, setInputValue] = useState(initialValue ?? 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSetInitialValue = () => {
    setCount(Number(inputValue));
  };

  return (
    <div className="counter">
      <h1 className="counter-value">Counter: {count}</h1>

      <div className="counter-controls">
        <button className="counter-button" onClick={handleDecrement}>-</button>
        <button className="counter-button" onClick={handleIncrement}>+</button>
      </div>

      {
        typeof initialValue !== 'undefined' ? null 
        : (
          <div className="initial-value-input">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="input"
            />
            <button onClick={handleSetInitialValue} className="set-value-button">Set Initial Value</button>
          </div>
        )
      }
      
    </div>
  );
};

export default Counter;