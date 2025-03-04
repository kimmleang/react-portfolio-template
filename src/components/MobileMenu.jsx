import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `text-2xl font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } ${isActive ? "text-blue-500" : "text-white"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `text-2xl font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } ${isActive ? "text-blue-500" : "text-white"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `text-2xl font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } ${isActive ? "text-blue-500" : "text-white"}`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `text-2xl font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } ${isActive ? "text-blue-500" : "text-white"}`
        }
      >
        Contact
      </NavLink>
    </div>
  );
};