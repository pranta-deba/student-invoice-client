import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";
import {
  getUserByLocalStorage,
  removeToken,
  removeUser,
} from "../utils/localStorage";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [appLoader, setAppLoader] = useState(true);

  useEffect(() => {
    setAppLoader(true);
    const storedUser = getUserByLocalStorage();
    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser(null);
      removeToken();
      removeUser();
    }
    setAppLoader(false);
    return () => {};
  }, []);

  console.log(user);

  const value = { user, setUser, appLoader, setAppLoader };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
