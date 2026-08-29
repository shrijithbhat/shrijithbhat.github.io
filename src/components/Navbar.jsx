import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-lighter/90 backdrop-blur-md py-4 shadow-lg shadow-primary/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          SB<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">About</a>
          <a href="#skills" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Skills</a>
          <a href="#experience" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Projects</a>
          <a href="#publications" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Publications</a>
          <a href="#education" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Education</a>
          <a href="#hobbies" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Hobbies</a>
          
          <button 
            onClick={toggleLightMode}
            className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-primary hover:border-primary transition-colors focus:outline-none"
            title="Toggle Light Mode"
          >
            {isLightMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

