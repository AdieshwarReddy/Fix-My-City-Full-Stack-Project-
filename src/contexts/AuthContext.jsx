import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    username: 'johndoe',
    fullName: 'John Doe',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: true,
    followers: 1234,
    following: 567,
    posts: 89
  });

  const login = async (username, password) => {
    // Mock authentication
    if (username && password) {
      setUser({
        id: '1',
        username: username,
        fullName: 'John Doe',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        isVerified: true,
        followers: 1234,
        following: 567,
        posts: 89
      });
      return true;
    }
    return false;
  };

  const signup = async (email, username, password, fullName) => {
    // Mock signup
    if (email && username && password && fullName) {
      setUser({
        id: '1',
        username: username,
        fullName: fullName,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        isVerified: false,
        followers: 0,
        following: 0,
        posts: 0
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};