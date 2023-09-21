import React from "react";

export interface User {
  email: string;
  iat: number;
  name: string;
  userId: number;
}

const AuthContext = React.createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
} | null>(null);

export default AuthContext;
