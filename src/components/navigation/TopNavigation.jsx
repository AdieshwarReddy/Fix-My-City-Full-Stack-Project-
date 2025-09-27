import React from 'react';
import { Instagram, Heart, MessageCircle, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const TopNavigation = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <img src="logo.jpg" alt="logo" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            FixMyCity
          </h1>
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden sm:flex flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Heart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MessageCircle className="w-6 h-6" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-purple-500 ring-offset-1">
            <img src={user?.avatar} alt={user?.username} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;