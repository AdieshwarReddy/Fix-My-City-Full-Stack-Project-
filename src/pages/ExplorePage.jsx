import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { mockPosts } from '../data/mockData';

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: '1', label: 'All' },
    { id: '2', label: 'garbage' },
    { id: '3', label: 'pathole' },
    { id: '4', label: 'emergency' },
    { id: '5', label: 'sanitation' },
    { id: '6', label: 'waterleckage' }
  ];

  return (
    <div className="max-w-6xl mx-auto lg:mx-0">
      {/* Search Header */}
      <div className="bg-white lg:border lg:border-gray-200 lg:rounded-lg p-4 mb-6 sticky top-16 lg:top-8 z-40">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search photos, people, or hashtags"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;