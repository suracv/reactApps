import Header from "./Header";
import Outlet from "../pages/Outlet";

const Layout = () => {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
