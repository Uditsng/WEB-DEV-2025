import React, { useState } from "react";

const Counter2 = () => {
  // it will show changes on screen
  const [counter2, setCounter2] = useState(0);

  const increaseBy1 = () => {
    setCounter2(counter2 + 6);
  };

  const decreaseBy1 = () => {
    setCounter2(counter2 - 5);
  };

  return (
    <div>
      <h1>{counter2}</h1>
      <button onClick={increaseBy1}>+1</button>
      <button onClick={decreaseBy1}>-1</button>
    </div>
  );
};

export default Counter2;
