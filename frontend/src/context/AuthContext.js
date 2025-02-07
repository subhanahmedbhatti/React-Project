import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    // Implement your login logic here
    // For example, you can use Firebase authentication or your own API
    return new Promise((resolve, reject) => {
      // Simulate a login request
      setTimeout(() => {
        if (email === 'xyz@gmail.com' && password === '123') { // Update credentials for testing
          setCurrentUser({ email });
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const value = {
    currentUser,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};