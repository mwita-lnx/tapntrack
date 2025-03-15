// ListDisplay Component
// File: ListDisplay.jsx
import React from 'react';

const ListDisplay = ({ items, isTransitioning }) => {
  if (!items || items.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full max-w-md">
      <ul className="text-white space-y-3">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center bg-white bg-opacity-10 rounded-lg p-3 backdrop-blur-sm"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: !isTransitioning ? 'fadeIn 0.5s ease forwards' : 'none',
              opacity: !isTransitioning ? 1 : 0,
              transform: `translateY(${!isTransitioning ? '0' : '10px'})`,
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}
          >
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-20 mr-3">
              {index + 1}
            </div>
            <span className="text-left">{item}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ListDisplay;
