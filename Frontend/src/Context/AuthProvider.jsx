import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  const login = (user) => {
    setAuthUser(user);
    localStorage.setItem("User", JSON.stringify(user));
    window.location.reload();
  };

  const logout = () => {
    setAuthUser(undefined);
    localStorage.removeItem("User");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
