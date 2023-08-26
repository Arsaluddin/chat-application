// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            ChatApp
          </Link>
          <div>
            <Link to="/profile" className="mr-4">
              Profile
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-2">
        © {new Date().getFullYear()} ChatApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
