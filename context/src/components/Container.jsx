import React from "react";
import { useContext } from "react";
import ThemeContext from "../contextt/ThemeContext";
import Button from "./Button";
const Container = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      <Button />
    </div>
  );
};

export default Container;
