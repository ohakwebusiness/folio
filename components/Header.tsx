
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LightbulbIcon from './icons/LightbulbIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ];
  
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-brand-light'
        : 'text-white hover:text-brand-light'
    }`;


  return (
    <header className="bg-brand-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-brand-light transition-colors">
            <LightbulbIcon className="w-8 h-8 text-brand-light" />
            <span className="text-xl font-bold tracking-tight">BigTink Digital Creations</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={navLinkClass}>
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              className="ml-4 px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-light rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-brand-secondary">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-brand-accent text-white' : 'text-gray-300 hover:bg-brand-accent hover:text-white'}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </NavLink>
            ))}
             <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-left mt-2 px-3 py-2 text-base font-semibold text-brand-primary bg-brand-light rounded-md shadow-md hover:bg-yellow-300 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
