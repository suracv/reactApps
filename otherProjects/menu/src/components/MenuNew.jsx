import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { SubmenuNew } from "./SubmenuNew";

const MenuNew = ({ data }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(openIndex, data.id);

  const changeOpenMenu = (id) => {
    setOpenIndex(id);
    if (id === openIndex) {
      setToggleMenu(!toggleMenu);
      setOpenIndex(-1);
    } else {
      setToggleMenu(true);
    }
  };
  return (
    <Fragment>
      <Link to={data.url} className="sub-menu__item">
        <li
          onClick={() => changeOpenMenu(data.id)}
          className={`sub-menu__item ${
            openIndex === data.id ? "active" : null
          }`}
        >
          <div>
            {data.title}ssss
            <span className="arrow" />
          </div>
        </li>
      </Link>
      {data.submenu && toggleMenu && (
        <SubmenuNew
          data={data.submenu}
          show={openIndex === data.id && toggleMenu}
        />
      )}
    </Fragment>
  );
};
export default MenuNew;
