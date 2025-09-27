import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Instagram, Home, Search, PlusSquare, Heart, 
  MessageCircle, User, Settings, Menu 
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DesktopSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/explore', label: 'Search' },
    { icon: PlusSquare, path: '/create', label: 'Create' },
    { icon: Heart, path: '/activity', label: 'Notifications' },
    { icon: MessageCircle, path: '/messages', label: 'Messages' },
    { icon: User, path: `/profile/${user?.username}`, label: 'Profile' }
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
            <img src="logo.jpg" alt="logo" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            FixMyCity
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.icon === User && user ? (
                  <div className={`w-6 h-6 rounded-full overflow-hidden ${
                    isActive ? 'ring-2 ring-purple-500 ring-offset-1' : ''
                  }`}>
                    <img 
                      src={user.avatar} 
                      alt={user.username} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ) : (
                  <Icon className="w-6 h-6" fill={isActive ? 'currentColor' : 'none'} />
                )}
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6 space-y-2">
          <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all">
            <Settings className="w-6 h-6" />
            <span className="font-medium">Settings</span>
          </button>
          <button 
            onClick={logout}
            className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all"
          >
            <Menu className="w-6 h-6" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;