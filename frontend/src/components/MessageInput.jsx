// src/components/MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const messageWithTimestamp = `${message} (${timestamp})`;
      onSendMessage(messageWithTimestamp);
      setMessage('');
    }
  };

  return (
    <div className="p-4 border-t flex">
      <input
        type="text"
        className="w-full border rounded-l-lg p-3 pr-6 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
