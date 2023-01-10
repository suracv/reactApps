import MenuNew, { Menu } from "./MenuNew";

export const NavbarNew = ({ items, show }) => {
  if (!show) {
    return null;
  }

  return (
    <ul className="sub-menu">
      {items.submenu.map((menu, index) => (
        <MenuNew data={menu} key={index} />
      ))}
    </ul>
  );
};
