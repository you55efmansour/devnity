import React from 'react';
import { Code, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import logo from './logof.png';


const Footer = () => {
  const { theme } = useTheme();

  // Smooth scroll handler for Quick Links
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`${theme === 'dark' ? 'bg-black bg-opacity-95 text-white' : 'bg-gray-100 text-black'} pt-16 pb-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Code size={24} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} /> */}
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
              <span className="text-xl font-bold">Devinity</span>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
              Creating digital excellence for businesses through innovative solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575876446130" target="_blank" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/dev_nity/" target="_blank" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/Devinitycompany/?viewAsMember=true" target="_blank" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" onClick={e => { e.preventDefault(); handleNavClick('#hero'); }} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={e => { e.preventDefault(); handleNavClick('#about'); }} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={e => { e.preventDefault(); handleNavClick('#services'); }} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" onClick={e => { e.preventDefault(); handleNavClick('#contact'); }} className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full`}
              />
              <button 
                type="submit" 
                className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                aria-label="Subscribe"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className={`border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'} pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center md:text-left mb-4 md:mb-0`}>
            &copy; {new Date().getFullYear()} Devinity. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              Privacy Policy
            </a>
            <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              Terms of Service
            </a>
            <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;