
import './App.css'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000'); // Replace with your backend URL


function App() {
  
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('User'); // Replace with the authenticated user's name (if applicable)

  useEffect(() => {
    // Listen for the 'initial_data' event and update the messages state
    socket.on('initial_data', (data) => {
      setMessages(data);
    });
  }, []);

  const sendMessage = (text) => {
    const message = { text, user };
    socket.emit('send_message', message);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const text = event.target.message.value.trim();
    if (text !== '') {
      sendMessage(text);
      event.target.message.value = '';
    }
  };

  return (
    <div>
      <h1>Real-time Chat</h1>
      <div>
        <div>
          {messages.map((message) => (
            <div key={message._id}>
              <strong>{message.user}: </strong>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <input type="text" name="message" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
