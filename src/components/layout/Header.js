import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex justify-center items-center sm:gap-x-5 sm:py-10 text-white sm:mb-5 gap-x-8 py-5 sm:text-base text-lg">
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
