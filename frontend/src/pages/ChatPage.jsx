// src/pages/Chat.js
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import MessageInput from '../components/MessageInput';

const Chat = () => {
  const [contacts ,setContacts] = useState([]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState({}); // State to hold message history

  useEffect(() => {
    // Fetch usernames from the backend and update the state
    axios.get('http://localhost:5000/auth/users')
      .then(response => {
        
        setContacts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  


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
            {selectedContact ? `Chat with ${selectedContact}` : 'Chat App'}
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
