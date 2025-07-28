import React from 'react'
import { useState } from 'react';

const FunctionBase = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const { msg } = props;    
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <></>
    </div>
  )
}

export default FunctionBase
