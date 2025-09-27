import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import TopNavigation from '../components/navigation/TopNavigation';
import BottomNavigation from '../components/navigation/BottomNavigation';
import DesktopSidebar from '../components/navigation/DesktopSidebar';
import RightSidebar from '../components/sidebars/RightSidebar';

const MainLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <TopNavigation />
        <main className="pt-16 pb-16">
          {children}
        </main>
        <BottomNavigation />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <DesktopSidebar />
        <main className="flex-1 ml-64">
          <div className="max-w-6xl mx-auto flex">
            <div className="flex-1 max-w-2xl">
              {children}
            </div>
            <div className="w-80 ml-8">
              <RightSidebar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;