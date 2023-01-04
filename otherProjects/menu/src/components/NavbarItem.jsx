import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

const NavbarItem = ({ items, depthLevel }) => {
  let ref = useRef();
  const [activeDropdown, setActiveDropdown] = useState(-1);

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

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
    <li
      className={`menu-items ${dropdown ? "active" : null}`}
      ref={ref}
      onClick={onClickEvent}
    >
      {items.url && items.submenu ? (
        <div onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className="bttn"
            onClick={() => setDropdown((prev) => !prev)}
          >
            {depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 ? <span>&rarr;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </div>
      ) : !items.url && items.submenu ? (
        <div>
          <button
            className="menu-items__title"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&rarr;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </div>
      ) : (
        <div onClick={onStopEvent}>
          <Link to={items.url}>{items.title}</Link>
        </div>
      )}
    </li>
  );
};

export default NavbarItem;
