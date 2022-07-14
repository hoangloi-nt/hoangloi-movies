import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex justify-center items-center gap-x-5 py-10 text-white mb-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary" : "hover:font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? "text-primary" : "hover:font-bold"
        }
      >
        Movie
      </NavLink>
    </header>
  );
};

export default Header;
