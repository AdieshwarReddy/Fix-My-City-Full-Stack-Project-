import React from 'react';
import StoryCarousel from '../components/stories/StoryCarousel';
import PostCard from '../components/posts/PostCard';
import { mockPosts } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="max-w-2xl mx-auto lg:mx-0">
      {/* Stories */}
      <StoryCarousel />
      
      {/* Posts Feed */}
      <div className="space-y-0">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;