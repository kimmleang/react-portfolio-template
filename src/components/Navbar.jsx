import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            LLL<span className="text-blue-500">.Dev</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="group relative text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#about"
              className="group relative text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              About
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#projects"
              className="group relative text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Projects
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#contact"
              className="group relative text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};