// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Navbar';
import Home from './pages/HomePage';
import ChatRoom from './pages/ChatPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='login' element={<LoginPage/>} />
          <Route path='register' element={<RegisterPage/>} />
          <Route path="/chat" element={<ChatRoom/>} />
          <Route path="/profile/:userId" element={<ProfilePage/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
