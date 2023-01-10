import { useState } from "react";
import { Link } from "react-router-dom";

export const SubmenuNew = ({ data, show }) => {
  if (!show) {
    console.log("dsd");
    return null;
  }

  return (
    <ul className="sub-menu2">
      {data.map((sub, index) => (
        <Link to={sub.url} className="sub-menu2__item" key={index}>
          <li>{sub.title}</li>
        </Link>
      ))}
    </ul>
  );
};
