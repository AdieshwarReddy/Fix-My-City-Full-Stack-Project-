import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
            <Route path="/signup" element={<AuthLayout><SignupPage /></AuthLayout>} />
            
            {/* Main App Routes */}
            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
            <Route path="/profile/:username" element={<MainLayout><ProfilePage /></MainLayout>} />
            <Route path="/explore" element={<MainLayout><ExplorePage /></MainLayout>} />
            
            {/* Redirect to home by default */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;