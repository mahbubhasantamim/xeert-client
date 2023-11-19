import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Header/Navbar";
import SiteTitle from "../components/shared/Header/SiteTitle";
import ThemeButton from "../components/shared/ThemeButton/ThemeButton";

function MainLayout() {
  return (
    <>
      <SiteTitle />
      <Navbar />
      <div className="fixed top-4">
        <ThemeButton />
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default MainLayout;
