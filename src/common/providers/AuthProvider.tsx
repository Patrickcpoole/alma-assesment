"use client";

import { AuthContextType } from "@/types";
import { createContext, useState, ReactNode, useEffect } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

const MOCK_USERNAME = "admin";
const MOCK_PASSWORD = "admin123";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const login = (username: string, password: string) => {
    if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
