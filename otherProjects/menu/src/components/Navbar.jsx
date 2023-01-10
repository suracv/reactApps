import { Fragment, useEffect, useState } from "react";
import { items } from "../data";
import { NavbarNew } from "./navbarNew";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuItems, setmenuItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setmenuItems([...items]);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const changeOpenMenu = (id) => {
    setOpenIndex(id);
    if (id === openIndex) {
      setToggleMenu(!toggleMenu);
      setOpenIndex(-1);
    } else {
      setToggleMenu(true);
    }
  };

  const handleAddMenuItem = () => {
    setmenuItems([
      ...items,
      {
        id: 56,
        title: "Servisler22",
        submenu: [
          {
            title: "ENTG Sıkça Sorulan Sorular",
            url: "entg",
          },
          {
            title: "Ip-Eşleştirme",
            url: "ip-eslestirme",
          },
        ],
      },
    ]);

    console.log("sub");
  };
  return (
    <nav>
      <SearchBar handleSearch={handleSearch} />

      <ul className="menus">
        {menuItems.map((navbar, index) => (
          <Fragment key={index}>
            <li
              onClick={() => changeOpenMenu(navbar.id)}
              className={`menu-items ${
                openIndex === navbar.id ? "active" : null
              }`}
            >
              <button className="menu-items__title">
                <h3> {navbar.title}</h3>
                <span className="arrow" />
              </button>
            </li>
            <NavbarNew
              items={navbar}
              show={openIndex === navbar.id && toggleMenu}
            />
          </Fragment>
        ))}
      </ul>
      <button onClick={() => handleAddMenuItem()}>ekle</button>
    </nav>
  );
};
export default Navbar;
