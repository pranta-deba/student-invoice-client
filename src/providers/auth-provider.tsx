import { useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [appLoader, setAppLoader] = useState(false);

  console.log(user);

  const value = { user, setUser, appLoader, setAppLoader };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
