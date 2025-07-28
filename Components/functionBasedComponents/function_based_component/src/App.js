import logo from './logo.svg';
import './App.css';
import FunctionBase from './components/FunctionBase';
import ClassBase from './components/ClassBase';
function App() {
  const msg = "Hello from FunctionBase Component!";
  const msg2 = "Hello from ClassBase Component!";
  return (
    <div className="App">
     <FunctionBase msg={msg}></FunctionBase>
     <ClassBase msg={msg2}></ClassBase>
    </div>
  );
}

export default App;
