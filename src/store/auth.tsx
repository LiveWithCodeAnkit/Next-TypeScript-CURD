"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  auth: any[];
};

export const authContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<any[]>(() => {
    try {
      const newAuth = localStorage.getItem("Authenticate") || "null";
      return JSON.parse(newAuth);
    } catch (e) {
      return [];
    }
  });

  return (
    // @ts-ignore
    <authContext.Provider value={{ auth }}>{children}</authContext.Provider>
  );
}
export function useAuth() {
  // @ts-ignore
  const authContextValue = useContext(authContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of Provider");
  }

  return authContextValue;
}
