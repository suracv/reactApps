import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //localdaki degeri kullanmak istiyorsan
  // const [theme,setTheme] =useState(localStorage.getItem('theme')||'light');

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    console.log(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);
  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
