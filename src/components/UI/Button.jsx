import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  icon: Icon
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-orange-600 focus:ring-accent",
    secondary: "bg-primary text-white hover:bg-slate-800 focus:ring-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {Icon && <Icon className="ml-2 w-5 h-5" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {Icon && <Icon className="ml-2 w-5 h-5" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;
