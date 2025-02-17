import React from 'react'
import {useState, useEffect} from 'react'

const UseEffect_Uses = () => {

    const [counter, setCounter] = useState(0);
  useEffect(() => {  

    document.title = counter

    console.log("useState is running ...! ");
  }, [counter]);

  return (
    <div>
    <h1>{counter}</h1>
    <button onMouseOver={() => setCounter(counter - 1)}>Decrease</button>
    <button onMouseOver={() => setCounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default UseEffect_Uses