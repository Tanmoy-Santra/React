import './App.css'
import MyClass from './components/myClass';
import Counter from './components/Counter';
import DisplayName from './components/DisplayName';
import Cricketers_details from './Dataset/doc';
import Players from './components/Players';
import PlayerBio from './components/PlayerBio';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      {/* <MyClass></MyClass>
      <Counter></Counter>
      <DisplayName name="Tommuy"/> */}
      <Route path="/" element={<Players playersDetails={Cricketers_details}/>}/>  
      <Route path="/bio/:playerName" element={<PlayerBio/>}></Route>    
    </Routes>
    </BrowserRouter>
  )
}

export default App;
