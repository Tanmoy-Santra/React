import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,counter] = useState (0);
    function Addcounter() {
       counter(count+1)
    }
  return (
    <div>
      <h1>hi i am counter {count}</h1>
      <button type='button' onClick={Addcounter}>count</button>
    </div>
  )
}
export default Counter;
