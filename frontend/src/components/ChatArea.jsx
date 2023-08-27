// src/components/ChatArea.js
import React from 'react';

const ChatArea = ({ messages }) => {
  return (
    <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 ${message.sender === 'You' ? 'text-right' : ''}`}
        >
          <div
            className={`rounded-lg p-3 ${
              message.sender === 'You'
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-white text-gray-800'
            }`}
          >
            <p className="text-sm font-semibold mb-1">{message.sender}</p>
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;

