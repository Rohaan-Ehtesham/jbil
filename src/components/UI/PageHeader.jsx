import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary pt-32 pb-20 relative overflow-hidden border-b-4 border-accent">
      {/* Subtle modern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight fade-in-section is-visible">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light fade-in-section is-visible" style={{transitionDelay: '100ms'}}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
