import React, { useEffect, useState } from "react";
import { items } from "../data";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [menuItems, setmenuItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  useEffect(() => {
    setmenuItems([...items]);
  }, []);

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
        {menuItems.map((item, index) => (
          <NavbarItem items={item} key={index} searchTerm={searchTerm} />
        ))}
      </ul>
      <button onClick={() => handleAddMenuItem()}>ekle</button>
    </nav>
  );
};

export default Navbar;
