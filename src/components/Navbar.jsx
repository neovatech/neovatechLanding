import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-black bg-opacity-60 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-lg`}
    >
      {/* Logo */}
      <div className="flex items-center font-code">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="h-16 w-16 object-contain mr-2 transform transition-transform duration-300 hover:scale-110" // Increase logo size here
        />
        <span className="text-2xl font-bold text-shadow-lg">Neovatech</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 text-base font-semibold items-center">
        {["home", "about", "services", "contact-us"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="hover:text-yellow-400 transition-all transform duration-300 hover:scale-105"
            >
              {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="fixed top-20 inset-x-0 bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col space-y-6 items-center pt-8 text-lg z-50 transition-all duration-300">
          {["home", "about", "services", "contact-us"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-all transform duration-300 hover:scale-105"
              >
                {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
