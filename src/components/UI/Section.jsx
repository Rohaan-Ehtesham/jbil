import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Section = ({ 
  children, 
  className = '', 
  id = '', 
  animate = true, 
  bg = 'default' // 'default' | 'light' | 'primary'
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  const backgroundStyles = {
    default: 'bg-background',
    light: 'bg-white',
    primary: 'bg-primary text-white',
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-24 ${backgroundStyles[bg]} ${className}`}
    >
      <div 
        ref={animate ? ref : null} 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          animate ? `fade-in-section ${isVisible ? 'is-visible' : ''}` : ''
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
