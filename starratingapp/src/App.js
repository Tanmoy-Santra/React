import logo from './logo.svg';
import './App.css';

function App() {
  const updateRating=(e)=>{    
    const starNo=parseInt(e.target.id);
    console.log(starNo);
    for (let i = 1; i <= 5; i++) {
      document.getElementById(i.toString()).style.color = "black"; // or gray
    }
    for(let i=1;i<=starNo;i++){
     document.getElementById(i.toString()).style.color="yellow";
     
    }
    
  }
  return (
    <div className="App">
      <h1>Rating App</h1>
      <div className='stars'>
      <span onClick={updateRating} id='1'>✩</span>
      <span onClick={updateRating} id='2'>✩</span>
      <span onClick={updateRating} id='3'>✩</span>
      <span onClick={updateRating} id='4'>✩</span>
      <span onClick={updateRating} id='5'>✩</span>      
      </div>
    </div>
  );
}

export default App;
