import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/our-products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuClass =
    "fixed top-0 right-0 w-full h-full bg-gradient-to-br from-[#0a192f]/90 via-[#112240]/90 to-[#0a192f]/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out" +
    (menuOpen
      ? " translate-x-0 opacity-100"
      : " translate-x-full opacity-0 pointer-events-none");

  return (
    <nav className="bg-gradient-to-r from-[#0a192f] via-[#0d213f] to-[#0a192f] shadow-lg sticky top-0 z-50 transition-all duration-300 text-white border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="h-10 md:h-12 object-contain drop-shadow-lg transition-transform group-hover:scale-110"
            />
          </div>
          <span className="text-[10px] md:text-xs text-cyan-300 font-bold tracking-widest uppercase bg-[#112240] px-2 py-1 rounded shadow-inner group-hover:shadow-cyan-500/30 transition">
            Purity You Can Trust
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative font-medium text-gray-300 hover:text-cyan-300 transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded group-hover:w-full transition-all"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-5 py-2 rounded-full hover:scale-105 transition-all font-semibold shadow-md shadow-emerald-500/30 border border-emerald-400/40"
          >
            <span>Contact</span>
            <FaWhatsapp className="text-green-200 group-hover:animate-pulse" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none transition-transform hover:scale-110"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        <div className={mobileMenuClass}>
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl text-gray-300 hover:scale-110 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Pattern Animation Background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent)] animate-pulse-slow"></div>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="w-64 text-center bg-[#112240]/70 backdrop-blur-md px-6 py-3 rounded-xl text-xl font-semibold text-cyan-200 shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all border border-cyan-500/30"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-3 rounded-full text-xl font-bold text-white shadow-lg hover:scale-105 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact <FaWhatsapp className="text-green-200 group-hover:animate-pulse" />
          </Link>
        </div>
      </div>

      {/* Animation for background pattern */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
