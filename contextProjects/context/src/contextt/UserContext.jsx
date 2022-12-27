import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import ThemeContext from "./ThemeContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "1",
    name: "sura",
  });
  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

//custom context hook kullanimi
export const useUser = () => useContext(ThemeContext);
