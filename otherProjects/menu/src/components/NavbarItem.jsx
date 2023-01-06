import { useState, useEffect } from "react";
import SubmenuItem from "./SubmenuItem";

const NavbarItem = ({ items }) => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [dropdown, setDropdown] = useState(false);
  const [menuIndex, setmenuIndex] = useState(false);

  const onClickEvent = () => {
    setDropdown(!dropdown);
    setActiveDropdown(items.id);
    console.log("clicked", items.id);
  };

  const onStopEvent = (e) => {
    e.stopPropagation();
    console.log("current target:");
  };

  useEffect(() => {
    console.log(activeDropdown);
  }, [activeDropdown]);

  return (
    <li className=
    {`menu-items ${dropdown ? "active" : null}`} >
      <button
        className="menu-items__title"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        <h3> {items.title}</h3>
        <span className="arrow" />
      </button>
      <SubmenuItem submenus={items.submenu} />
    </li>
  );
};

export default NavbarItem;
