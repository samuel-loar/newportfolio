// CollapsibleCards.js
import React, { useState } from 'react';
import '../Projects.css'; 
import { ChatSquare } from 'react-bootstrap-icons';
import { FaSpotify, FaCode } from 'react-icons/fa';

const CollapsibleCard = ({ title, icon, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible-card ${isOpen ? 'open' : ''}`}>
      <div className={`card-header ${isOpen ? 'open' : ''}`} onClick={toggleCard}>
        {icon} {title}
      </div>
      {isOpen && (
        <div className="card-content">
          {content}
        </div>
      )}
    </div>
  );
};

const CollapsibleCards = () => {
  const cardData = [
    {
      title: 'Card 1',
      icon: <ChatSquare />,
      content: 'Content for Card 1 goes here.',
    },
    {
      title: 'Card 2',
      icon: <FaSpotify />,
      content: 'Content for Card 2 goes here.',
    },
    {
      title: 'Card 3',
      icon: <FaCode />,
      content: 'Content for Card 3 goes here.',
    },
  ];

  return (
    <div className="collapsible-cards-container">
      {cardData.map((card, index) => (
        <CollapsibleCard
          key={index}
          title={card.title}
          icon={card.icon}
          content={card.content}
        />
      ))}
    </div>
  );
};

export default CollapsibleCards;
