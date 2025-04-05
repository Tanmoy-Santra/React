import './App.css'
import {BrowserRouter,Router,Route,Routes} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/home' element={<Home></Home>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
