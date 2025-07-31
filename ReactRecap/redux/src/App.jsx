import './App.css'
import { increment,decrement,incrementByAmount} from './redux/counter/counterSlice.js'
import {useSelector,useDispatch} from 'react-redux'
import Navbar from './components/Navbar'
function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();

  return (
    <>
      <Navbar></Navbar>
      <button onClick={()=>dispatch(incrementByAmount(7))}>increment by ammount </button>
      Currently count is {count};
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
