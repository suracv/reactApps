import React, { useState } from "react";

const CloseButton = ({ onClick }) => {
  const [className, setClassName] = useState("close-btn");
  const handleClick = () => {
    setClassName((prevClassName) => {
      return prevClassName === "close-btn" ? "close-btn open" : "close-btn";
    });
    onClick();
  };

  return (
    <button className={className} onClick={handleClick}>
      ab
    </button>
  );
};

export default CloseButton;
