import { createContext } from "react";

interface Props {
  user: null | any;
  setUser: (user: null | any) => void;
  appLoader: boolean;
  setAppLoader: (loader: boolean) => void;
}

export const AuthContext = createContext<Props | null>(null);
