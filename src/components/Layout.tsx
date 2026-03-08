import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <NavBar />

      <main className="layout-content">
        <Outlet />
      </main>

      {/* Moldura de baixo */}
      <Footer />
    </div>
  );
}

export default Layout;
