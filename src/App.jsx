import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      image: '', // Add an image URL here
      name: 'Lê minh anh',
      messages: [
        { id: 1, sender: 'Lê minh anh', content: 'chào đức!', timestamp: new Date() },
        { id: 2, sender: 'Đức', content: 'chào lê minh anh', timestamp: new Date() },
      ],
    },
    {
      id: 2,
      image: '', // Add an image URL here
      name: 'Urito Nisemuno',
      messages: [
        { id: 3, sender: 'Urito Nisemuno', content: 'Hey, wanna be friends?', timestamp: new Date() },
      ],
    },
      {
      id: 3,
      image: '', // Add an image URL here
      name: 'Lê minh anh',
      messages: [
        { id: 1, sender: 'Lê minh anh', content: 'chào đức!', timestamp: new Date() },
        { id: 2, sender: 'Đức', content: 'chào lê minh anh', timestamp: new Date() },
      ],
    },
      {
      id: 4,
      image: '', // Add an image URL here
      name: 'Lê minh anh',
      messages: [
        { id: 1, sender: 'Lê minh anh', content: 'chào đức!', timestamp: new Date() },
        { id: 2, sender: 'Đức', content: 'chào lê minh anh', timestamp: new Date() },
      ],
    },
      {
      id: 5,
      image: '', // Add an image URL here
      name: 'Lê minh anh',
      messages: [
        { id: 1, sender: 'Lê minh anh', content: 'chào đức!', timestamp: new Date() },
        { id: 2, sender: 'Đức', content: 'chào lê minh anh', timestamp: new Date() },
      ],
    },
    // Add more people here...
  ]);

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setSelectedPerson((prevPerson) => ({
        ...prevPerson,
        messages: [
          ...prevPerson.messages,
          { id: selectedPerson.messages.length + 1, sender: 'You', content: newMessage, timestamp: new Date() },
        ],
      }));
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container">
      <div className="people-container">
        <div className="header">
          <h2>People,Groups and messages </h2>
        </div>
        <ul className="people">
          {people.map((person) => (
            <li
              key={person.id}
              className={selectedPerson === person ? 'active' : ''}
              onClick={() => handleSelectPerson(person)}
            >
              <div className="person-info">
                <div className="person-name">{person.name}</div>
                {person.newMessageCount > 0 && (
                  <div className="new-message-count">{person.newMessageCount}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        <div className="chat-header">
          <div className="person-info">
            <div className="person-name">{selectedPerson.name}</div>
          </div>
        </div>
        <div className="chat-messages">
          <ul>
            {selectedPerson.messages.map((message) => (
              <li key={message.id} className={message.sender === 'You' ? 'outgoing' : ''}>
                <div className="message-content">{message.content}</div>
                <div className="message-timestamp">{message.timestamp.toLocaleString()}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;