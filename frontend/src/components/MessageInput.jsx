// src/components/MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 border-t">
      <input
        type="text"
        className="w-full border rounded-lg p-2 mr-2"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
