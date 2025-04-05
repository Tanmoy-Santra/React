import Todo from "./components/Todo"
import Home from "./components/Home"
import { BrowserRouter,Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-background font-sans text-textMain">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/notes" element={<Todo></Todo>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
