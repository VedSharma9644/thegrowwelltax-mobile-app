import React, { createContext, useContext } from 'react';

const defaultAuthState = {
  user: null,
  token: null,
  updateUser: async () => {},
  googleLogin: async () => ({ success: false }),
};

const AuthContext = createContext(defaultAuthState);

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={defaultAuthState}>{children}</AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);

