// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-indigo-500">
      <div className="text-white text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to ChatApp</h1>
        <p className="text-lg mb-6">
          Connect, Chat, and Collaborate with Friends
        </p>
        <button className="bg-white text-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg shadow-lg font-semibold">
          Get Started By Register
        </button>
      </div>
    </div>
  );
};

export default HomePage;
