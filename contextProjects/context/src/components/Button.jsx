import React from "react";
import { useContext } from "react";
import ThemeContext from "../contextt/ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button>default theme: {theme}</button>;
}

export default Button;
