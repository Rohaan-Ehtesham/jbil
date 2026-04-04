import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4 py-12">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 leading-none">404</h1>
          <p className="text-4xl font-bold text-secondary mt-4 mb-2">Page Not Found</p>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button variant="primary" icon={Home}>
              Go to Home
            </Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-300 text-secondary font-semibold hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-gray-500">
          <p className="text-sm">Need help? <Link to="/contact" className="text-accent hover:underline">Contact us</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
