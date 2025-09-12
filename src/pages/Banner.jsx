import React, { useState, useEffect } from "react";
import "../../src/HeroSection.css";

// ✅ Import your Aqua Wow banners
import bannerDesktop from "../assets/Banner/Aqua-desktop.png";
import bannerMobile from "../assets/Banner/Aqua-mobile.png";
import CommingsoonDesktop from "../assets/Banner/commingssondesktop.png";
import CommingsoonMobile from "../assets/Banner/coomingsoonmobile.png";

const tabContent = {
  packaged: {
    title: "Aqua Wow Drinking Water",
    imageDesktop: bannerDesktop,
    imageMobile: bannerMobile,
  },
  vedica: {
    title: "Vedica Himalayan Water",
    imageDesktop: CommingsoonDesktop,
    imageMobile: CommingsoonMobile,
  },
  soft: {
    title: "Soft Drinks",
    imageDesktop: CommingsoonDesktop,
    imageMobile: CommingsoonMobile,
  },
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("packaged");
  const [fadeKey, setFadeKey] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [activeTab, isMobile]);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Hero Image with Overlay */}
      <div
        key={fadeKey}
        className="absolute top-0 left-0 w-full h-full transition-all duration-700 animate-fadeSlide z-0"
      >
        <img
          src={isMobile ? tabContent[activeTab].imageMobile : tabContent[activeTab].imageDesktop}
          alt={tabContent[activeTab].title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Mobile Dot Navigation */}
      <div className="relative z-10 h-full flex items-end justify-center pb-8 md:hidden">
        {Object.keys(tabContent).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`w-3.5 h-3.5 mx-1 rounded-full border border-white/40 transition-all duration-300 shadow-md ${
              activeTab === key
                ? "bg-white shadow-white/50 scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Desktop Tab Navigation */}
      <div className="absolute bottom-0 left-0 w-full hidden md:flex justify-center gap-4 bg-gradient-to-r from-[#0a192f]/95 via-[#112240]/95 to-[#0a192f]/95 text-white py-5 px-8 z-20 shadow-2xl rounded-t-2xl backdrop-blur-md border-t border-cyan-500/20">
        {Object.keys(tabContent).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`py-2.5 px-6 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
              activeTab === key
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg scale-105"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {tabContent[key].title}
          </button>
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: scale(1.05) translateY(15px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.9s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
