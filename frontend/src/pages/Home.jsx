// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
        Welcome to ChatApp!
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center mb-8">
        Connect and chat with friends in real-time.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Link
          to="/chat/general"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 md:mb-0 md:mr-4 hover:bg-blue-600 transition duration-300"
        >
          Join Chat
        </Link>
        <Link
          to="/profile"
          className="text-blue-500 hover:underline transition duration-300"
        >
          Go to Profile
        </Link>
      </div>
    </div>
  );
};

export default Home;
