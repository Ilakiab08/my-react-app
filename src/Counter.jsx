import React, { useState } from 'react';

function Counter() {
 const [count, setCount] = useState(0);

 const handleIncrease = () => {
    setCount(count + 1);
 };

 const handleDecrease = () => {
    setCount(count - 1);
 };

 const handleReset = () => {
    setCount(0);
 };

 return (
    <div>
      <p>Current Count: {count}</p>
      <button className="increase" onClick={handleIncrease}>Increase</button>
      <button className="decrease"onClick={handleDecrease}>Decrease</button>
      <button className="reset"onClick={handleReset}>Reset</button>
    </div>
 );
}

export default Counter;
