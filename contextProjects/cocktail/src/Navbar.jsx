import React from "react";
import { NavLink } from "react-router-dom";
import linksJson from "./linksJson";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        {linksJson.map((link) => {
          const { text, id, path } = link;
          <NavLink to={path} key={id}>
            {text}
          </NavLink>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
