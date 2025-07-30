import { createContext } from "react";
type User = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: "admin" | "user";
  image?: string;
  createdAt?: string;
  updatedAt?: string;
};

interface Props {
  user: null | User;
  setUser: (user: User | null) => void;
  appLoader: boolean;
  setAppLoader: (loader: boolean) => void;
}

export const AuthContext = createContext<Props | null>(null);
