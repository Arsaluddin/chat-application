// src/pages/ProfilePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { userId } = useParams();
  // Mock user data for demonstration
  const user = {
    username: 'john_doe',
    email: 'john@example.com',
    about: 'Passionate web developer',
    avatar: 'https://via.placeholder.com/150', // Replace with actual image URL
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{user.username}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-gray-700">{user.about}</p>
        </div>
        <button
          className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
