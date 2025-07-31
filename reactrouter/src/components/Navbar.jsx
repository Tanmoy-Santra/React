import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          MyLogo
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/:userId"
              className={({ isActive }) =>
                isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'
              }
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
