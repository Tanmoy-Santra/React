import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import Contact from './components/Contact';
import { Route,Routes,createRoutesFromElements } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([

//   {
//     path:'/',
//     element:<Layout/>,
//     children :[
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       },
//       {
//         path: 'app',
//         element: <App />
//       }
//     ]
//   }

// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />     
      <Route path="/user/:userId" element={<User />} />

    </Route>
  )
);
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
