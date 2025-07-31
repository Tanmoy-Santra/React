import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Foot from './components/Foot'
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Foot/>
    </div>
  )
}

export default Layout
