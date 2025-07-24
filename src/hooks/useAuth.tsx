import { useContext } from "react";
import { AuthContext } from "../providers/auth-context";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
