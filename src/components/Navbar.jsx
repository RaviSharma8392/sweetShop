import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0a0a0a] text-white shadow-lg fixed top-0 left-0 w-full z-50 border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo */}
          <div className="flex items-center">
            <img
              className="h-10"
              src="https://mukteshwarbakery.com/assets/img/logo.svg"
              alt="Mukteshwar Bakery Logo"
            />
            <span className="ml-2 text-xl font-serif tracking-wider text-gold-500">
              Your Shop{" "}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link
              to="/"
              className="relative group text-[#e5e5e5] hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-widest">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/menu"
              className="relative group text-[#e5e5e5] hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-widest">
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="/#about"
              className="relative group text-[#e5e5e5] hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-widest">
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              to="/#contact"
              className="relative group text-[#e5e5e5] hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-widest">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/cart"}
              className="ml-6 px-6 py-2 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#c9a227] transition-colors duration-300">
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]">
              {isOpen ? (
                <X size={24} className="text-[#d4af37]" />
              ) : (
                <Menu size={24} className="text-[#d4af37]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#1a1a1a] rounded-md transition-colors duration-300 border-b border-[#2a2a2a]">
              Home
            </Link>
            <Link
              to="/menu"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#1a1a1a] rounded-md transition-colors duration-300 border-b border-[#2a2a2a]">
              Menu
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#1a1a1a] rounded-md transition-colors duration-300 border-b border-[#2a2a2a]">
              About
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#1a1a1a] rounded-md transition-colors duration-300 border-b border-[#2a2a2a]">
              Contact
            </Link>
            <Link
              to={"/cart"}
              className="w-full mt-2 px-4 py-3 bg-[#d4af37] text-black text-sm font-bold uppercase tracking-wider hover:bg-[#c9a227] transition-colors duration-300 rounded-md">
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
