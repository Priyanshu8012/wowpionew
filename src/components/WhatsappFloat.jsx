import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => (
  <a
    href="https://wa.me/+919369535853"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-5 right-5 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center p-4 transition-all duration-300 animate-bounce-slow"
    aria-label="Chat on WhatsApp"
    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
  >
    <FaWhatsapp className="text-3xl md:text-4xl" />
  </a>
);

// Optional: A little animation for attention!
const style = `
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-8px);}
}
.animate-bounce-slow {
  animation: bounce-slow 2.2s infinite;
}
`;

export default () => (
  <>
    <style>{style}</style>
    <WhatsappFloat />
  </>
);