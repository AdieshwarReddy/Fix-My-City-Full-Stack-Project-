import React from 'react';
import StoryCard from './StoryCard';

const StoryCarousel = () => {
  const stories = [
    { id: '1', username: 'garbage', avatar: 'garbage.jpg', isViewed: false, },
    { id: '2', username: 'fireaccident', avatar: 'fireaccident.jpg', isViewed: false },
    { id: '3', username: 'illegalConstruction', avatar: 'illegalConstruction.jpg', isViewed: false },
    { id: '4', username: 'pathole', avatar: 'pathole.jpg', isViewed: false },
    { id: '5', username: 'waterleckage', avatar: 'waterleckage.jpg', isViewed: false },
    { id: '6', username: 'park', avatar: 'park.jpg', isViewed: false },
    { id: '6', username: 'emergancy', avatar: 'emergancy.jpg', isViewed: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200 lg:border lg:rounded-lg lg:mb-6">
      <div className="p-4">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCarousel;