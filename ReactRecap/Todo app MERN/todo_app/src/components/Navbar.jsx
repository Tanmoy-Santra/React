import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use react-icons or lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-blue-600 font-bold text-xl">
        <Link to="/">📝 Todo App</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/home" className="hover:text-blue-500">Home</Link>
        <Link to="/notes" className="hover:text-blue-500">Create</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-10">
          <Link to="/home" onClick={() => setIsOpen(false)} className="py-2 text-blue-600">Home</Link>
          <Link to="/notes" onClick={() => setIsOpen(false)} className="py-2 text-blue-600">Notes</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
