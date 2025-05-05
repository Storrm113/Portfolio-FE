import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#fef3c7] dark:bg-black shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-700 dark:text-red-400"
        >
          Fenrir Studios, LLC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                (isActive
                  ? "text-blue-600 dark:text-red-400"
                  : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-red-300") +
                " font-medium text-sm"
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={
              "ml-4 p-2 rounded-full transition-colors" +
              (darkMode
                ? " bg-red-600 hover:bg-red-700 text-white"
                : " text-gray-700 hover:bg-gray-200")
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800 dark:text-gray-300"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                (isActive
                  ? "text-blue-600 dark:text-red-400"
                  : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-red-300") +
                " block font-medium text-sm"
              }
            >
              {name}
            </NavLink>
          ))}
          <button
            onClick={toggleDarkMode}
            className={
              "mt-2 flex items-center space-x-2 text-sm rounded-md px-2 py-1 transition-colors" +
              (darkMode
                ? " bg-red-600 hover:bg-red-700 text-white"
                : " text-gray-800 hover:bg-gray-200")
            }
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
