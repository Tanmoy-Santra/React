
import './App.css';
import { useState } from 'react';
import Childre1 from './components/Childre1';
import useContext1 from './components/UseContext1';
function App() {
  const [user, setUser] = useState("Tanmoy Santra");

  return (
    <div className="App">
      <useContext1.Provider value={{user,setUser}}>
        <Childre1></Childre1>
      </useContext1.Provider>
    </div>
  );
}

export default App;
