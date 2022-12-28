import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <div className="cocktail">
      <img src={image} alt="" />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <h5>{info}</h5>
        <Link to={`/cocktail/${id}`}>detail</Link>
      </div>
    </div>
  );
};

export default Cocktail;
