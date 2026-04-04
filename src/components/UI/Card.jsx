import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`bg-card rounded-xl shadow-card p-6 border border-gray-100 transition-all duration-300 ${
        hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
