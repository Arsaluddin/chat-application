// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/chat/:roomId" element={<ChatRoom/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
