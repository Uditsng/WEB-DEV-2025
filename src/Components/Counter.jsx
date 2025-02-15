import React from "react";

const Counter = () => {
    // this counter be only accessible from console, no change happen at UI level
  let counter = 0;

  const increaseBy1 = () => {
    counter++;
    console.log("Counter =", counter);
  };
  const decreaseBy1 = () => {
    counter--;
    console.log("Counter = ", counter);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseBy1} >+1</button>
      <button onClick={decreaseBy1} >-1</button>
    </div>
  );
};

export default Counter;
