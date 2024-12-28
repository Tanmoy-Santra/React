import React from 'react'
import { useState } from 'react'

const Card = () => {
const  [color,setColor] = useState('red')
  return (
    <div>
    
     <h1>hello i am card color {color}</h1> 
     <button type='button' onClick={ () =>setColor ('blue')}>click me</button>
    </div>
  )
}

export default Card
