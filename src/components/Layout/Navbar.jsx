import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';
import Button from '../UI/Button';
import logoImg from '../../img/logo3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-gray-100 ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="JBIL Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path ? 'text-accent' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button to="/contact" variant="primary" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-secondary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-gray-100 shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'bg-primary/5 text-accent'
                  : 'text-secondary hover:bg-gray-200 hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Button to="/contact" variant="primary" className="w-full">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
