import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import img from "../assets/product/Commingsoon.png";
import One from "../assets/product/1000.png";
import OneO from "../assets/product/10003.png";
import Five from "../assets/product/500.png";
import TwoL from "../assets/product/2000.png"; // 2L image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Bottle Icon
const BottleIcon = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 38 38" fill="none">
    <rect x="12" y="4" width="14" height="28" rx="7" fill="#13bdb7" />
    <rect x="15" y="2" width="8" height="4" rx="2" fill="#1979ab" />
    <rect x="13" y="32" width="12" height="3" rx="1.5" fill="#1979ab" opacity="0.15"/>
    <rect x="16" y="35" width="6" height="2" rx="1" fill="#13bdb7" opacity="0.5"/>
  </svg>
);

// Custom Arrow Buttons
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer"
    onClick={onClick}
  >
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#13bdb7">
      <path d="M8 4l8 8-8 8" stroke="#13bdb7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer"
    onClick={onClick}
  >
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#13bdb7">
      <path d="M16 4l-8 8 8 8" stroke="#13bdb7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

// Products Data
const products = [
  {
    tab: "All",
    items: [
      { name: "Aqua Wow 250ml", img: img, price: "₹ 15.00", desc: "200ml Bottle" },
      { name: "Aqua Wow 500ml", img: Five, price: "₹ 10.00", desc: "500ml Bottle" },
      { name: "Aqua Wow 1L", img: One, extraImgs: [One, OneO], price: "₹ 20.00", desc: "1L Bottle" },
      { name: "Aqua Wow 2L", img: TwoL, price: "₹ 45.00", desc: "2L Bottle" },
    ],
  },
  { tab: "Aqua Wow 500ml", items: [{ name: "Aqua Wow 500ml", img: Five, price: "₹ 10.00", desc: "500ml Bottle" }] },
  { tab: "Aqua Wow 1L", items: [{ name: "Aqua Wow 1L", img: One, extraImgs: [One, OneO], price: "₹ 20.00", desc: "1L Bottle" }] },
  { tab: "Aqua Wow 2L", items: [{ name: "Aqua Wow 2L", img: TwoL, price: "₹ 45.00", desc: "2L Bottle" }] },
];

const tabNames = ["All", "Aqua Wow 500ml", "Aqua Wow 1L", "Aqua Wow 2L"];
const phoneNumber = "919369535853";

function getWhatsappLink(product) {
  const message = `Order Request: Product: ${product.name}, Price: ${product.price}, Details: ${product.desc}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

const AquaWowopioProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeProducts = products.find((cat) => cat.tab === activeTab)?.items || [];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#e0fdff] via-[#cbe2ee] to-[#e0ffe6] pb-16">
      {/* Header & Tabs */}
      <header className="w-full text-center pt-10 pb-5">
        <h1 className="text-5xl font-extrabold text-[#13bdb7] mb-2">Aqua Wow</h1>
        <p className="text-[#1979ab] text-xl font-semibold mb-8">Premium Packaged Drinking Water</p>

        {!isMobile && (
          <div className="flex justify-center gap-3 flex-wrap">
            {tabNames.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                  activeTab === tab ? "bg-[#21d375] text-white scale-105" : "bg-[#e3f0fa] text-[#1979ab]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Products Grid / Slider */}
      {isMobile ? (
        <Slider {...sliderSettings} className="px-4">
          {activeProducts.map((product, i) => (
            <div key={i} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      ) : (
        <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
          {activeProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </section>
      )}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="relative bg-white rounded-3xl shadow-lg p-7 flex flex-col items-center transition-all duration-500 hover:scale-105 hover:shadow-2xl">
    <span className="absolute -top-7 left-1/2 -translate-x-1/2 z-10"><BottleIcon /></span>
    <div className="w-full h-72 rounded-xl overflow-hidden shadow mb-6 flex items-center justify-center relative">
      {product.extraImgs ? (
        <div className="relative w-full h-full group">
          {product.extraImgs.map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt={product.name} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx===0?"opacity-100 group-hover:opacity-0":"opacity-0 group-hover:opacity-100"}`} />
          ))}
        </div>
      ) : (
        <img src={product.img} alt={product.name} className="object-cover w-full h-full" />
      )}
    </div>
    <h2 className="text-lg font-extrabold text-[#1979ab] mb-1 text-center uppercase">{product.name}</h2>
    <p className="text-gray-600 text-sm mb-4 text-center">{product.desc}</p>
    <span className="py-2 px-6 rounded-lg font-bold text-lg bg-gradient-to-r from-[#13bdb7] to-[#21d375] text-white mb-2">{product.price}</span>
    <a href={getWhatsappLink(product)} target="_blank" rel="noopener noreferrer" className="w-full block py-2 rounded-full font-bold bg-gradient-to-r from-[#ccb94e] to-[#c39709] text-[#232323] text-center">
      Order Now
    </a>
  </div>
);

export default AquaWowopioProducts;
