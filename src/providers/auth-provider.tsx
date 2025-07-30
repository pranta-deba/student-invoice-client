import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";
import {
  getUserByLocalStorage,
  removeToken,
  removeUser,
} from "../utils/localStorage";

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

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [appLoader, setAppLoader] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setAppLoader(true);

    const storedUser = getUserByLocalStorage();
    if (isMounted) {
      if (storedUser) {
        setUser(storedUser);
      } else {
        setUser(null);
        removeToken();
        removeUser();
      }
      setAppLoader(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  console.log(user);

  const value = { user, setUser, appLoader, setAppLoader };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
