import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Combined function to both close menu and scroll to top
  const handleNavClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <img 
              src={logo} 
              alt="Immigration Mentors" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-gray-900 transition-colors pb-1 ${location.pathname === '/' ? 'border-b-2 border-gray-800 font-medium' : ''}`} 
              onClick={scrollToTop}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-gray-900 transition-colors pb-1 ${location.pathname === '/about' ? 'border-b-2 border-gray-800 font-medium' : ''}`} 
              onClick={scrollToTop}
            >
              About
            </Link>
            <Link 
              to="/countries" 
              className={`text-gray-700 hover:text-gray-900 transition-colors pb-1 ${location.pathname === '/countries' ? 'border-b-2 border-gray-800 font-medium' : ''}`} 
              onClick={scrollToTop}
            >
              Countries
            </Link>
            <Link 
              to="/faq" 
              className={`text-gray-700 hover:text-gray-900 transition-colors pb-1 ${location.pathname === '/faq' ? 'border-b-2 border-gray-800 font-medium' : ''}`} 
              onClick={scrollToTop}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-gray-900 transition-colors pb-1 ${location.pathname === '/contact' ? 'border-b-2 border-gray-800 font-medium' : ''}`} 
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </div>
          
          <div className="flex items-center">
            <Link 
              to="/contact" 
              className="btn-secondary hidden md:inline-block hover:bg-black hover:text-white border border-gray-600 text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2"
              onClick={scrollToTop}
            >
              Get Free Consultation
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden ml-4 p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3 py-3">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-gray-900 transition-colors px-2 py-2 rounded-md hover:bg-gray-100 ${location.pathname === '/' ? 'border-l-4 border-gray-800 font-medium pl-3' : ''}`}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-gray-900 transition-colors px-2 py-2 rounded-md hover:bg-gray-100 ${location.pathname === '/about' ? 'border-l-4 border-gray-800 font-medium pl-3' : ''}`}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link 
              to="/countries" 
              className={`text-gray-700 hover:text-gray-900 transition-colors px-2 py-2 rounded-md hover:bg-gray-100 ${location.pathname === '/countries' ? 'border-l-4 border-gray-800 font-medium pl-3' : ''}`}
              onClick={handleNavClick}
            >
              Countries
            </Link>
            <Link 
              to="/faq" 
              className={`text-gray-700 hover:text-gray-900 transition-colors px-2 py-2 rounded-md hover:bg-gray-100 ${location.pathname === '/faq' ? 'border-l-4 border-gray-800 font-medium pl-3' : ''}`}
              onClick={handleNavClick}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-gray-900 transition-colors px-2 py-2 rounded-md hover:bg-gray-100 ${location.pathname === '/contact' ? 'border-l-4 border-gray-800 font-medium pl-3' : ''}`}
              onClick={handleNavClick}
            >
              Contact
            </Link>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link 
                to="/contact" 
                className="btn-secondary w-full text-center hover:bg-black hover:text-white border border-gray-600"
                onClick={handleNavClick}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
