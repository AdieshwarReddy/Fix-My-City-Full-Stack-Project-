import React from 'react';
import { Plus } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer group">
      <div className={`relative p-0.5 rounded-full ${
        story.isOwn 
          ? 'bg-gray-300' 
          : story.isViewed 
            ? 'bg-gray-300' 
            : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600'
      } group-hover:scale-105 transition-transform`}>
        <div className="bg-white p-0.5 rounded-full">
          <img 
            src={story.avatar} 
            alt={story.username} 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
      <span className={`text-xs text-center max-w-[70px] truncate ${
        story.isViewed ? 'text-gray-500' : 'text-gray-900'
      }`}>
        {story.username}
      </span>
    </div>
  );
};

export default StoryCard;