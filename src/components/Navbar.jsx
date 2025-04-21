import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B0C10] text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="h-14 w-14 rounded-full object-cover"
        />
        <span className="text-2xl font-bold">NEOVATECH</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <a href="#home" className="hover:text-[#00BFFF] transition">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-[#00BFFF] transition">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#00BFFF] transition">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#00BFFF] transition">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-black"
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
        <ul className="fixed inset-0 top-20 bg-[#0B0C10] flex flex-col items-center space-y-8 pt-10 text-lg md:hidden z-50">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00BFFF]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00BFFF]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00BFFF]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00BFFF]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
