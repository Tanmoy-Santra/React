import logo from './logo.svg';
import './App.css';
import {useEffect,useState, useRef } from 'react';
function App() {
  const [text,setText]=useState();
  const inputRef=useRef(null);
useEffect(()=>{
  inputRef.current?.focus();    
},[])

const handleInput=(e)=>{
  setText(e.target.value);
  inputRef.current?.focus();   
}
  return (
    <div className="App">
      <input ref={inputRef} onChange={handleInput} type='text' name='name' placeholder='enter your name'/>
      <div>{text}</div>
    </div>
  );
}

export default App;
