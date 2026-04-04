import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import Button from '../UI/Button';
import bgImage from '../../img/bgimg.jpg';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        {/* Subtle patterned overlay mimicking industrial texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
        <div className="max-w-3xl w-full fade-in-section is-visible">
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 text-accent px-3 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Settings className="w-4 h-4 animate-[spin_4s_linear_infinite]" />
            <span>Built with precision. Delivered with reliability.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Precision Metal & <br />
            <span className="text-accent">Fiber Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
            At Jafri Brothers International Limited (JBIL), we specialize in transforming raw metal and fiber sheets into high-quality, durable, and customized industrial products. Through a combination of advanced machinery, skilled workmanship, and a commitment to excellence, we create solutions designed to perform reliably in demanding environments. Whether you need precision molding, strong fiber binding, or custom industrial fabrication, JBIL is your trusted manufacturing partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Get a Quote
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Explore Services
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 text-white">
            <div>
              <p className="text-3xl font-bold text-accent mb-1">25+</p>
              <p className="text-sm font-medium text-gray-300">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-1">500+</p>
              <p className="text-sm font-medium text-gray-300">Projects Completed</p>
            </div>
            <div className="hidden md:block">
              <p className="text-3xl font-bold text-accent mb-1">ISO</p>
              <p className="text-sm font-medium text-gray-300">Certified Quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
