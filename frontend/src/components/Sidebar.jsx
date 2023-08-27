// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  // Mock data for demonstration
  const contacts = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    // Add more contacts...
  ];

  return (
    <div className="bg-gray-200 p-4 min-h-screen w-1/4">
      <h2 className="text-xl font-semibold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="py-2">
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
