// src/components/Navbar.js
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-semibold">
          Chat App
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/chat" className="hover:text-gray-300 transition duration-300">Chat</Link>
          {/* Add more links */}
          <Link to="/profile/userId" className="hover:text-gray-300 transition duration-300">Profile</Link>
          <Link to="/login" className="hover:text-gray-300 transition duration-300">Log In</Link>
          <Link to="/register" className="hover:text-gray-300 transition duration-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
