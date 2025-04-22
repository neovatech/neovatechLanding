import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo only */}
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-24 w-32 object-contain" />
        Neovatech
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-10 text-base font-semibold items-center">
        <li>
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile menu button */}
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

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="fixed top-20 inset-x-0 bg-black text-white flex flex-col space-y-6 items-center pt-8 text-lg z-50">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
