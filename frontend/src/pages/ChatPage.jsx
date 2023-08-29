// src/pages/Chat.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import MessageInput from '../components/MessageInput';

const Chat = () => {
  const [contacts] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    // Add more contacts...
  ]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState({}); // State to hold message history

  const handleSendMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      sender: 'You',
      content: message,
    };
  
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedContact.id]: [...(prevMessages[selectedContact.id] || []), newMessage],
    }));
  };
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        contacts={contacts}
        selectedContact={selectedContact}
        onSelectContact={setSelectedContact}
      />
      <div className="flex-1 flex flex-col bg-white shadow-md">
        <header className="bg-blue-500 text-white py-4 px-8">
          <h1 className="text-3xl font-semibold">
            {selectedContact ? `Chat with ${selectedContact.name}` : 'Chat App'}
          </h1>
        </header>
        <ChatArea messages={messages[selectedContact?.id] || []} />
        {selectedContact && (
          <MessageInput onSendMessage={handleSendMessage} />
        )}
      </div>
    </div>
  );
};

export default Chat;
