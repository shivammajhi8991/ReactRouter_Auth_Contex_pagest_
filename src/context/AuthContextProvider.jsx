import React from "react";
import { createContext, useContext, useState } from "react";

const AuthProvider = createContext();
const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthProvider.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthProvider.Provider>
  );
};
export function useAuth() {
  return useContext(AuthProvider);
}
export default AuthContextProvider;
