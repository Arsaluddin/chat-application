// src/pages/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border rounded-lg p-8 max-w-md w-full mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
            {/* Add user avatar here */}
          </div>
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-gray-700">
            I'm a passionate web developer who loves building amazing applications.
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
