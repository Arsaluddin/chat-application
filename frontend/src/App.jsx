
import './App.css'
import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';
import axios from 'axios';
import Chat from './Chat';

const socket = io('http://localhost:5000',{autoConnect: false}); // Replace with your backend URL

socket.on('connection', () => {
  console.log('Connected to the server!');
});


function App() {
  const [showChat, setShowChat] = useState(false);
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState(""); // Replace with the authenticated user's name (if applicable)

  // useEffect(() => {
  //   // Listen for the 'initial_data' event and update the messages state
  //   socket.on('initial_data', (data) => {
  //     console.log(data)
  //     setMessages(data);
  //   });
  // }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  // const sendMessage = (text) => {
  //   const message = { text, user };
    
  //   socket.emit('send_message', message);
  // };

  // const handleSendMessage = (event) => {
  //   event.preventDefault();
  //   const text = event.target.message.value.trim();
  //   if (text !== '') {
  //     sendMessage(text);
  //     console.log(text)
  //     event.target.message.value = '';
  //   }
  // };

 

  return (
    <div className="App">
    {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
    ) : (
      <Chat socket={socket} username={username} room={room} />
    )}
  </div>
  );
};

export default App;
