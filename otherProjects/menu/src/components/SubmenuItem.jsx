import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubmenuItem = ({ submenus, dropdown }) => {
  const [submenuIndex, setsubmenuIndex] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleClass = () => {
    setActive(!isActive);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  //functıon state duzgun mu dummy dtaa subsubmenu buttonlar ekle
  //  onClick={()=> setsubmenuIndex((prevIndex) => (prevIndex === index ? -1 : index))}
  return (
    <>
      <ul className={`sub-menus ${dropdown ? "show" : ""}`}>
        {submenus.map((sub, index) => {
          return (
            <li key={index}>
              {sub.submenu ? (
                <div
                  className={`other-submenu ${
                    index === submenuIndex ? "active" : null
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    className="sub-menus__item"
                    onClick={() => setsubmenuIndex(index)}
                  >
                    {sub.title}
                    {isOpen && (
                      <div className="sub-menus2" onClick={handleClick}>
                        {sub.submenu.map((a) => (
                          <Link
                            to={a.url}
                            key={a.id}
                            className={`sub-menus2__item ${
                              isActive ? "activem" : null
                            } `}
                            onClick={handleClass}
                          >
                            {a.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={sub.url} className="sub-menus__item">
                    {sub.title}sss
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SubmenuItem;
