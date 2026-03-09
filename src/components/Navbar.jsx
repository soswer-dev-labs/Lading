import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ content, lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { links, cta } = content;

  const toggleLanguage = () => {
    const newPath = lang === 'en' ? '/es' : '/';
    window.location.href = newPath;
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        <a href={lang === 'en' ? '/' : '/es'} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" alt="SOSWER Logo" className="h-10 w-auto" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">SOSWER</span>
        </a>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-2">
          <ThemeToggle client:load />
          
          <button 
            onClick={toggleLanguage}
            className="text-gray-600 dark:text-gray-300 hover:text-neon mr-4 flex items-center gap-1 text-sm font-medium transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'EN' : 'ES'}
          </button>

          <a href={lang === 'en' ? '/contact' : '/es/contact'} className="text-black bg-neon hover:bg-neon-hover focus:ring-4 focus:outline-none focus:ring-neon/50 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer transition-colors duration-300 hidden md:block">
            {cta}
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-900/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block py-2 px-3 text-black dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-neon md:p-0 transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
