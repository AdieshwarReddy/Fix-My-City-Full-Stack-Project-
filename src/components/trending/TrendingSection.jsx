import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrendingSection = () => {
  const trending = [
    { id: '1', hashtag: 'photography', posts: 1250, category: 'Arts' },
    { id: '2', hashtag: 'nature', posts: 980, category: 'Travel' },
    { id: '3', hashtag: 'workout', posts: 750, category: 'Fitness' },
    { id: '4', hashtag: 'foodie', posts: 650, category: 'Food' },
    { id: '5', hashtag: 'sunset', posts: 520, category: 'Nature' }
  ];

  return (
    <div className="bg-white">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-purple-600" />
        <h3 className="font-semibold text-gray-900">Trending</h3>
      </div>

      <div className="space-y-3">
        {trending.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg cursor-pointer transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">#{index + 1}</span>
                <p className="font-semibold text-sm">#{item.hashtag}</p>
              </div>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{item.posts.toLocaleString()}</p>
              <p className="text-xs text-gray-500">posts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;