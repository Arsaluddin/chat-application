// src/pages/Chat.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import MessageInput from '../components/MessageInput';

const Chat = () => {
  const handleSendMessage = (message) => {
    // Handle sending the message to the backend
    console.log(`Sending message: ${message}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-500 text-white py-4 px-8">
          <h1 className="text-xl font-semibold">Chat App</h1>
        </header>
        <ChatArea />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
