import { useState } from 'react'//hooks

import './App.css'
//let counter=5


function App() {

 let [counter,setCounter] = useState(15)
  //useState hooks
  //change or poprogate inside the UI
  const addValue = () => {
    console.log('value added',counter);
    //counter=counter+1
    setCounter(counter+1)
  }

  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter*0)
    }
  }
  return (
    <>
     <h1>react with vite</h1>
     <h3>counter value : {counter} </h3>
     <button onClick={addValue}>Add value</button><br /><br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
