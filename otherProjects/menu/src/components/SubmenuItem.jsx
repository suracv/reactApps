import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubmenuItem = ({ submenus, items, searchTerm }) => {
  const [submenuIndex, setsubmenuIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [subsubmenuIndex, setSubsubmenuIndex] = useState(-1);

  const handleClick = (event) => {
    event.stopPropagation();
  };

  //functıon state duzgun mu dummy dtaa subsubmenu buttonlar ekle
  //  onClick={()=> setsubmenuIndex((prevIndex) => (prevIndex === index ? -1 : index))}
  return (
    <ul className="sub-menus">
      {submenus.map((sub, index) => {
        return (
          <li key={index} onClick={() => setIsOpen(!isOpen)}>
            {sub.submenu ? (
              <div
                className={`other-submenu ${
                  index === submenuIndex ? "active" : null
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <ul
                  className="sub-menus__item"
                  onClick={() => setsubmenuIndex(index)}
                >
                  {sub.title}
                  {isOpen && (
                    <div className="sub-menus2" onClick={handleClick}>
                      {sub.submenu.map((a, index) => (
                        <Link
                          to={a.url}
                          key={a.id}
                          className={`sub-menus2__item  ${
                            index === subsubmenuIndex ? "active" : null
                          }`}
                        >
                          <div onClick={() => setSubsubmenuIndex(index)}>
                            {a.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            ) : (
              <Link
                to={sub.url}
                className={`sub-menus__item  ${
                  sub.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ? "highlight"
                    : ""
                }`}
              >
                <div onClick={() => setsubmenuIndex(index)}>{sub.title}</div>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SubmenuItem;
