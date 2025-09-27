import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/explore', label: 'Explore' },
    { icon: PlusSquare, path: '/create', label: 'Create' },
    { icon: Heart, path: '/activity', label: 'Activity' },
    { icon: User, path: `/profile/${user?.username}`, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`p-2 rounded-full transition-all ${
                isActive 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              aria-label={item.label}
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
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;