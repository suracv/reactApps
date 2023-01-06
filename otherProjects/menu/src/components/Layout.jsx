import Header from "./Header";
import Outlet from "../pages/Outlet";
import CloseButton from "./CloseButton";
import { useEffect, useState } from "react";

const Layout = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handleCloseButtonClick = () => {
    setShowHeader(prevShowHeader => !prevShowHeader);
    console.log('ccc')
  };
  return (
    <div className="main">
      {showHeader && <Header />}
      <CloseButton onClick={handleCloseButtonClick}/>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
