import './App.css'
import Todo from './components/Todo' 
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
      <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Notes></Notes>}/>
          <Route path='/home' element={<Todo></Todo>}/>
          <Route path='/notes' element={<Notes></Notes>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
