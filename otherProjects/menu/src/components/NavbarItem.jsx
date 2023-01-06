import { useState, useEffect } from "react";
import SubmenuItem from "./SubmenuItem";

const NavbarItem = ({ items, index }) => {

  const [menuIndex, setmenuIndex] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const onStopEvent = (e) => {
    e.stopPropagation();
    console.log("current target:");
  };

  const handleMenuIndex = () => {
    setmenuIndex(index);
    setActive(!isActive);
  };


  return (
    <li
      className={`menu-items 
    
    ${index === menuIndex ? "active" : null}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="menu-items__title" onClick={handleMenuIndex}>
        <h3> {items.title}</h3>
        <span className="arrow" />
      </button>
      <SubmenuItem submenus={items.submenu} />
    </li>
  );
};

export default NavbarItem;
