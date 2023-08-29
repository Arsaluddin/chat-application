// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ contacts, selectedContact, onSelectContact }) => {
  return (
    <div className="bg-white p-4 min-h-screen w-1/4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li
          key={contact.id}
          className={`py-2 px-4 rounded-md cursor-pointer ${
            selectedContact?.id === contact.id
              ? 'bg-blue-100 text-blue-700'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => onSelectContact(contact)}
        >
          {contact.name}
        </li>
        
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
