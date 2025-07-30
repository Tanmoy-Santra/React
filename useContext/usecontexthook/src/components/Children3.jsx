import React from 'react'
import { useContext } from 'react'
import useContext1 from './UseContext1'
const Children3 = () => {
    const {user}=useContext(useContext1);
  return (
    <div>      
      Children3
      my name is {user}
    </div>
  )
}

export default Children3
