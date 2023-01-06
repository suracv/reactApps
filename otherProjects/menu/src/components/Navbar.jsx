import { useState } from "react";
import { useEffect } from "react";
import { items } from "../data";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const [menuItems, setmenuItems] = useState([]);

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
      <SearchBar />
      <ul className="menus" >
        {menuItems.map((item, index) => {
          return <NavbarItem items={item} key={index} />;
        })}
      </ul>

      <button onClick={() => handleAddMenuItem()}>ekle</button>
    </nav>
  );
};

export default Navbar;
