import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => (isLiked ? prev - 1 : prev + 1));
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const parseCaption = (caption) => {
    const parts = caption.split(' ');
    return parts.map((part, index) => {
      if (part.startsWith('#') || part.startsWith('@')) {
        return (
          <span key={index} className="text-blue-600 cursor-pointer hover:underline">
            {part}{' '}
          </span>
        );
      }
      return part + ' ';
    });
  };

  return (
    <article className="bg-white border border-gray-200 lg:rounded-lg mb-6">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img 
            src={post.user.avatar} 
            alt={post.user.username} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm">{post.user.username}</span>
              {post.user.isVerified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500">{post.timestamp}</span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </header>

      {/* Image */}
      <div className="relative">
        <img 
          src={post.image} 
          alt="Post content" 
          className="w-full aspect-square object-cover"
          onDoubleClick={handleLike}
        />
        {isLiked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart className="w-20 h-20 text-red-500 fill-red-500 animate-ping" />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike}
              className={`transition-colors ${isLiked ? 'text-red-500' : 'hover:text-gray-600'}`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500' : ''}`} />
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="hover:text-gray-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-600 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button 
            onClick={handleSave}
            className={`transition-colors ${isSaved ? 'text-blue-600' : 'hover:text-gray-600'}`}
          >
            <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-blue-600' : ''}`} />
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="font-semibold text-sm">{likesCount.toLocaleString()} likes</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.user.username}</span>
          <span className="text-sm">{parseCaption(post.caption)}</span>
        </div>

        {/* Comments */}
        <div className="text-sm text-gray-500 mb-2">
          <button 
            onClick={() => setShowComments(!showComments)}
            className="hover:text-gray-700"
          >
            View all {post.comments} comments
          </button>
        </div>

        {/* Add Comment */}
        <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
          <Smile className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Add a comment..." 
            className="flex-1 text-sm focus:outline-none"
          />
          <button className="text-blue-500 font-semibold text-sm">Post</button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;