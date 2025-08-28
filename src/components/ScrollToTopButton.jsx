import React, { useState, useEffect } from 'react';
import { HiChevronUp } from 'react-icons/hi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 focus:outline-none z-50 transition-all duration-300 hover:shadow-xl animate-fade-in"
          aria-label="Scroll to top"
        >
          <HiChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
