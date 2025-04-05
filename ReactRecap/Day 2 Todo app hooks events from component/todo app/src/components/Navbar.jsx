import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav-element'>
        <Link className='btn' to='/notes'>Show all notes</Link>
        <Link className='btn' to='/home'>Home</Link>
      </div>
    </div>
  )
}

export default Navbar
