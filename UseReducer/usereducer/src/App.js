
import { useReducer } from 'react';

function App() {
  const reducer = (state,action)=>{
    if(action.type==="INCREMENT"){
      return state +1;
    }
    if(action.type==="DECREMENT"){
      return state -1;
    }
  }
  const [count,dispatch]=useReducer(reducer,0);
  return (
    <div className="App">
      <p>{count}</p>      
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
    </div>
  );
}

export default App;


