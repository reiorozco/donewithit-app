import React from "react";

export interface User {
  email: string;
  iat: number;
  name: string;
  userId: number;
}

const AuthContext = React.createContext<{
  user: User;
  setUser: (user: User) => void;
} | null>(null);

export default AuthContext;
