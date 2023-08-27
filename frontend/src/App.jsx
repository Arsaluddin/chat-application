// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Navbar';
import Home from './pages/Home';
import ChatRoom from './pages/ChatPage';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/chat/:roomId" element={<ChatRoom/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
