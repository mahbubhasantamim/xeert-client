import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="py-2 flex justify-center md:gap-6 lg:gap-10 text-primary dark:text-secondary">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "px-2 py-1 font-bold" : "px-2 py-1 hover:font-bold"
          }
        >
          Dresses
        </NavLink>
        <NavLink
          to="bl"
          className={({ isActive }) =>
            isActive ? "px-2 py-1 font-bold" : "px-2 py-1 hover:font-bold"
          }
        >
          Blouses
        </NavLink>
        <NavLink
          to="tt"
          className={({ isActive }) =>
            isActive ? "px-2 py-1 font-bold" : "px-2 py-1 hover:font-bold"
          }
        >
          Tess & tops
        </NavLink>
        <NavLink
          to="ts"
          className={({ isActive }) =>
            isActive ? "px-2 py-1 font-bold" : "px-2 py-1 hover:font-bold"
          }
        >
          T-shirts
        </NavLink>
        <NavLink
          to="ow"
          className={({ isActive }) =>
            isActive ? "px-2 py-1 font-bold" : "px-2 py-1 hover:font-bold"
          }
        >
          Outerwear
        </NavLink>
        <NavLink
          to="pa"
          className={({ isActive }) =>
            isActive ? "px-2 py-1 font-bold" : "px-2 py-1 hover:font-bold"
          }
        >
          Pans
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
