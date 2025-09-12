import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo3.png"; // ✅ Import your logo

const Footer = () => (
  <footer className="relative z-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white pt-16 pb-8 overflow-hidden">
    {/* Aqua glow effects */}
    <div className="pointer-events-none absolute -top-24 -left-20 w-80 h-80 rounded-full bg-teal-400 opacity-20 blur-3xl"></div>
    <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-500 opacity-15 blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Logo & Slogan */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-3 mb-4">
  {/* ✅ Logo properly sized */}
  <img 
    src={logo} 
    alt="WOWPIO Logo" 
    className="h-16 w-auto object-contain drop-shadow-lg" 
  />
</div>
        <p className="text-teal-300 italic font-medium mb-3 text-base">
          "Purity You Can Trust"
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          WOWPIO delivers ultra-pure, mineral-rich, eco-friendly water for
          homes, offices, events, and communities — always with a smile.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-semibold mb-4 text-lg text-teal-300 uppercase tracking-wide">
          Quick Links
        </h3>
        <ul className="space-y-2 text-gray-300 text-base">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:text-teal-200 hover:translate-x-1 inline-block transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-semibold mb-4 text-lg text-teal-300 uppercase tracking-wide">
          Contact
        </h3>
        <div className="space-y-3 text-gray-300 text-base">
          <div className="flex items-center gap-3">
            <span className="text-teal-400 text-lg">📧</span>
            <a
              href="mailto:care@wowpio.com"
              className="hover:text-teal-200 transition"
            >
              care@wowpio.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-teal-400 text-lg">☎️</span>
            <a
              href="tel:+915322975853"
              className="hover:text-teal-200 transition"
            >
              0532 297 5853
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-teal-400 text-lg">📍</span>
            <span>Tilmapur, Varanasi, U.P, 221007</span>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-semibold mb-4 text-lg text-teal-300 uppercase tracking-wide">
          Follow Us
        </h3>
        <div className="flex gap-4">
          {[
            { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
            { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
            { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
            { href: "https://wa.me/+919369535853", icon: <FaWhatsapp />, label: "WhatsApp" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 text-black hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="relative mt-12 border-t border-gray-700 pt-5 text-center text-gray-400 text-xs z-10">
      © {new Date().getFullYear()}{" "}
      <strong className="text-teal-300">WOWPIO</strong> — All rights reserved.
      <span className="block mt-1">
        Made with  by
        Team WOWPIO
      </span>
    </div>
  </footer>
);

export default Footer;
