import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

import { useTheme } from '../ThemeContext';
import logo from './logof.png';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    // { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? `${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md py-3 shadow-lg` : `${theme === 'dark' ? 'bg-transparent' : 'bg-white'} py-6`
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-white font-bold text-xl flex items-center">
            {/* <img src={logo} alt="Devinity Logo" className="w-10 h-10 pt-1 mr-2" /> */}
            <svg  className="svvvgh"width="75px" height="40px" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet">
            <path
              id="outline-bg"
              opacity="0.05"
              fill="none"
              stroke="#4285F4"
              strokeWidth={100}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 -8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            />
            <path
              stroke="#4285F4"
              id="outline"
              className="animated"
              fill="none"
              strokeWidth={100}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 -8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            />
            {/* <div className="arrow2 left2">Hasdklasmdaskld</div> */}
            {/* <p> <i className="arrow2 left2"></i></p> */}
            {/* Left Arrow */}
            <polyline points="72,39 62,46.4 72,53.8" fill="none" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Right Arrow */}
            <polyline points="115,39 125,46.4 115,53.8" fill="none" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
            <span className="text-2xl text-blue-500 mr-1">Devinity</span><span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className=" hover:text-blue-500 transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
            Get Started
          </button> */}
          <button
            onClick={toggleTheme}
            className=" focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-gray-400 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-start gap-8 pt-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-200 hover:text-blue-500 text-lg transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className=" focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;