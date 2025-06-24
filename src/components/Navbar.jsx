import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white text-black dark:bg-gray-800 dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-600 dark:text-teal-400">Adrian Dean</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`relative transition duration-200 ${
                location.pathname === path
                  ? 'text-teal-500 dark:text-teal-400 font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-teal-400 after:content-[""] after:transition-all after:duration-300'
                  : 'hover:text-teal-500 dark:hover:text-teal-400'
              }`}
            >
              {name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800 transition-colors duration-300">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block transition duration-200 ${
                location.pathname === path
                  ? 'text-teal-500 dark:text-teal-400 font-semibold'
                  : 'hover:text-teal-500 dark:hover:text-teal-400'
              }`}
            >
              {name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="mt-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition w-full text-left">
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
