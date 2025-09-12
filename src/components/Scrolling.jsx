import React, { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const FloatingActions = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 50) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-5 z-50">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="relative flex items-center justify-center w-14 h-14 rounded-full 
                     bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg 
                     hover:scale-110 transition-all duration-500 animate-fadeInUp"
        >
          <FaArrowUp className="text-xl" />

          {/* Circular progress ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="23"
              stroke="#ffffff33"
              strokeWidth="3.5"
              fill="none"
            />
            <circle
              cx="28"
              cy="28"
              r="23"
              stroke="#14b8a6"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 23}
              strokeDashoffset={
                2 * Math.PI * 23 -
                (scrollProgress / 100) * (2 * Math.PI * 23)
              }
              className="transition-all duration-300"
            />
          </svg>
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919369535853"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full 
                   bg-green-500 text-white shadow-xl hover:scale-110 
                   transition-transform duration-500 animate-pulse"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default FloatingActions;
