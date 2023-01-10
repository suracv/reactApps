import { useState } from "react";
import SubmenuItem from "./SubmenuItem";

const NavbarItem = ({ items, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <li className={`menu-items ${isOpen ? "active" : null}`}>
      <button
        className="menu-items__title"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3> {items.title}</h3>
        <span className="arrow" />
      </button>
      <SubmenuItem submenus={items.submenu} searchTerm={searchTerm} />
    </li>
  );
};

export default NavbarItem;
