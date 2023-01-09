// import styles from "./trump.module.scss";
// import { Fragment, useState } from "react";
// import { Navbar } from "./navbar";
// import { data } from "./data";

// export const Trump = () => {
//   const [openIndex, setOpenIndex] = useState(0);
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const changeOpenMenu = (id: number) => {
//     setOpenIndex(id);
//     if (id === openIndex) {
//       setToggleMenu(!toggleMenu);
//     } else {
//       setToggleMenu(true);
//     }
//   };

//   return (
//     <div className={styles.trump}>
//       <ul className={styles.container}>
//         {data.map((navbar: any, index: number) => (
//           <Fragment key={index}>
//             <li
//               className={styles.navbar}
//               onClick={() => changeOpenMenu(navbar.id)}
//             >
//               {navbar.title}
//             </li>
//             <Navbar
//               data={navbar}
//               show={openIndex === navbar.id && toggleMenu}
//             />
//           </Fragment>
//         ))}
//       </ul>
//     </div>
//   );
// };

// interface DataType {
//   id: number;
//   hasSubMenu: boolean;
//   title: string;
//   menu?: {
//     title: string;
//     url: string;
//     submenu?: {
//       title: string;
//       url: string;
//     }[];
//   }[];
// }
