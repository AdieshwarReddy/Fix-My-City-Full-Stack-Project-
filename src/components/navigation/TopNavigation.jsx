import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Search, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const TopNavigation = () => {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + App Name */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-md flex items-center justify-center shadow-md overflow-hidden">
            <img src="/logo.jpg" alt="FixMyCity Logo" className="w-8 h-8 object-contain" />
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
            FixMyCity
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button
            className="relative p-2 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg transition"
            aria-label="Notifications"
          >
            <Heart className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Message Icon */}
          <button
            className="p-2 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg transition"
            aria-label="Messages"
          >
            <MessageCircle className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-lg transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* User Avatar - Square with border */}
          <div className="w-9 h-9 rounded-md overflow-hidden ring-2 ring-purple-500 ring-offset-1 hover:ring-offset-2 transition-all duration-300">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.username || 'User Avatar'}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-sm font-bold">
                {user?.username?.[0]?.toUpperCase() || 'U'}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
