import { items } from "../data";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <nav>
      <SearchBar />

      <ul className="menus">
        {items.map((menu, index) => {
          const depthLevel = 0;
          return (
            <NavbarItem items={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
