import NavbarItem from "./NavbarItem";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        // {
        //   items.url && items.submenu ? (
        //     <div onClick={(e) => e.stopPropagation()}>
        //       <button
        //         type="button"
        //         aria-haspopup="menu"
        //         aria-expanded={dropdown ? "true" : "false"}
        //         className="bttn"
        //         onClick={() => setDropdown((prev) => !prev)}
        //       >
        //         {depthLevel === 0 ? (
        //           items.title
        //         ) : (
        //           <div onClick={onStopEvent}>
        //             <Link to={items.url}>{items.title}ssss</Link>
        //           </div>
        //         )}

        //         {depthLevel > 0 ? <span>&rarr;</span> : <span className="arrow" />}
        //       </button>
        //       <Dropdown
        //         depthLevel={depthLevel}
        //         submenus={items.submenu}
        //         dropdown={dropdown}
        //       />
        //     </div>
        //   ) :
        // }
        <NavbarItem items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
