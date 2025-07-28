import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup';
import Login from './pages/Login'
import About from './pages/About';
import Home from './pages/Home';
import VerifyEmail from './pages/VreifyEmail';
import VerifyMobile from './pages/VerifyMobile';

function App() {


  return (
    <Router>
      <Navbar>       
      </Navbar>     
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/verify-email/:token' element={<VerifyEmail></VerifyEmail>}/>
        <Route path='/verify-mobile' element={<VerifyMobile></VerifyMobile>}/>
        <Route path='/home' element={
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        }/>
      </Routes>
    </Router>
  )
}

export default App
