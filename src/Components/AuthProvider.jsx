import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Replace with real auth logic

  const login = (userData) => {
    setUser(userData); // Set user data when logged in
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  const isLoggedIn = !!user; // Boolean to check if logged in

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
