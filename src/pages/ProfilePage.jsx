import React, { useState } from 'react';
import { Settings, Grid2x2 as Grid, Bookmark, Heart, MessageCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { mockPosts } from '../data/mockData';

const ProfilePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', icon: Grid, label: 'Posts' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
  ];

  const userPosts = mockPosts.filter(post => post.user.username === user?.username);
  const allUserPosts = [...userPosts, ...mockPosts.slice(0, 6)]; // Mock more posts for demo

  return (
    <div className="max-w-4xl mx-auto lg:mx-0 p-4 lg:p-0">
      {/* Profile Header */}
      <div className="bg-white lg:border lg:border-gray-200 lg:rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img 
              src={user?.avatar} 
              alt={user?.username} 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-purple-500 ring-offset-4"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <h1 className="text-2xl font-semibold">{user?.username}</h1>
                {user?.isVerified && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-1.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Edit Profile
                </button>
                <button className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 mb-4">
              <div className="text-center">
                <span className="block text-xl font-semibold">{user?.posts || 0}</span>
                <span className="text-gray-500 text-sm">posts</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-semibold">{user?.followers?.toLocaleString() || 0}</span>
                <span className="text-gray-500 text-sm">followers</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-semibold">{user?.following || 0}</span>
                <span className="text-gray-500 text-sm">following</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="font-semibold">{user?.fullName}</p>
              <p className="text-gray-600">📸 Photography enthusiast</p>
              <p className="text-gray-600">🌍 Sharing life's beautiful moments</p>
              <p className="text-blue-600">linktr.ee/{user?.username}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white lg:border lg:border-gray-200 lg:rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex justify-center space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-3 gap-1 sm:gap-4">
              {allUserPosts.map((post, index) => (
                <div key={index} className="aspect-square relative group cursor-pointer">
                  <img 
                    src={post.image} 
                    alt="Post" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5 fill-white" />
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-5 h-5 fill-white" />
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No saved posts yet</p>
              <p className="text-sm text-gray-400">Posts you save will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;