// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Chat App
        </Link>
        <div>
          <Link to="/home" className="mr-4">Home</Link>
          <Link to="/chat" className="mr-4">Chat</Link>
          {/* Add more links */}
          <Link to="/profile/userId" className="mr-4">Profile</Link>
          <Link to="/login" className="mr-4">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
