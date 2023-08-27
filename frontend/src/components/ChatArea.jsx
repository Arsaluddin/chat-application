// src/components/ChatArea.js
import React from 'react';

const ChatArea = () => {
  // Mock data for demonstration
  const messages = [
    { id: 1, sender: 'Alice', content: 'Hello, how are you?' },
    { id: 2, sender: 'You', content: "I'm good, thanks!" },
    // Add more messages...
  ];

  return (
    <div className="flex-1 p-4 bg-white overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-2 ${message.sender === 'You' ? 'text-right' : ''}`}
        >
          <div className="bg-gray-200 rounded-lg p-2">
            <strong>{message.sender}</strong>: {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
