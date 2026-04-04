import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import logoImg from '../../img/logo3.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyEmail = import.meta.env.VITE_COMPANY_EMAIL || 'info@jbil.net';
  const companyPhone = import.meta.env.VITE_COMPANY_PHONE || '+92-XXX-XXXXXXX';
  const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS || 'Karachi, Pakistan';
  const companyHours = import.meta.env.VITE_COMPANY_HOURS || 'Monday - Friday: 9:00 AM - 5:00 PM PST';

  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoImg} alt="JBIL Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Jafri Brothers International Limited is dedicated to delivering high-quality metal and fiber solutions for industrial needs. With a focus on precision, durability, and customer satisfaction, we help businesses achieve dependable results through reliable manufacturing services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/jbil.industries" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/jbil-industries" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={`https://wa.me/923216123456`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-semibold text-sm flex items-center">WA</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm">Metal Sheet Molding</li>
              <li className="text-sm">Fiber Sheet Binding</li>
              <li className="text-sm">Custom Fabrication</li>
              <li className="text-sm">Industrial Project Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyAddress}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`tel:${companyPhone}`} className="text-sm hover:text-accent transition-colors">{companyPhone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`mailto:${companyEmail}`} className="text-sm hover:text-accent transition-colors">{companyEmail}</a>
              </li>
              <li className="pt-2 border-t border-gray-700">
                <p className="text-xs text-gray-400">{companyHours}</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} JBIL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
