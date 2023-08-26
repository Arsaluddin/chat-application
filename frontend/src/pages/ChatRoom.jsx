// src/pages/ChatRoom.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const ChatRoom = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = io('http://localhost:5000'); // Replace with your backend URL

  useEffect(() => {
    // Connect to the chat room using the roomId
    socket.emit('join', roomId);

    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up when component unmounts
    return () => {
      socket.emit('leave', roomId);
      socket.off('message');
    };
  }, [roomId]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    socket.emit('sendMessage', { roomId, content: newMessage });
    setNewMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-3 md:py-4 lg:py-5 px-4 md:px-8 lg:px-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Chat Room: {roomId}
        </h1>
      </header>
      <main className="container mx-auto flex-grow px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
        <div className="bg-white border rounded-lg p-4 md:p-6 lg:p-8 mb-4 md:max-w-2xl mx-auto">
          <div className="h-60 md:h-72 lg:h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center text-gray-700">
                  <strong className="mr-1">{message.sender}:</strong>
                  <div>{message.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="flex-grow border rounded-lg p-2 mr-2"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChatRoom;
